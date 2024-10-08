"use client"

import { useAi } from "@/hooks/use-ai";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { generateContent } from "@/controllers/geminiapi";
import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { ReloadIcon } from "@radix-ui/react-icons";



const AiModal = () => {
    const useai = useAi();
    const createbyai = useMutation(api.documents.createbyai);

    const [isLoading , setIsLoading] = useState(false);

    const router =  useRouter();

    const [inputValue, setInputValue] = useState('');
   

    const genContent =()=> {
        setIsLoading(true)
      
        generateContent({call : inputValue})
            .then((result)=> {
                const raw = result.response.text();
                const initialdata = raw.replace(/^```json\s*|\s*```$/g, '');
                const promise = createbyai({ title : "Untitled " , initialData : initialdata })
                      .then((documentId) => {
                        router.push(`/documents/${documentId}`)
                        useai.onClose();
                    })

                     setIsLoading(false);
                      
                      toast.promise( promise , {
                         loading : "Creating a node with ai ...",
                         success : "New note created with ai!",
                         error : "Failed to create a new node."
                    })
               
            })
            .catch((error)=>{
                console.log("error : " , error)
            })
            
    }



    return ( 
        <Dialog open={useai.isOpen} onOpenChange={useai.onClose}>
            <DialogContent>
                <DialogHeader className="border-b pb-3">
                    <h2 className="text-lg font-medium">
                       <DialogTitle> Generate with Ai</DialogTitle>
                    </h2>

                </DialogHeader>
                <div className="flex  justify-between flex-col gap-2 ">
                   <Input value={inputValue} onChange={(event)=>setInputValue(event.target.value)} className="w-full" placeholder="Your Prompt..." />
                   

                {!isLoading ? (

                    <Button onClick={genContent}>Generate</Button>

                ):(
                    <Button disabled>
                    <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                    Please Wait
                  </Button>
                )}

                </div>
            </DialogContent>

        </Dialog>
     );
}
 
export default AiModal;