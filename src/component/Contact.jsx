import React from 'react'

const Contact = () => {
  return (
    <>
        <div className='bg-white py-20 px-16 flex flex-wrap items-center gap-10'>
            {/* items1 */}
            <div className='flex flex-col gap-5 w-full md:w-1/2'>
                <h1 className='font-bold text-2xl text-black'>Frengki Iskandar</h1>
                <div className="flex flex-wrap gap-2">
                    <input type="text" placeholder='Enter your email'
                    className='px-4 py-4 bg-zinc-300 rounded-full text-black w-full md:w-2/4'/>
                    <button className='px-4 py-4 w-full md:w-1/4 bg-black rounded-full hover:bg-zinc-900 font-semibold text-white'>Subscribe</button>
                </div>
            </div>

            {/* items2 */}
            <div className='flex flex-wrap gap-5 text-lg'>
                <div className='flex flex-col gap-5 w-full md:w-72'>
                    <h1 className='font-semibold text-black'>Pages</h1>
                    <a href="#"><h1 className='hover:text-kuning'>Home</h1></a>
                    <a href="#"><h1 className='hover:text-kuning'>Case studies</h1></a>
                    <a href="#"><h1 className='hover:text-kuning'>Pricing</h1></a>
                </div>

                <div className='flex flex-col gap-5 w-full md:w-72'>
                    <h1 className='font-semibold text-black'>Resources</h1>
                    <a href="#"><h1 className='hover:text-kuning'>About me</h1></a>
                    <a href="#"><h1 className='hover:text-kuning'>Contact</h1></a>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact