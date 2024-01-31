"use client";
import React from 'react'
import { UserButton } from "@clerk/nextjs";
import { useRouter } from 'next/navigation';

function Files() {
  const router=useRouter();

  router.push('/upload/');
  return (
    <div>
      {/* router.push('/file-preview/'+fileDocId); */}
         {/* <UserButton afterSignOutUrl="/"/> */}
    </div>
  )
}

export default Files