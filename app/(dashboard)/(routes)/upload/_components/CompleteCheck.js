
import React from 'react'
//import { useUser } from '@clerk/nextjs'



function CompleteCheck() {
  ///const {user}=useUser();

  return (
    <div className="max-w-2xl mx-auto mt-8">
    <section className="overflow-hidden rounded-lg shadow-2xl md:flex">
      <img
        alt="Uploaded Files"
        src="https://static.vecteezy.com/system/resources/previews/022/089/124/original/success-upload-data-document-file-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg"
        className="h-32 w-full object-cover md:w-1/3"
      />

      <div className="p-4 md:w-2/3">
        <p className="text-sm font-semibold uppercase tracking-widest">Successful Uploaded Files</p>

        <h2 className="mt-6 font-black text-3xl lg:text-4xl">
          {/* <span className="block text-blue-600">{user.fullName}</span> */}
          <span className="mt-2 block text-sm">Congratulations! Your files have been successfully uploaded.</span>
        </h2>

        <p className="mt-8 text-xs font-medium text-gray-500">
          Successfully uploaded file
        </p>
      </div>
    </section>
  </div>
  )
}

export default CompleteCheck