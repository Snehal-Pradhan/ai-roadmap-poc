import React from 'react'
import ProgressUpload from './progressUpload'

function page() {
  return (
    <div className=' border border-green-600 h-screen w-screen pt-10 pl-60 bg-neutral-800 relative'>
      <div className='border flex justify-center items-center h-full bg-white'>
        <ProgressUpload/>
      </div>

    </div>
  )
}

export default page