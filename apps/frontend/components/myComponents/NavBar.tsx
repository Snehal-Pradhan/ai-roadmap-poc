import React from 'react'

function NavBar() {
  return (
    <div className='h-16  border fixed top-0 left-0 right-0 z-50'>
        <div className='flex h-full px-12 justify-between items-center bg-white '>
        <div className="">ai-roadmap-poc</div>
        <div className='flex'>
            <div>Solutions</div>
            <div>Resources</div>
            <div>Pricing</div>
        </div>
        <div className='flex'>
            <div>Login</div>
            <div>Get Started Free</div>
        </div>
        </div>
    </div>
  )
}

export default NavBar