"use client"

import { useEdgeStore } from "@/lib/edgestore";
import { Block, BlockNoteEditor, PartialBlock } from "@blocknote/core";
import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useCreateBlockNote } from "@blocknote/react";
import { useTheme } from "next-themes";

import { useState } from "react";

interface EditorProps {
    onChange : (value : string) => void ;
    initialContent?:string;
    editable?:boolean;
}

export const Editor =  ({
    onChange ,
    initialContent,
    editable
} : EditorProps ) => {

    const { edgestore } = useEdgeStore();

    const handleUpload = async (file : File) => {
        const response = await edgestore.publicFiles.upload({
            file
        })


        return response.url;
    }

    

    const {resolvedTheme} = useTheme();

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [blocks, setBlocks] = useState<Block[]>([]);
    

    const editor : BlockNoteEditor = useCreateBlockNote({
        
        initialContent : initialContent ? JSON.parse(initialContent) as PartialBlock[] : undefined ,
        uploadFile : handleUpload ,
    });


    return (
        <div> 
            <BlockNoteView 
                editor={editor}
                theme={resolvedTheme === "dark" ? "dark" : "light"}
                editable={editable}
                onChange={() => {
                    
                    setBlocks(editor.document);
                    onChange(JSON.stringify(editor.document, null, 2));
                  }}
        
            />   
         </div>
    )
}