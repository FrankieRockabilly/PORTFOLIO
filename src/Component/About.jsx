import React, { useEffect } from 'react'
import Line from './Line'
import profile from '../Assets/Image/numeri.jpg'
import { WhatsappLogo } from '@phosphor-icons/react'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/src/ScrollTrigger';

const About = () => {
    gsap.registerPlugin(ScrollTrigger)
    useEffect(() => {
        gsap.fromTo(".aboutbox", {
            opacity: 0,
            x: 40,
        }, {
            scrollTrigger: {
                trigger: '.aboutbox',
                start: 'top 80%',
                once: true
            },
            opacity: 1,
            x: 0,
            duration: 2,
            ease: 'power2.inOut'
        })
    }, [])
    return (
        <>
            <div className='lg:px-36 pt-20 px-5 aboutbox'>
                <div className='flex flex-col justify-center items-center gap-6 pt-12'>
                    <h1 className='text-center text-5xl font-bold '>About</h1>
                    <Line />
                </div>
                <div className='flex flex-wrap justify-center items-start gap-14 py-20'>
                    <div className='w-[35rem] h-[30rem]  '>
                        <img src={profile} alt="" className='rounded-xl w-full h-full object-cover' />
                    </div>
                    <div className='flex flex-col justify-start items-start gap-6  max-w-[50rem]'>
                        <h1 className='font-medium text-xl text-oren tracking-widest'>About Me</h1>
                        <p className='text-lg indent-16'>I am a freelancer and an active worker with a bachelor's degree in Informatics Engineering at Pasir Pengaraian University. I am also a graduate of one of the Bootcamps in Indonesia, namely  <span className='text-oren'><a href="https://www.harisenin.com/" target='blank'>Harisenin.com </a></span>Bootcamp. I have created many frontend and fullstack projects with the currently popular tech stack and I work in a hospital as an IT staff</p>
                        <div className=''>
                            <a href="https://wa.me/6281275691395" target='blank' className=''>
                                <button className='flex justify-center items-center gap-4 bg-primary px-5 py-3 text-center text-white rounded-lg hover:bg-primarySec'>
                                    <p>Contact Me</p>
                                    <WhatsappLogo size={30} weight="thin" />
                                </button>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About