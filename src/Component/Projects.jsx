import Line from "./Line";
import project from "../Assets/Json/Project.json";
import { useEffect } from "react";
import pita from "../Assets/Image/pita.png";
import localpita from "../Assets/Image/lcoalpita.png";
import employee from "../Assets/Image/employee.png";
// import task from "../Assets/Image/task.png"
import hsbc from "../Assets/Image/hsbc.jpg";
import growia from "../Assets/Image/growia.jpg";
import { ArrowRight } from "@phosphor-icons/react";

import ScrollTrigger from "gsap/src/ScrollTrigger";
import gsap from "gsap";

const Projects = () => {

   gsap.registerPlugin(ScrollTrigger);
   useEffect(() => {
      gsap.fromTo(
         ".project",
         {
            opacity: 0,
            y: 40,
         },
         {
            scrollTrigger: {
               trigger: ".project",
               start: "top 70%",
               once: true,
            },
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.inOut",
            stagger : 0.2
         }
      );
   }, []);
   return (
      <>
         <section className=" pt-20 lg:pt-1 px-5 lg:px-24 ">
            <div className="w-full flex flex-col justify-center items-center gap-2 lg:gap-6 pb-10 relative ">
               <h1 className="text-center text-2xl lg:text-3xl font-bold">
                  Projects and Certificate
               </h1>
               <Line />
               {/* <img src={task} alt="" className="absolute top-2/4 -right-40 w-[15rem] hidden lg:block z-10"/> */}
            </div>
            <div className="flex justify-center items-center gap-4 xl:gap-10 flex-wrap w-full">
               {/* item project */}
               {project.map((value, index) => {
                  return (
                     <div
                        className="w-36 h-auto lg:h-auto xl:w-auto  flex flex-col justify-center items-center gap-2 px-5 py-2 shadow-lg  rounded-lg group relative border hover:border-primary project"
                        key={index}
                     >
                        <div className="w-40 lg:w-72 h-64 overflow-hidden px-3 py-1">
                           <img
                              src={value.image}
                              alt="infidea"
                              className="w-full h-full bg-contain rounded-2xl group-hover:scale-105 transition-all duration-200 ease-out"
                           />
                        </div>
                        {/* <h1 className="w-20 text-[12px] xl:text-base xl:w-40 text-center font-light lg:font-semibold tracking-wider">
                           {value.name}{" "}
                        </h1>

                        <div className="flex justify-center items-center w-full text-gray-500">
                           <p className="text-sm lg:text-base font-light text-center text-gray-500">
                              {value.category}{" "}
                           </p>
                        </div> */}

                        {/* pita hosting */}
                        <div className="absolute -top-[4px] w-28 -right-4">
                           <img
                              src={
                                 value.status === "hosted"
                                    ? pita
                                    : value.status === "employee"
                                    ? employee
                                    : localpita
                              }
                              alt="pita"
                           />
                        </div>

                        {/* <div className="py-2">
                           <button
                              className={`px-4 lg:px-8 rounded-xl border py-2 group-hover:bg-primary text-gray-400 group-hover:text-white transition-all duration-200 ease-in ${
                                 value.status === "hosted"
                                    ? "cursor-pointer"
                                    : "cursor-not-allowed "
                              }`}
                           >
                              {value.status === "hosted" ? (
                                 <div>
                                    <a
                                       href={value.link}
                                       target="blank"
                                       className="text-[12px] lg:text-base flex justify-center items-center gap-1 lg:gap-3"
                                    >
                                       View
                                       <ArrowRight size={15} weight="thin" />
                                    </a>
                                 </div>
                              ) : (
                                 <div className="text-sm xl:text-base flex justify-center items-center gap-3">
                                    <p>-</p>
                                 </div>
                              )}
                           </button>
                        </div> */}
                     </div>
                  );
               })}
            </div>


{/* CERTIFICATE */}
            <div className="flex flex-col justify-center items-center">
               {/* <div className="text-2xl lg:text-3xl font-bold gap-2 flex flex-col justify-start items-start lg:gap-6 pt-16 pb-5"> */}
                  <div className="flex flex-col justify-center items-center lg:text-3xl font-bold gap-2 lg:gap-6 relative pt-16 pb-5 ">
                  <h1>Certificate</h1>
                  <Line />
               </div>
               <div className="flex flex-wrap justify-center items-center gap-1 lg:gap-4 ">
                  <div className="h-28 w-36 lg:h-72 lg:w-[20rem] relative flex justify-center items-center group">
                     <img
                        src={hsbc}
                        alt=""
                        className="object-contain h-full w-full transition-all duration-200 ease-out hover:scale-105 "
                     />
                  </div>

                  <div className="h-28 w-36 lg:h-72 lg:w-[20rem] relative">
                     <img
                        src={growia}
                        alt=""
                        className="object-contain h-full w-full transition-all duration-200 ease-out hover:scale-105"
                     />
                  </div>
                  <div className="h-28 w-36 lg:h-72 lg:w-[20rem] relative">
                     <img
                        src="https://res.cloudinary.com/dplikeeby/image/upload/v1743292855/certificate_f49bqs.jpg"
                        alt=""
                        className="object-contain h-full w-full transition-all duration-200 ease-out hover:scale-105"
                     />
                  </div>
                  <div className="h-28 w-36 lg:h-72 lg:w-[20rem] relative">
                     <img
                        src="https://res.cloudinary.com/dplikeeby/image/upload/v1748308271/dcoding_bf1f5p.jpg"
                        alt=""
                        className="object-contain h-full w-full transition-all duration-200 ease-out hover:scale-105"
                     />
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default Projects;
