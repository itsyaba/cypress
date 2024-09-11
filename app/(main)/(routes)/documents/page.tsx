"use client"

import { Button } from '@/components/ui/button'
import { useUser } from '@clerk/nextjs'
import { PlusCircle } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import {api} from "@/convex/_generated/api"
import { useMutation } from 'convex/react'
import { toast } from 'sonner'

const DocumentPage = () => {
  const create = useMutation(api.documents.create);
  const onCreate = () =>{
    const promise = create({title: "Untitled"})

    toast.promise(promise , {
      loading : "Creating a new note..." , 
      success: "New note created!" , 
      error: "Failed to create a new note." ,
    })
  }
  const { user } = useUser();
  return (
    <div className="flex h-full flex-col items-center justify-center space-y-4">
      <Image
        src="/empty.svg"
        alt="empty"
        height="300"
        width="300"
        priority
        className="h-auto dark:hidden"
      />
      <Image
        src="/empty-dark.svg"
        alt="empty"
        height="300"
        width="300"
        priority
        className="hidden h-auto dark:block"
      />
      <h2 className="text-lg font-medium">
        Welcome to {user?.firstName}&apos;s Workspace
      </h2>
      <Button onClick={onCreate}>
        <PlusCircle className="mr-2 h-4 w-4" />
        Create a note
      </Button>
    </div>
  )
}

export default DocumentPage