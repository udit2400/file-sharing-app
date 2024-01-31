"use client";
import React from 'react'
import { UserButton } from "@clerk/nextjs";

function Files() {
  return (
    <div>
         <UserButton afterSignOutUrl="/"/>
    </div>
  )
}

export default Files