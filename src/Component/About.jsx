import React, { useEffect } from 'react'
import Line from './Line'
import { WhatsappLogo } from '@phosphor-icons/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/src/ScrollTrigger';
import website from "../Assets/Image/ger.png";

const About = () => {
   gsap.registerPlugin(ScrollTrigger);
   useEffect(() => {
      gsap.fromTo(
         ".aboutbox",
         {
            opacity: 0,
            x: -40,
         },
         {
            scrollTrigger: {
               trigger: ".aboutbox",
               start: "top 90%",
               once: true,
            },
            opacity: 1,
            x: 0,
            duration: 2,
            ease: "power2.inOut",
         }
      );
      gsap.fromTo(
         ".aboutbox2",
         {
            opacity: 0,
            x: 40,
         },
         {
            scrollTrigger: {
               trigger: ".aboutbox",
               start: "top 80%",
               once: true,
            },
            opacity: 1,
            x: 0,
            duration: 2,
            ease: "power2.inOut",
         }
      );
   }, []);
   return (
      <>
         <div className="lg:px-36 pt-20 px-5 ">
            <div className="flex flex-col justify-center items-center gap-6 pt-12">
               <h1 className="text-center text-5xl font-bold ">About</h1>
               <Line />
            </div>
            <div className="flex flex-wrap justify-center items-center gap-14 py-5 ">
               <div className="w-[15rem] h-[25rem] lg:w-[20rem] lg:h-[38rem] aboutbox ">
                  <img
                     src={website}
                     className="rounded-xl w-full h-full object-fit"
                  />
               </div>
               <div className="flex flex-col justify-start items-start gap-6  max-w-[55rem] aboutbox2 ">
                  <h1 className="font-semibold text-7xl text-oren -tracking-tight">
                     Meet the <span className='text-primary'>Developer</span>
                  </h1>
                  <p className="text-lg indent-16 text-gray-500">
                     I am a freelancer and an active worker with a bachelor's
                     degree in Informatics Engineering at Pasir Pengaraian University. I graduated in 2022 and took part in a bootcamp program majoring in fullstack developer{" "}
                     <span className="text-oren">
                        <a href="https://www.harisenin.com/" target="blank">
                           Harisenin.com{" "}
                        </a>
                     </span>
                     Bootcamp. I have created many frontend and fullstack
                     projects with the currently popular tech stack and I work
                     in a hospital as an IT staff
                  </p>
                  <div className="flex justify-start items-center gap-5 pt-20">
                     <a
                        href="https://wa.me/6281275691395"
                        target="blank"
                        className=""
                     >
                        <button className="flex justify-center items-center gap-4 bg-primary px-5 py-3 text-center text-white rounded-lg hover:bg-primarySec">
                           <p>Contact Me</p>
                           <WhatsappLogo size={20} weight="thin" />
                        </button>
                     </a>
                     <div className="my-4">
                        <a href="/RESUME.pdf" download="RESUME.pdf">
                           <button className="bg-gradient-to-r from-red-600 to-oren text-white px-5 py-3 rounded">
                              Download My CV
                           </button>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default About