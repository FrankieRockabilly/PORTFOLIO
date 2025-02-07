import React, { useRef } from 'react'
import Line from './Line';
import Header from './Header';
import SideContent from './SideContent';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaGithub, FaLinkedinIn } from "react-icons/fa";

import profile from '../Assets/Image/profile.png'
import tailwind from '../Assets/Image/tailwind.png'
import express from '../Assets/Image/expresss.png'
import Projects from './Projects';
import About from './About';
import Testimonial from './Testimonial';
import Footer from './Footer';
import Contact from './Contact';


const Home = () => {

    const aboutRef = useRef(null)
    const homeRef = useRef(null)
    const portfolioRef = useRef(null)
    const contactRef = useRef(null)

    const scrollToAbout = () => {
        aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    const scrollToHome = () => {
        homeRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    const scrollToPortfolio = () => {
        portfolioRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    const scrollToContact = () => {
        contactRef.current?.scrollIntoView({ behavior: 'smooth' });
    };


    return (
        <>
            <div className='font-poppins mt-10 pt-20 bg-white ' ref={homeRef}>
                <div className='flex flex-col flex-grow   text-black  relative overflow-hidden '>
                    {/* animasi kotak oren dan hitam */}
                    {/* header start */}
                    <Header scrollToAbout={scrollToAbout}
                        scrollToContact={scrollToContact}
                        scrollToHome={scrollToHome}
                        scrollToPortfolio={scrollToPortfolio}
                    >
                        <SideContent />
                    </Header>
                    {/* end of header */}


                    {/* section start */}
                    <section className='flex flex-grow  px-12  lg:px-36 ' >
                        <div>

                        </div>
                        <div className='lg:pt-24 flex flex-col lg:flex-row-reverse justify-center items-start gap-5'>
                            <div className=' lg:w-[50rem] lg:h-[50rem] flex justify-end items-end'>
                                <img src={profile} alt="" className='w-full h-full  object-cover' />
                            </div>

                            <div className='flex flex-col justify-start items-start gap-10 h-full'>
                                <h1 className='text-lg text-gray-500 lg:text-2xl tracking-widest border border-oren px-10 py2 rounded-full'>Hallo Everyone</h1>
                                <p className='text-2xl lg:text-9xl font-bold tracking-widest'>I'm <span className='text-oren'>Frengki</span> Iskandar</p>
                                <div>
                                    <Line />
                                </div>
                                <p className='text-lg text-gray-500 lg:text-xl lg:w-[45rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque deserunt amet provident eum dolores enim voluptatum similique magnam ipsum facere.</p>
                                <button className='bg-oren px-5 py-3 rounded-full text-white uppercase'>Learn More</button>
                                <div className='flex justify-around lg:justify-start items-center w-full lg:gap-10'>
                                    <a href="https://www.facebook.com/frankie.frankie.73997" target='blank'><FaFacebookF size={20} /></a>
                                    <a href="https://www.instagram.com/popiceduriaan?igsh=a3ZjaXR6OWc0bGoy" target='blank'><FaInstagram size={20} /></a>
                                    <a href="https://wa.me/6281275691395" target='blank'><FaWhatsapp size={20} /></a>
                                    <a href="https://github.com/FrankieRockabilly" target='blank'><FaGithub size={20} /></a>
                                    <a href="https://www.linkedin.com/in/frengki-iskandar-00586b235/" target='blank'><FaLinkedinIn size={20} /></a>

                                </div>
                            </div>



                        </div>

                    </section>
                    {/* end of section */}


                    {/* section of projects */}
                    <div ref={aboutRef}>
                        <About />
                    </div>
                    {/* end of section */}

                    {/* section of education */}
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                            <path fill="#0bc6a2" fill-opacity="1" d="M0,192L48,165.3C96,139,192,85,288,96C384,107,480,181,576,208C672,235,768,213,864,202.7C960,192,1056,192,1152,208C1248,224,1344,256,1392,272L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                        </svg>

                        <div className='bg-primary pb-20 lg:px-56'>
                            <div className='flex flex-col justify-center items-center gap-6 pb-12'>
                                <h1 className='text-center text-2xl lg:text-3xl font-bold'>Tech Stack</h1>
                                <Line />
                            </div>

                            <div className='mt-20 flex justify-center items-center gap-7 flex-wrap'>
                                {/* items */}
                                <div className='group pb-10'>
                                    <div className=' w-64 h-52 bg-white border flex flex-col justify-center items-center rounded-md relative group-hover:shadow-2xl transition-all duration-300 ease-in-out'>
                                        <h1 className='font-semibold text-2xl'>HTML</h1>
                                        <div className='py-4 text-center'>
                                            <p className='text-gray-500'>SDN 016 Rambah Samo</p>
                                            <p className='text-gray-500'>2002 - 2011</p>
                                        </div>
                                        <div className='w-24 h-24 px-1 py-1 overflow-hidden rounded-full bg-gray-100 flex justify-center items-center absolute -top-16 group-hover:bg-oren transition-all duration-300 ease-in-out'>
                                            <img src="https://img.freepik.com/premium-psd/html-file-document-file-type-icon-files-format-document-concept-3d-render-illustration_570783-1510.jpg?w=826" alt="" className='bg-cover rounded-full' />
                                        </div>
                                    </div>
                                </div>
                                <div className='group pb-10'>
                                    <div className=' w-64 h-52 bg-white border flex flex-col justify-center items-center rounded-md relative group-hover:shadow-2xl transition-all duration-300 ease-in-out'>
                                        <h1 className='font-semibold text-2xl'>CSS</h1>
                                        <div className='py-4 text-center'>
                                            <p className='text-gray-500'>SMP Salafiyah Babussalam</p>
                                            <p className='text-gray-500'>2012 - 2014</p>
                                        </div>
                                        <div className='w-24 h-24 px-1 py-1 overflow-hidden rounded-full bg-gray-100 flex justify-center items-center absolute -top-16 group-hover:bg-oren transition-all duration-300 ease-in-out'>
                                            <img src="https://img.freepik.com/premium-psd/css-file-document-file-type-icon-files-format-document-concept-3d-render-illustration_570783-1505.jpg?w=826" alt="" className='bg-cover rounded-full' />
                                        </div>
                                    </div>
                                </div>
                                <div className='group pb-10'>
                                    <div className=' w-64 h-52 bg-white border flex flex-col justify-center items-center rounded-md relative group-hover:shadow-2xl transition-all duration-300 ease-in-out'>
                                        <h1 className='font-semibold text-2xl'>Javascript</h1>
                                        <div className='py-4 text-center'>
                                            <p className='text-gray-500'>SMA Salafiyah Babussalam</p>
                                            <p className='text-gray-500'>2015-2017</p>
                                        </div>
                                        <div className='w-24 h-24 px-1 py-1 overflow-hidden rounded-full bg-gray-100 flex justify-center items-center absolute -top-16 group-hover:bg-oren transition-all duration-300 ease-in-out'>
                                            <img src="https://img.freepik.com/premium-psd/3d-file-format-js-type-icon-illustration_148391-1381.jpg?w=826" alt="" className='bg-cover rounded-full' />
                                        </div>
                                    </div>
                                </div>

                                <div className='group pb-10'>
                                    <div className=' w-64 h-52 bg-white border flex flex-col justify-center items-center rounded-md relative group-hover:shadow-2xl transition-all duration-300 ease-in-out'>
                                        <h1 className='font-semibold text-2xl'>Tailwind CSS</h1>
                                        <div className='py-4 text-center'>
                                            <p className='text-gray-500'>SMA Salafiyah Babussalam</p>
                                            <p className='text-gray-500'>2015-2017</p>
                                        </div>
                                        <div className='w-24 h-24 px-1 py-1 overflow-hidden rounded-full bg-gray-100 flex justify-center items-center absolute -top-16 group-hover:bg-oren transition-all duration-300 ease-in-out'>
                                            <img src={tailwind} alt="" className='bg-cover rounded-full' />
                                        </div>
                                    </div>
                                </div>

                                <div className='group pb-10'>
                                    <div className=' w-64 h-52 bg-white border flex flex-col justify-center items-center rounded-md relative group-hover:shadow-2xl transition-all duration-300 ease-in-out'>
                                        <h1 className='font-semibold text-2xl'>React Js</h1>
                                        <div className='py-4 text-center'>
                                            <p className='text-gray-500'>SMA Salafiyah Babussalam</p>
                                            <p className='text-gray-500'>2015-2017</p>
                                        </div>
                                        <div className='w-24 h-24 px-1 py-1 overflow-hidden rounded-full bg-gray-100 flex justify-center items-center absolute -top-16 group-hover:bg-oren transition-all duration-300 ease-in-out'>
                                            <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="" className='bg-cover bg-white rounded-full' />
                                        </div>
                                    </div>
                                </div>

                                <div className='group pb-10'>
                                    <div className=' w-64 h-52 bg-white border flex flex-col justify-center items-center rounded-md relative group-hover:shadow-2xl transition-all duration-300 ease-in-out'>
                                        <h1 className='font-semibold text-2xl'>Node Js</h1>
                                        <div className='py-4 text-center'>
                                            <p className='text-gray-500'>SMA Salafiyah Babussalam</p>
                                            <p className='text-gray-500'>2015-2017</p>
                                        </div>
                                        <div className='w-24 h-24 px-1 py-1 overflow-hidden rounded-full bg-gray-100 flex justify-center items-center absolute -top-16 group-hover:bg-oren transition-all duration-300 ease-in-out'>
                                            <img src="https://cdn3d.iconscout.com/3d/free/preview/free-nodejs-3d-icon-download-in-png-blend-fbx-gltf-file-formats--node-js-open-source-code-logos-and-brands-pack-icons-9325317@0.png?f=webp&h=700" alt="" className='bg-cover bg-white rounded-full' />
                                        </div>
                                    </div>
                                </div>

                                <div className='group pb-10'>
                                    <div className=' w-64 h-52 bg-white border flex flex-col justify-center items-center rounded-md relative group-hover:shadow-2xl transition-all duration-300 ease-in-out'>
                                        <h1 className='font-semibold text-2xl'>Expess Js</h1>
                                        <div className='py-4 text-center'>
                                            <p className='text-gray-500'>SMA Salafiyah Babussalam</p>
                                            <p className='text-gray-500'>2015-2017</p>
                                        </div>
                                        <div className='w-24 h-24 px-1 py-1 overflow-hidden rounded-full bg-gray-100 flex justify-center items-center absolute -top-16 group-hover:bg-oren transition-all duration-300 ease-in-out'>
                                            <img src={express} alt="" className='bg-cover bg-white rounded-full' />
                                        </div>
                                    </div>
                                </div>

                                <div className='group pb-10'>
                                    <div className=' w-64 h-52 bg-white border flex flex-col justify-center items-center rounded-md relative group-hover:shadow-2xl transition-all duration-300 ease-in-out'>
                                        <h1 className='font-semibold text-2xl'>MySql</h1>
                                        <div className='py-4 text-center'>
                                            <p className='text-gray-500'>SMA Salafiyah Babussalam</p>
                                            <p className='text-gray-500'>2015-2017</p>
                                        </div>
                                        <div className='w-24 h-24 px-1 py-1 overflow-hidden rounded-full bg-gray-100 flex justify-center items-center absolute -top-16 group-hover:bg-oren transition-all duration-300 ease-in-out'>
                                            <img src="https://img.freepik.com/premium-psd/mysql-document-file-format-3d-illustration_903752-1945.jpg?w=826" alt="" className='bg-cover rounded-full' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0bc6a2" fill-opacity="1" d="M0,192L48,170.7C96,149,192,107,288,80C384,53,480,43,576,42.7C672,43,768,53,864,96C960,139,1056,213,1152,208C1248,203,1344,117,1392,74.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
                        </div>
                    </div>
                    {/* end of section */}

                    <div ref={portfolioRef}>
                        <Projects />
                    </div>

                    <div>
                        <Testimonial />
                    </div>


                    <div ref={contactRef}>
                        <Contact />
                    </div>

                    <div>
                        <Footer />
                    </div>
                </div>
            </div >
        </>
    )
}

export default Home