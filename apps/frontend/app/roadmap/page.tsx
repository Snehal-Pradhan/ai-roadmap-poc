import Base from './Base'
import BaseFocusLight from './BaseFocusLight'

export default function page() {
  return (
    <div className="min-h-screen w-screen bg-white flex flex-col items-center justify-center py-20 overflow-x-hidden"> 
      <div className="flex flex-col items-center">
        <div className='m-5 h-20 -translate-x-20'>
          <div>
          <Base scale={0.5} color="slate" />
        </div>
        </div>
        <div className='m-5 h-20 '>
          <div>
          <Base scale={0.5} color="slate" />
        </div>
        </div>
        <div className='m-5 h-20 translate-x-20'>
          <div>
          <Base scale={0.5} color="slate" />
        </div>
        </div>
        <div className='m-5 h-20 '>
          <div>
          <Base scale={0.5} color="blue" />
          <div className='-translate-y-44'>
            <BaseFocusLight scale={1} color='blue'/>
          </div>
        </div>
        </div>
        <div className='m-5 -translate-x-20'>
          <div>
          <Base scale={0.5} color="blue" />
        </div>
        </div>
        <div className='m-5'>
          <div>
          <Base scale={0.5} color="blue" />
        </div>
        </div>
        <div className='m-5 translate-x-20'>
          <div>
          <Base scale={0.5} color="blue" />
        </div>
        </div>
        <div className='m-5'>
          <div>
          <Base scale={0.5} color="blue" />
        </div>
        </div>
        <div className='m-5 -translate-x-20'>
          <div>
          <Base scale={0.5} color="blue" />
        </div>
        </div>
    </div>
    </div>

  )
}
