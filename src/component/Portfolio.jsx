import React from 'react'

const Portfolio = () => {
  return (
    <>
    <div className='px-5 bg-white text-black flex flex-col gap-10 py-14 justify-center items-center h-full'>
        <div className='flex flex-col gap-5 py-5 md:w-[40rem] items-center md:items-start text-center md:text-left'>
            <h1 className=' text-gray-900 px-3 py-1 bg-gray-300 rounded-full w-32 text-center'>Portfolio</h1>
            <h1 className='text-3xl font-bold text-zinc-800 md:text-5xl'>Discover my unique skillset</h1>
            <p className='text-gray-500'>My some project</p>
        </div>

        {/* items */}
        <div className="md:w-[60rem]">
            <div className="flex flex-wrap justify-center border rounded-3xl gap-3">
                <div className='h-full w-full md:w-[40rem] md:h-[26rem] border overflow-hidden bg-cover'>
                    <img src="https://images.unsplash.com/photo-1597534458220-9fb4969f2df5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" alt="" 
                    className='w-full'/>
                </div>
            <div className='md:w-52 p-3 flex flex-col px-2 justify-between'>
                <div className='flex flex-col gap-3'>
                    <p className='px-3 py-2 bg-gray-300 rounded-full w-40'>Template, framer</p>
                    <h1 className='font-bold'>Website Silahul Mukmin</h1>
                    <p className='line-clamp-4 md:line-clamp-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis aut architecto nam, dicta id sed dolorum delectus placeat illum aliquid eaque voluptatibus eius officiis obcaecati! Rerum rem similique sit deserunt pariatur accusantium quibusdam! Officia ullam totam, distinctio laborum est voluptate aliquam voluptatum excepturi ad, possimus delectus exercitationem reprehenderit sit ratione!</p>
                </div>
                <div>
                    <button className='btn btn-success'>Read More</button>
                </div>
            </div>
            </div>
        </div>
        <div className="flex items-center gap-5">
            <button className='bg-kuning px-5 py-2 rounded-full border border-kuning hover:bg-white hover:text-kuning transition-all ease-in-out duration-300'>Latest Project</button>
            <button className='px-5 py-2 border bg-black text-white rounded-full hover:text-kuning hover:border-kuning transition-all ease-in-out duration-300'>Our Services</button>
        </div>
    </div>
    </>
  )
}

export default Portfolio