import  { Download } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react'

function FileItem({file}) {
     const [password, setPassword] = useState();
  return file &&(
    <div>
     <div className='p-5 rounded-md bg-white flex flex-col items-center'>
        <div className='text-center flex-col gap-3 items-center flex'>
            <h2 className='text-[20px] text-gray-600'>
              <strong className='text-primary'>{file.userName}</strong>
              shared a file with you
            </h2>
            <h2 className='text-[18px] text-gray-400'>Find File Details Below</h2>
          <Image src='/download.gif'
          width={150}
          height={150}
          className='w-[150px] h-[150px] p-5' />

          <h2 className='text-gray-500 text-[15px]'>
            {file.fileName} ⚡ {file.fileType} ⚡{file.fileSize} Bytes
          </h2>
        </div>

      {file.password.length>3? <input type='password'
      className='p-2 border rounded-md text-[14px] mt-5 text-center outline-blue-400'
      onClick={(e)=>setPassword(e.target.value)}
      placeholder='Enter Password to Access' />:null}

      <button href='/' className='flex gap-2 p-2 bg-primary text-white rounded-full w-full items-center hover:bg-blue-600 text-[14px] mt-5 text-center justify-center
      disabled:bg-gray-300'
       onClick={()=>window.open(file?.fileUrl)}
       disabled={file.password!==password}>
        <Download className='h-4 w-4'/>Download 
      </button>
        <h2 className='text-gray-400 text-[12px]'>Term and Conditions</h2>
     
     </div>
    </div>
  )
}

export default FileItem