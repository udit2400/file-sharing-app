"use client"

import React, { useState } from 'react'
import AlertMsg from './AlertMsg';
import FilePreview from './FilePreview';
import ProgressBar from './ProgressBar';

function UploadForm({uploadBtnClick, progress}) {
   const [file, setFile] = useState();
   const [error, setError] = useState(null);

   const onFileSelect = (file) => {
       console.log(file)
       if(file && file.size > 2 * 1024 * 1024) {
           console.log('file too large')
           setError('File too large! Max size is 2MB')
           return;
       }
       setError(null);
       setFile(file);
   }

  return (
    <div className='text-center'>
        
<div class="flex items-center justify-center w-full">
    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-white-300 border-dashed rounded-lg cursor-pointer bg-white-50 dark:hover:bg-white-800 dark:bg-white-700 hover:bg-blue-100 dark:border-blue-600 dark:hover:border-gray-500 dark:hover:bg-light-600">
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <svg class="w-12 h-12 mb-4 text-blue-500 dark:text-blue-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p class="mb-2 text-lg md:text-2xl text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or <strong className='text-primary'>Drag</strong> and <strong className='text-primary'>Drop</strong></p>
            <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (Max Size : 2MB)</p>
        </div>
        <input id="dropzone-file" type="file" class="hidden" onChange={(event) => onFileSelect(event.target.files[0])}/>
    </label>
</div> 
{error? <AlertMsg msg={error} />:null}
{file? <FilePreview file={file} removeFile={() => setFile(null)} />:null}
    {progress>0 ? <ProgressBar progress={progress}/>: 
    <button disabled={!file} className='p-2 bg-primary rounded-full text-white w-[30%] mt-5 disabled:bg-gray-400' 
    onClick={()=> uploadBtnClick(file)}>
     Upload</button>}
    </div>
  )
}

export default UploadForm