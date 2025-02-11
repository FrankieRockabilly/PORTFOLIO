import React from 'react'

const About = () => {
  return (
    <>
    <div className='px-5 bg-white text-black flex flex-wrap gap-10 py-14 justify-center items-center'>
        <div className='h-96 w-80 bg-kuning'>
            <div className='h-96 w-80 rotate-12 overflow-hidden'>
                <img src="uppp.jpg" alt="frengky" 
                className='bg-cover'/>
            </div>
        </div>

        <div className='flex flex-col gap-5 py-5 md:w-[40rem] items-center md:items-start text-center md:text-left'>
            <h1 className=' text-gray-900 px-3 py-1 bg-gray-300 rounded-full w-32 text-center'>About Me</h1>
            <h1 className='text-4xl font-bold text-zinc-800 md:text-5xl'>Get unlimited app development tailored to your needs</h1>
            <p className='text-xl'>Saya adalah Lulusan dari Universitas Pasir Pengaraian Kabupaten Rokan Hulu dan merupakan salah satu alumni di salah satu platform bootcamp indonesia bernama <span className='text-kuning font-bold text-2xl'>Harisenin.com</span></p>
            <div className='flex gap-5 items-center justify-center'>
                <button className='border border-black px-5 py-2 rounded-lg font-semibold hover:bg-kuning hover:border-white hover:text-white transition-all ease-linear duration-200'>View my Portfolio</button>
                <button className='px-5 py-2 hover:text-kuning transition-all ease-in-out duration-150'>Contact Me</button>
            </div>
        </div>
    </div>

    {/* section kedua */}
    <div className='px-5 bg-white text-black flex flex-wrap gap-10 py-14 justify-center items-center'>

        <div className='flex flex-col gap-5 py-5 md:w-[40rem] items-center md:items-start text-center md:text-left'>
            <h1 className=' text-gray-900 px-3 py-1 bg-gray-300 rounded-full w-32 text-center'>About Me</h1>
            <h1 className='text-4xl font-bold text-zinc-800 md:text-5xl'>Get unlimited app development tailored to your needs</h1>
            <p className='text-xl'>Saya adalah Lulusan dari Universitas Pasir Pengaraian Kabupaten Rokan Hulu dan merupakan salah satu alumni di salah satu platform bootcamp indonesia bernama <span className='text-kuning'>Harisenin.com</span></p>
            <div className='flex gap-5 items-center justify-center'>
                <button className='border border-black px-5 py-2 rounded-lg font-semibold hover:bg-kuning hover:border-white hover:text-white transition-all ease-linear duration-200'>View my Portfolio</button>
                <button className='px-5 py-2 hover:text-kuning transition-all ease-in-out duration-150'>Contact Me</button>
            </div>
        </div>
        <div className='h-96 w-80 bg-kuning '>
            <div className='h-96 w-80 rotate-12 overflow-hidden'>
                <img src="https://scontent.fpku3-2.fna.fbcdn.net/v/t39.30808-6/241997384_587180222301699_2120037204314785245_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=19026a&_nc_eui2=AeFzzb-M_bJGg9pNLgUgY_hloWu5fPBFcQGha7l88EVxAaa7dQ-HW1NSOoKIO1Q5VxhuYnU9SFm1ijzNw6UFrNtw&_nc_ohc=lxu8D40G9IQAX_mnxGT&_nc_zt=23&_nc_ht=scontent.fpku3-2.fna&oh=00_AfCSyllmFYz2SRX0RKehVXSlX6pLtRc-kH7jWDS_CYVhFA&oe=64F0A354" alt="frengky" 
                className='bg-cover'/>
            </div>
        </div>
    </div>
    </>
  )
}

export default About