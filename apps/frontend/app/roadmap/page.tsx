import React from 'react'

export default function page() {
  return (
<div className="h-screen w-screen bg-slate-800 p-10 flex items-center justify-center">
  <div className="transform scale-40 origin-top-left flex flex-col">
    <div className="flex translate-y-16">
      <div className="h-24 w-20 bg-gradient-to-t from-green-500/50 via-slate-700/50 to-transparent -skew-y-12 translate-y-4"></div>
      <div className="h-24 w-20 bg-gradient-to-t from-green-500/50 via-slate-700/50 to-transparent skew-y-12 translate-y-4"></div>
    </div>

    <div className="flex">
      <div className="h-24 w-20 bg-gradient-to-t from-green-500/70 via-slate-700/30 to-transparent skew-y-12"></div>
      <div className="h-24 w-20 bg-gradient-to-t from-green-500/70 via-slate-700/30 to-transparent -skew-y-12"></div>
    </div>
  </div>
</div>
  )
}
