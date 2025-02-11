import React from 'react'
import ChangingTextHome from './ChangingTextHome'

const Hero = () => {
    const texts = ['The Next Level', 'Famous', 'Good Things']
  return (
    <>
    <div className='flex flex-wrap py-20 gap-32 px-7 md:px-24'>
        <div>
            <h1  className='text-4xl md:text-7xl font-bold w-80 md:w-[40rem]'>Ready to take your online business to
            <ChangingTextHome texts={texts}/>
            </h1>
            <p className='py-10 text-2xl'>Leverage tailored digitals solution to skyrocket your growth</p>
            <div className="flex flex-col md:flex-row gap-5">
                <button className='bg-kuning px-5 py-3 rounded-full text-black font-semibold hover:bg-white transition-all duration-300 '>Contact Me</button>
                <button className=' px-5 py-3 border-2 text-white font-semibold border-white rounded-full hover:text-kuning hover:border-kuning transition-all duration-300 '>Porfolio</button>
            </div>
        </div>

        <div className='hidden md:block'>
            <div className='bg-kuning h-[30rem] w-96 -rotate-[20deg] rounded-2xl'>
                <div className='bg-kuning h-[30rem] w-96 rotate-[20deg] overflow-hidden rounded-2xl hover:rotate-6 transition-all ease-in-out duration-300'>
                    <img src="ehm.jpg" alt=""/>
                </div>
            </div>
        </div>
    </div>

    </>
    )
}

export default Hero