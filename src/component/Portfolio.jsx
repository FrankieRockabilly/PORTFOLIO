import React from 'react'
import PortfolioList from '../List/PortfolioList.json'

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
        {PortfolioList.map((value, index)=>{
            if(PortfolioList.length == 0){
                <p className='text-center text-4xl font-mono'>Data tidak tersedia</p>
            }else{
                return(
                <div className="md:w-[60rem]" key={index}>
                    <div className="flex flex-wrap justify-center border rounded-3xl gap-3">
                        <div className='h-full w-full md:w-[40rem] md:h-[26rem] border overflow-hidden bg-cover'>
                            <img src={value.image} alt="" 
                            className='w-full'/>
                        </div>
                    <div className='md:w-52 p-3 flex flex-col px-2 justify-between'>
                        <div className='flex flex-col gap-3'>
                            <p className='px-3 py-2 bg-gray-300 rounded-full w-40'>{value.header} </p>
                            <h1 className='font-bold'>{value.judul} </h1>
                            <p className='line-clamp-4 md:line-clamp-6'>{value.keterangan} </p>
                        </div>
                        <div>
                            <button className='btn btn-success'>Read More</button>
                        </div>
                    </div>
                    </div>
                </div>

                )
            }
        })}
        <div className="flex items-center gap-5">
            <button className='bg-kuning px-5 py-2 rounded-full border border-kuning hover:bg-white hover:text-kuning transition-all ease-in-out duration-300'>Latest Project</button>
            <button className='px-5 py-2 border bg-black text-white rounded-full hover:text-kuning hover:border-kuning transition-all ease-in-out duration-300'>Our Services</button>
        </div>
    </div>
    </>
  )
}

export default Portfolio