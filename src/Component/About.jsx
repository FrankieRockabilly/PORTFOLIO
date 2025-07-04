import { useEffect } from 'react'
import Line from './Line'
import { WhatsappLogo } from '@phosphor-icons/react'
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedinIn  } from "react-icons/fa";
import pattern from "../Assets/Image/watercolor.png"
import gsap from 'gsap'
import ScrollTrigger from 'gsap/src/ScrollTrigger';

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
            duration: 1,
            ease: "sine.out",
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
            duration: 1,
            ease: "sine.out",
         }
      );
   }, []);
   return (
      <>
         <div className="lg:px-36 pt-20 px-5 ">
            <div className="flex flex-col justify-center items-center gap-6 pt-12 relative">
               <h1 className="text-center text-5xl font-bold ">About</h1>
               <Line />
               <img src={pattern} alt="" className='w-[60rem] absolute top-1/2 right-1/2 transform translate-x-1/2 opacity-15 blur-sm'/>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-14 py-5 ">
               <div className="w-[15rem] h-[25rem] lg:w-[22rem] lg:h-[42rem] aboutbox hidden xl:block">
                  <img
                     src='https://res.cloudinary.com/dplikeeby/image/upload/v1751529568/ger_l2mpyr.png'
                     className="rounded-xl w-full h-full object-fit"
                  />
               </div>
               <div className="flex flex-col justify-start items-start gap-8  max-w-[55rem] aboutbox2 ">
                  <h1 className="font-semibold text-center lg:text-start text-4xl xl:text-6xl text-oren -tracking-tight w-full">
                     Meet the <span className='text-primary'>Developer</span>
                  </h1>
                  <p className="text-lg indent-16 text-gray-500 text-justify">
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
                     <div className="flex justify-start items-center gap-7 w-full lg:gap-10 paragraph text-gray-500 ">
                        <a
                           href="https://www.facebook.com/frankie.frankie.73997"
                           target="blank"
                           className='hover:text-black'
                        >
                           <FaFacebookF size={25} />
                        </a>
                        <a
                           href="https://www.instagram.com/popiceduriaan?igsh=a3ZjaXR6OWc0bGoy"
                           target="blank"
                           className='hover:text-black'
                        >
                           <FaInstagram size={25} />
                        </a>
                        <a
                           href="https://github.com/FrankieRockabilly"
                           target="blank"
                           className='hover:text-black'
                        >
                           <FaGithub size={25} />
                        </a>
                        <a
                           href="https://www.linkedin.com/in/frengki-iskandar-00586b235/"
                           target="blank"
                           className='hover:text-black'
                        >
                           <FaLinkedinIn size={25} />
                        </a>
                     </div>
                  <div className="w-full flex justify-between items-start gap-5 ">
                      {/* tech stack */}
                     <div className='flex flex-wrap justify-start items-center gap-2'>
                        <div className='w-24 h-24 bg-green-400 shadow-xl shadow-green-200 rounded-xl flex justify-center items-center gap-2 text-white'>
                           HTML
                        </div>
                        <div className='w-24 h-24 bg-blue-400 shadow-xl shadow-blue-200 rounded-xl flex justify-center items-center gap-2 text-white'>
                           CSS
                        </div>
                        <div className='w-24 h-24 bg-yellow-400 shadow-xl shadow-yellow-200 rounded-xl flex justify-center items-center gap-2 text-white'>
                           Javascript
                        </div>
                        <div className='w-24 h-24 bg-fuchsia-400 shadow-xl shadow-fuchsia-200 rounded-xl flex justify-center items-center gap-2 text-white'>
                           React
                        </div>
                        <div className='w-24 h-24 bg-red-400 shadow-xl shadow-red-200 rounded-xl flex justify-center items-center gap-2 text-white'>
                           Express Js
                        </div>
                        <div className='w-24 h-24 bg-purple-400 shadow-xl shadow-purple-200 rounded-xl flex justify-center items-center gap-2 text-white'>
                           MySQL
                        </div>
                     </div>
                     <div className="">
                        <a href="/RESUME.pdf" download="RESUME.pdf">
                           <button className="bg-gradient-to-r from-red-600 to-oren text-white px-5 py-3 rounded ">
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