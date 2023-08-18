import React from 'react'
import {  AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';
const Footer = () => {
  return (
    <>
    <div>
        <div className='bg-white py-3 flex flex-col gap-10 md:flex-row items-center justify-between px-20'>
            <div className='text-center flex flex-col gap-2 md:flex-row '>
                <h1 className='text-black'>Designed by Frengky Iskandar</h1>
                <a href="#"><h1>Privacy</h1></a>
                <a href="#"><h1>Term & Conditions</h1></a>
            </div>
            <div className='flex justify-center gap-5'>
                <AiFillInstagram color='#000000'/>
                <AiOutlineTwitter color='#000000'/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer