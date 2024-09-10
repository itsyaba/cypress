"use client"

import { Button } from '@/components/ui/button'
import { useUser } from '@clerk/nextjs'
import { PlusCircle } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const DocumentPage = () => {
  const onCreate = () =>{}
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
        Welcome to {user?.firstName}&apos;s Cypress
      </h2>
      <Button onClick={onCreate}>
        <PlusCircle className="mr-2 h-4 w-4" />
        Create a note
      </Button>
    </div>
  )
}

export default DocumentPage