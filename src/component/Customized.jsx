import React from 'react'

const Customized = () => {
  return (
    <>
    <div>
        <div className="bg-zinc-900">
            <div className="text-center text-white px-16 py-10 md:py-20 flex flex-col gap-5">
                <h1 className='text-3xl font-bold'>Ready to take your online business to the <span className='text-kuning'>next level ?</span></h1>
                <p className='font-semibold'>Customized digital solution tailored to elevate your brand, boost your reach, and increase your sales</p>
                <div className="flex justify-center gap-5">
                <button className='bg-kuning px-8 py-4 rounded-full border border-kuning hover:bg-white hover:text-kuning transition-all ease-in-out duration-300'>Latest Project</button>
                <button className='px-8 py-4 border bg-black text-white rounded-full hover:text-kuning hover:border-kuning transition-all ease-in-out duration-300'>Our Services</button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Customized