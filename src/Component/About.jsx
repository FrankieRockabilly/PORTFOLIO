import { useEffect } from 'react'
import Line from './Line'
import { SiMysql, SiHtml5, SiTailwindcss ,SiExpress } from "react-icons/si";
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedinIn, FaCss3, FaReact, FaNodeJs  } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import pattern from "../Assets/Image/watercolor.png"
import gsap from 'gsap'
import ScrollTrigger from 'gsap/src/ScrollTrigger';

const About = () => {
   gsap.registerPlugin(ScrollTrigger);
   useEffect(() => {
      gsap.fromTo(
         ".head",
         {
            opacity: 0,
            y: -60,
         },
         {
            scrollTrigger: {
               trigger: ".aboutbox",
               start: "top 90%",
               once: true,
            },
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "sine.out",
            once : false
         }
      );
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
            stagger:0.2
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
         <div className="lg:px-36 pt-20 px-12 ">
            <div className="flex flex-col justify-center items-center gap-6 pt-12 relative">
               <h1 className="text-center text-2xl lg:text-3xl font-bold">
                  About
               </h1>
               <Line />
               <img src={pattern} alt="" className='w-[60rem] absolute top-1/2 right-1/2 transform translate-x-1/2 opacity-15 blur-sm' />
            </div>
            <div className="flex flex-wrap justify-center items-center gap-14 py-5 ">
               <div className="w-[15rem] h-[25rem] lg:w-[22rem] lg:h-[42rem] aboutbox hidden xl:block">
                  <img
                     src='https://res.cloudinary.com/dplikeeby/image/upload/v1751529568/ger_l2mpyr.png'
                     className="rounded-xl w-full h-full object-fit" alt="frengky"
                  />
               </div>
               <div className="flex flex-col justify-start items-start gap-8  max-w-[55rem]  ">
                  <h1 className="font-semibold text-center lg:text-start text-2xl xl:text-6xl text-oren -tracking-tight w-full head">
                     Meet the <span className='text-primary'>Developer</span>
                  </h1>
                  <p className="text-sm lg:text-lg indent-16 text-gray-500 text-justify aboutbox2">
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
                     {/* tech stack */}
                     <div className='flex flex-wrap justify-start items-center gap-2 max-w-[35rem]'>
                        <div className='w-20 h-20 lg:w-24 lg:h-24 bg-orange-600 shadow-xl shadow-orange-400 hover:bg-orange-700 rounded-xl flex justify-center items-center gap-2 text-white aboutbox'>
                           <SiHtml5 size={30}/>
                        </div>
                        <div className='w-20 h-20 lg:w-24 lg:h-24 bg-blue-600 shadow-xl shadow-blue-400 hover:bg-blue-700 rounded-xl flex justify-center items-center gap-2 text-white aboutbox'>
                           <FaCss3 size={30}/>
                        </div>
                        <div className='w-20 h-20 lg:w-24 lg:h-24 bg-yellow-600 shadow-xl shadow-yellow-400 hover:bg-yellow-700 rounded-xl flex justify-center items-center gap-2 text-white aboutbox'>
                           <RiJavascriptFill size={30}/>
                        </div>
                        <div className='w-20 h-20 lg:w-24 lg:h-24 bg-cyan-600 shadow-xl shadow-cyan-400 hover:bg-cyan-700 rounded-xl flex justify-center items-center gap-2 text-white aboutbox'>
                           <FaReact size={30}/>
                        </div>
                        <div className='w-20 h-20 lg:w-24 lg:h-24 bg-green-600 shadow-xl shadow-green-400 hover:bg-green-700 rounded-xl flex justify-center items-center gap-2 text-white aboutbox'>
                           <FaNodeJs size={30}/>
                        </div>
                        <div className='w-20 h-20 lg:w-24 lg:h-24 bg-blue-400 shadow-xl shadow-purple-200 hover:bg-blue-500 rounded-xl flex justify-center items-center gap-2 text-white aboutbox'>
                           <SiTailwindcss size={30}/>
                        </div>
                        <div className='w-20 h-20 lg:w-24 lg:h-24 bg-purple-400 shadow-xl shadow-purple-200 hover:bg-purpe-500 rounded-xl flex justify-center items-center gap-2 text-white aboutbox'>
                           <SiMysql size={50}/>
                        </div>
                        <div className='w-20 h-20 lg:w-24 lg:h-24 bg-gray-600 shadow-xl shadow-gray-400 hover:bg-gray-700 rounded-xl flex justify-center items-center gap-2 text-white aboutbox'>
                           <SiExpress size={30}/>
                        </div>
                     </div>
                     <div className="z-10 text-sm lg:text-lg">
                        <a href="/RESUME.pdf" download="RESUME.pdf">
                           <button className="bg-primary text-white px-5 py-3 rounded-lg ">
                              Download My CV
                           </button>
                        </a>
                     </div>

               </div>
            </div>
         </div>
      </>
   );
};

export default About