"use client"

import { ConfirmModal } from "@/components/modals.tsx/confirm-modal";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useMutation } from "convex/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface BannerProps  {
    documentId : Id<"documents">;
}

export const Banner = ({
    documentId 
} :BannerProps) => {

    const router = useRouter();

    const remove = useMutation(api.documents.remove);
    const restore = useMutation(api.documents.restore)


    const onRemove = () => {
        const promise = remove({id:documentId})
           
        toast.promise(promise ,{
            loading : "Deleting Note...",
            success : "Note Deleted!",
            error:"Failed to delete note"
        });


        router.push('/documents')


    }

    const onRestore = () => {
        const promise = restore({id:documentId})

        toast.promise(promise ,{
            loading : "Restoring Note...",
            success : "Note Restored!",
            error:"Failed to Restore note"
        })
    }

    return ( 
        <div className="w-full bg-rose-500 text-center text-sm p-2 text-white flex items-center justify-center gap-x-2">
            <p>This page is in the trash</p>

            <Button size='sm' variant="outline" className="border-white bg-transparent hover:bg-primary/5 text-white hover:text-white p-1 px-2 h-auto font-normal" onClick={onRestore}>
                Restore Page
            </Button>

            <ConfirmModal onConfirm={onRemove}>
            <Button size='sm' variant="outline" className="border-white bg-transparent hover:bg-primary/5 text-white hover:text-white p-1 px-2 h-auto font-normal" >
                Delete Forever ?
            </Button>
            </ConfirmModal>
           
        </div>
     );
}
