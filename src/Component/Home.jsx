import { useEffect, useRef, useState } from "react";
import Line from "./Line";
import Header from "./Header";
import Projects from "./Projects";
import About from "./About";
import Testimonial from "./Testimonial";
import Footer from "./Footer";
import Contact from "./Contact";
import TypingText from "./ChildComponent/TypingText";
// import TechStack from "./TechStack";
import gsap from "gsap";
import TechStack from "./TechStack";

const Home = () => {
   const aboutRef = useRef(null);
   const homeRef = useRef(null);
   const portfolioRef = useRef(null);
   const contactRef = useRef(null);


   // ✅ Scroll Functions (tetap)
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

   // ✅ GSAP (tetap)
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
            stagger:0.5
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
            duration: 1,
            delay: 0,
            ease: "power2.inOut",
            stagger: 0.2,
         }
      );
      gsap.fromTo(
         ".framesection",
         {
            opacity: 0,
            x: 40,
         },
         {
            opacity: 1,
            x: 0,
            duration: 2,
            ease: "sine.out",
            stagger:{
               each: 0.5,
               from : "end"
            }
         }
      );
   }, []);

   return (
      <>
         <div className="font-poppins pt-16 lg:pt-0 bg-white " ref={homeRef}>
            <div className="flex flex-col flex-grow text-black relative overflow-hidden">
               <Header
                  scrollToAbout={scrollToAbout}
                  scrollToContact={scrollToContact}
                  scrollToHome={scrollToHome}
                  scrollToPortfolio={scrollToPortfolio}
               />
               <section className="lg:px-20 lg:py-20 bg-white relative">
                  {/* gambar awan */}
                  {/* <div className="absolute -top-20 -right-36 z-10 w-[30%] opacity-45 framesection">
                     <img src='https://res.cloudinary.com/dplikeeby/image/upload/v1751530936/cloud-min_xnkllz.png' alt="" className="w-full "/>
                  </div> */}
                  <div className="relative flex flex-grow px-12 pb-9 lg:px-36 bg-no-repeat overflow-hidden backdrop-blur-3xl bg-opacity-55 lg: bg-contain bg-center">
                     <div className="absolute top-[10%] left-[10%] transform translate-y-1/2 hidden xl:block">
                        {/* ✅ Typing effect display */}
                        <div className="absolute top-[40%] left-[10%] transform translate-y-1/2 hidden xl:block ">
                           <TypingText />
                        </div>
                     </div>

                     <div className="relative lg:pt-32 flex flex-col lg:flex-row justify-start items-start gap-5 w-full ">
                        <div className="xl:block absolute right-0 bottom-32  xl:top-44 xl:right-28 justify-center items-center overflow-hidden framesection">
                           <img
                              src='https://res.cloudinary.com/dplikeeby/image/upload/v1751529607/imageprofile_b2hvyf.png'
                              alt=""
                              className="w-[10rem] h-[15rem] xl:h-auto xl:w-[25rem] opacity-20 xl:opacity-100"
                           />
                        </div>
                        <div className="flex flex-col justify-start items-start gap-8 h-full max-w-[50rem] p-5 py-36">
                           <h1 className="text-sm text-gray-500 lg:text-2xl tracking-widest border border-oren px-3 lg:px-10 py-2 rounded-full hello">
                              Hallo Everyone ..
                           </h1>
                           <p className="text-2xl lg:text-7xl font-bold tracking-widest hello">
                              I'm <span className="text-oren">Frengki</span>{" "}
                              Iskandar
                           </p>
                           <div>
                              <Line />
                           </div>
                           <p className="text-sm text-gray-500 lg:text-xl lg:w-[45rem] indent-20 paragraph">
                              I am a passionate Full-Stack Developer and
                              Freelance Web Creator, dedicated to crafting
                              modern, responsive, and high-performance websites.
                              With expertise in both front-end and back-end
                              development, I turn ideas into seamless digital
                              experiences
                           </p>
                           <button
                              className="bg-oren hover:bg-orange-700 transition-all duration-200 ease-out px-5 py-3 rounded-full text-white uppercase paragraph"
                              onClick={() => scrollToContact()}
                           >
                              Contact Me
                           </button>
                        </div>
                     </div>
                  </div>
               </section>

               {/* Bagian lain tetap */}
               <div ref={aboutRef}>
                  <About />
               </div>

               <div>
                  {/* svg */}
                  {/* ... (tidak diubah) */}
                  <TechStack />
                  {/* ... */}
               </div>

               <div ref={portfolioRef}>
                  <Projects />
               </div>

               <div>
                  <Testimonial />
               </div>

               <div ref={contactRef}>
                  <Contact />
               </div>

{/* kalo footer disini malah kena efek typing njirr */}
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

export default Home;
