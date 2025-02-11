import React from 'react'
import {BsFacebook, BsLinkedin} from 'react-icons/bs'
import {AiOutlineTwitter} from 'react-icons/ai'
import {BiLogoInstagram} from 'react-icons/bi'

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
                <div className='flex flex-col gap-5 w-full md:w-40'>
                    <h1 className='font-semibold text-black'>Pages</h1>
                    <a href="#"><h1 className='hover:text-kuning'>Home</h1></a>
                    <a href="#"><h1 className='hover:text-kuning'>Case studies</h1></a>
                    <a href="#"><h1 className='hover:text-kuning'>Pricing</h1></a>
                </div>

                <div className='flex flex-col gap-5 w-full md:w-40'>
                    <h1 className='font-semibold text-black'>Resources</h1>
                    <a href="#"><h1 className='hover:text-kuning'>About me</h1></a>
                    <a href="#"><h1 className='hover:text-kuning'>Contact</h1></a>
                </div>

                <div className='flex flex-col gap-3 md:text-center'>
                    <h1 className="text-lg font-semibold text-black">Social Media </h1>
                    <div className="text-black flex gap-5">
                        <a href="https://web.facebook.com/frankie.frankie.73997" target='_blank'><BsFacebook size={20} color='#007fff' className='border border-zinc-800 rounded-full w-14 h-14 px-3 py-3 hover:bg-zinc-300 duration-300 transition-all ease-in-out'/></a>
                        <a href="https://instagram.com/frankie_rockabilly?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D" target='_blank'><BiLogoInstagram size={14} color='#9f8170' className='border border-zinc-800 rounded-full w-14 h-14 px-3 py-3 hover:bg-zinc-300 duration-300 transition-all ease-in-out'/></a>
                        <a href="#"><BsLinkedin size={14} color='#007fff' className='border border-zinc-800 rounded-full w-14 h-14 px-3 py-3 hover:bg-zinc-300 duration-300 transition-all ease-in-out'/></a>
                        <a href="#"><AiOutlineTwitter size={14} color='#007fff' className='border border-zinc-800 rounded-full w-14 h-14 px-3 py-3 hover:bg-zinc-300 duration-300 transition-all ease-in-out'/></a>
                    </div>
                </div>

            </div>
        </div>
    </>
  )
}

export default Contact