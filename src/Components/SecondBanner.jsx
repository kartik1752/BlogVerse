import React from 'react'
import blog from '../../public/blog.jpg'
function SecondBanner() {
  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row'>
        <div className='w-full md:w-1/2 mt-12 md:mt-32 order-2'>
        <div className='space-y-12'>
          <h1 className='text-4xl font-bold'>
            Free of use, with varity of<br></br><span className='text-green-300'>Create</span> <span className='text-orange-300'>Read</span> <span className='text-pink-300'>Update</span> <span className='text-yellow-300'>Delete</span> only at Blog<span className='text-blue-400'>Verse</span>
            
          </h1>
          <button class="btn bg-blue-400 text-white">Click to know more</button>
          
        </div>
        
        
      </div>
      <div className='w-full md:w-1/2 flex justify-center items-center order-1'>
        <img src={blog} className='w-92 h-92' alt="Banner" />
      </div>
    </div>
  )
}

export default SecondBanner