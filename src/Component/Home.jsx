import React, { useEffect, useRef } from 'react'
import Line from './Line';
import Header from './Header';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaGithub, FaLinkedinIn } from "react-icons/fa";
import mobile from "../Assets/Image/mobile.png";
import Projects from "./Projects";
import About from "./About";
import Testimonial from "./Testimonial";
import Footer from "./Footer";
import Contact from "./Contact";
import TechStack from "./TechStack";
import gsap from "gsap";

const Home = () => {
   const aboutRef = useRef(null);
   const homeRef = useRef(null);
   const portfolioRef = useRef(null);
   const contactRef = useRef(null);

   const scrollToAbout = () => {
      aboutRef.current?.scrollIntoView({ behavior: "smooth" });
   };
   const scrollToHome = () => {
      homeRef.current?.scrollIntoView({ behavior: "smooth" });
   };
   const scrollToPortfolio = () => {
      portfolioRef.current?.scrollIntoView({ behavior: "smooth" });
   };
   const scrollToContact = () => {
      contactRef.current?.scrollIntoView({ behavior: "smooth" });
   };

   useEffect(() => {
      gsap.fromTo(
         ".hello",
         {
            opacity: 0,
            x: -60,
         },
         {
            opacity: 1,
            x: 0,
            duration: 2,
            ease: "power2.inOut",
         }
      );
      gsap.fromTo(
         ".home",
         {
            opacity: 0,
            y: 40,
         },
         {
            opacity: 1,
            y: 0,
            duration: 2,
            ease: "power2.inOut",
         }
      );
      gsap.fromTo(
         ".paragraph",
         {
            opacity: 0,
            y: 30,
         },
         {
            opacity: 1,
            y: 0,
            duration: 2,
            delay: 1,
            ease: "power2.inOut",
         }
      );
      gsap.fromTo(
         ".button",
         {
            opacity: 0,
            y: 30,
         },
         {
            opacity: 1,
            y: 0,
            duration: 2,
            delay: 2,
            ease: "power2.inOut",
         }
      );
      gsap.fromTo(
         ".social",
         {
            opacity: 0,
            y: 30,
         },
         {
            opacity: 1,
            y: 0,
            duration: 2,
            delay: 3,
            ease: "power2.inOut",
         }
      );
      gsap.fromTo(
         ".image",
         {
            opacity: 0,
            x: 40,
         },
         {
            opacity: 1,
            x: 0,
            duration: 2,
            ease: "power2.inOut",
         }
      );
   }, []);

   return (
      <>
         <div className="font-poppins pt-16 lg:pt-0 bg-warm " ref={homeRef}>
            <div className="flex flex-col flex-grow   text-black  relative overflow-hidden ">
               {/* animasi kotak oren dan hitam */}
               {/* header start */}
               <Header
                  scrollToAbout={scrollToAbout}
                  scrollToContact={scrollToContact}
                  scrollToHome={scrollToHome}
                  scrollToPortfolio={scrollToPortfolio}
               ></Header>
               {/* end of header */}

               {/* section start */}
               <section className="lg:px-20 lg:py-20 ">
                  <div
                     className="relative flex flex-grow px-12 pb-9 lg:px-36 bg-no-repeat overflow-hidden backdrop-blur-3xl bg-opacity-55 lg: shadow-2xl rounded-2xl bg-white bg-contain bg-center"
                     //   style={{
                     //      backgroundImage: `url(https://img.freepik.com/free-psd/3d-nft-icon-developer-male-illustration_629802-6.jpg?t=st=1740384777~exp=1740388377~hmac=caef512f8ce20293e590ed8fca4136cfd06fdb10c1997093c10bee3750b7bfe6&w=740)`,
                     //   }}
                  >
                     <div className="absolute top-[10%] left-[10%] transform translate-y-1/2 hidden xl:block">
                        <h1 className="text-[11rem] font-extrabold opacity-[0.15] tracking-widest text-gray-500">
                           FRENGKI
                        </h1>
                     </div>

                     <div className="relative lg:pt-32 flex flex-col lg:flex-row-reverse justify-around items-center gap-5  w-full ">
                        <div className="h-full w-[30rem]  hidden lg:block justify-center items-center overflow-hidden image ">
                           <img
                              src={mobile}
                              alt=""
                              className="object-cover w-full h-full"
                           />
                        </div>
                        <div className="flex flex-col justify-start items-start gap-8 h-full max-w-[50rem]  p-5 ">
                           <h1 className="text-sm text-gray-500 lg:text-2xl tracking-widest border border-oren px-3  lg:px-10 py-2 rounded-full hello">
                              Hallo Everyone ..
                           </h1>
                           <p className="text-2xl lg:text-7xl font-bold tracking-widest">
                              I'm <span className="text-oren">Frengki</span>{" "}
                              Iskandar
                           </p>
                           <div>
                              <Line />
                           </div>
                           <p className="text-base text-gray-500 lg:text-xl lg:w-[45rem] indent-20 paragraph">
                              I am a passionate Full-Stack Developer and
                              Freelance Web Creator, dedicated to crafting
                              modern, responsive, and high-performance websites.
                              With expertise in both front-end and back-end
                              development, I turn ideas into seamless digital
                              experiences
                           </p>
                           <button
                              className="bg-oren hover:bg-orange-700 transition-all duration-200 ease-out px-5 py-3 rounded-full text-white uppercase button"
                              onClick={() => scrollToContact()}
                           >
                              Contact Me
                           </button>
                           <p>Find me on social media </p>
                           <div className="flex justify-around lg:justify-start items-center w-full lg:gap-10 social">
                              <a
                                 href="https://www.facebook.com/frankie.frankie.73997"
                                 target="blank"
                              >
                                 <FaFacebookF size={25} />
                              </a>
                              <a
                                 href="https://www.instagram.com/popiceduriaan?igsh=a3ZjaXR6OWc0bGoy"
                                 target="blank"
                              >
                                 <FaInstagram size={25} />
                              </a>
                              <a
                                 href="https://wa.me/6281275691395"
                                 target="blank"
                              >
                                 <FaWhatsapp size={25} />
                              </a>
                              <a
                                 href="https://github.com/FrankieRockabilly"
                                 target="blank"
                              >
                                 <FaGithub size={25} />
                              </a>
                              <a
                                 href="https://www.linkedin.com/in/frengki-iskandar-00586b235/"
                                 target="blank"
                              >
                                 <FaLinkedinIn size={25} />
                              </a>
                           </div>
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

               {/* section of tech stack */}
               <div>
                  {/* svg */}
                  <svg
                     data-name="Layer 1"
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 1200 120"
                     preserveAspectRatio="none"
                     style={{ transform: "scaleY(-1)" }}
                  >
                     <path
                        d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                        fill="#0bc6a2"
                        fillOpacity="0.25"
                     ></path>

                     <path
                        d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                        fill="#0bc6a2"
                        fillOpacity="0.5"
                     ></path>

                     <path
                        d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                        fill="#0bc6a2"
                     ></path>
                  </svg>

                  <div className="bg-primary pb-20 lg:px-56">
                     <div className="flex flex-col justify-center items-center gap-6 pb-12">
                        <h1 className="text-center text-2xl lg:text-3xl font-bold text-white">
                           Tech Stack
                        </h1>
                        <Line />
                     </div>

                     <div>
                        <TechStack />
                     </div>
                  </div>

                  <div>
                     <svg
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                     >
                        <path
                           d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                           opacity=".25"
                           fill="#0bc6a2"
                        ></path>
                        <path
                           d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                           opacity=".5"
                           fill="#0bc6a2"
                        ></path>
                        <path
                           d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                           fill="#0bc6a2"
                        ></path>
                     </svg>
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
                  <Footer
                     scrollToAbout={scrollToAbout}
                     scrollToContact={scrollToContact}
                     scrollToHome={scrollToHome}
                     scrollToPortfolio={scrollToPortfolio}
                  />
               </div>
            </div>
         </div>
      </>
   );
};

export default Home