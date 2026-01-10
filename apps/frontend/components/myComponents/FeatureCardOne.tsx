import React from 'react'

function FeatureCardOne() {
  return (
    <div className='h-160  border p-10 px-16 w-full flex justify-between gap-2'>
        <div className='w-1/3 h-full border'>fetures look at them</div>
        <div className='w-2/3 h-full flex flex-col overflow-scroll'>
            <div className='h-100 w-full bg-indigo-200 rounded-2xl'>feature 1</div>
            <div className='h-100 w-full bg-indigo-200 rounded-2xl'>feature 2</div>
            <div className='h-100 w-full bg-indigo-200 rounded-2xl'>feature 3</div>
        </div>
    </div>
  )
}

export default FeatureCardOne