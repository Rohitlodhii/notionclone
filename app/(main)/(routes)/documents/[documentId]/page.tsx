"use client"

import React from 'react'
import { useMutation, useQuery } from 'convex/react'
import { Id } from '@/convex/_generated/dataModel'
import { api } from '@/convex/_generated/api';
import { Toolbar } from '@/components/toolbar';
import Cover from '@/components/cover';
import { Skeleton } from '@/components/ui/skeleton';
import { Editor } from '@/components/editor';


interface DocumentIdProps {
  params : {
    documentId : Id<"documents">,

  };
}


const DocumentIdPage = ({
  params
} : DocumentIdProps) => {

  //Function to render the Data in the editor : 
  const update = useMutation(api.documents.update);

  const onChange = ( content : string ) => {
    update({
      id : params.documentId ,
      content
    })
  }

  const document = useQuery(api.documents.getById , {
    documentId : params.documentId
  });

  if(document === undefined){
    return (
    <div>
      <Cover.Skeleton/>
      <div className='md:max-w-3xl lg:max-w-4xl mx-auto mt-10'>
        <div className='space-y-4 pl-8 pt-4'>
          <Skeleton className='h-14 w-[50%]'/>
          <Skeleton className='h-14 w-[50%]'/>
          <Skeleton className='h-14 w-[50%]'/>
          <Skeleton className='h-14 w-[50%]'/>
        </div>
      </div>
    </div>
    )
  }

  if(document  === null) {
    return <div>Not Found..</div>
  }


  return (
    <div className='pb-40'>
      <Cover url={document.coverImage} />
      <div className='md:max-w-3xl lg:max-w-4xl mx-auto'>
        <Toolbar initialData = {document} />

        <Editor 
          onChange={onChange}
          initialContent={document.content}
          editable={true}
        />


      </div>
    </div>
  )
}

export default DocumentIdPage
