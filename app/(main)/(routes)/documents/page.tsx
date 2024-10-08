"use client";

import Image from "next/image";
import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { Brain, PlusCircle } from "lucide-react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useAi } from "@/hooks/use-ai";

const DocumentPage = () => {

    const { user } = useUser();

    const router = useRouter();
    const create = useMutation(api.documents.create);

    const useai = useAi();

    const onCreate =  () => {
        const promise =  create({
            title : "Untitled"
        }).then((documentId) => router.push(`/documents/${documentId}`))

        toast.promise(promise , {
            loading : "Creating a new note ..",
            success : "Note Created",
            error : "Failed to create a new Note."
        })
    };

    return (
        <div className="h-full flex flex-col items-center justify-center space-y-4">
            <Image 
                src="/man.png"
                height="300" 
                width="300"
                alt="Cover Image"
                className="dark:hidden"
            />
            <Image 
                src="/mandark.png"
                height="300" 
                width="300"
                alt="Cover Image"
                className="dark:block hidden"
            />

            <h2 className="text-lg font-medium">
                Namaste! {user?.firstName}, 
            </h2>

        <div className="flex gap-x-2">
            <Button  variant="outline" size='sm' onClick={onCreate}>
                <PlusCircle className="h-4 w-4 mr-2" />
                Add Note
            </Button>
            <Button size='sm' variant='outline' onClick={useai.onOpen}>
                <Brain className="h-4 w-4 mr-2" />
                Use AI
            </Button>
            </div>

        </div>
    )
}


export default DocumentPage ;