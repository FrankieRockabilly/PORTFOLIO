import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Line from "./Line";
// import pencil from '../Assets/Image/pencil.png'
// import sandwatch from '../Assets/Image/sandwatch.png'
import testimonial from "../Assets/Json/testimonial.json";

const Testimonial = () => {
      return (
         <>
         <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgb(249 250 251" fill-opacity="1" d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,101.3C672,107,768,149,864,154.7C960,160,1056,128,1152,112C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
         </div>
         <div className="bg-gradient-to-b from-gray-50 to-white relative py-10">
            <div className="flex flex-col justify-center items-center gap-3 relative">
               {/* <img src={sandwatch} alt="" className="absolute -top-10 right-96"/> */}
               <h1 className="font-semibold text-center text-xl lg:text-2xl xl:text-4xl  text-oren -tracking-tight w-full head">
                     Testimonials
                  </h1>
               <Line />
                  {/* <img src={pencil} alt="" className="absolute top-10 right-64 z-20 hidden xl:block "/> */}
                  <div className="w-[80%] text-center">
                     <h2 className="capitalize text-base lg:mt-5 text-gray-700 lg:text-2xl xl:text-3xl 2xl:text-4xl h-[50%]">We care about our customers experience too</h2>
                  </div>
            </div>

            {/* Infinite Carousel */}
            <div className="flex justify-start items-center w-full overflow-hidden px-10 =">
               {/* <div className="absolute -top-24 left-20 hidden xl:block">
                  <img src='https://res.cloudinary.com/dplikeeby/image/upload/v1751529592/testi_lpfwq0.png' alt="" className="w-[30rem]" />
               </div> */}
               <div className="w-[60%] flex-grow">
                  <div className="py-12 w-full flex flex-grow">
                     <Swiper
                        loop={true} // Infinite scroll
                        autoplay={{
                           delay: 0, // Tidak ada delay
                           disableOnInteraction: false, // Tetap berjalan meski ada interaksi
                        }}
                        speed={2000} // Kecepatan scroll (ms)
                        modules={[Autoplay]} // Menggunakan modul Autoplay
                        className="w-full"
                        breakpoints={{
                           320: { slidesPerView: 1, spaceBetween: 5 }, // Mobile
                           640: { slidesPerView: 2, spaceBetween: 5 }, // Tablet
                           1024: { slidesPerView: 3, spaceBetween: 15 }, // Laptop
                           1280: { slidesPerView: 4, spaceBetween: 15 }, // Desktop
                        }}
                     >
                        {testimonial.map((value, index) => (
                           <SwiperSlide key={index} className="flex justify-center">
                              <div className="bg-white px-4 md:px-12 py-5 border shadow-md w-[17rem] 2xl:w-[26rem] h-52 overflow-hidden flex flex-col justify-start items-start gap-2">
                                 <div className="flex justify-center items-center gap-4 ">
                                    <div className="w-10 h-10  lg:w-20 lg:h-20 rounded-full border flex justify-center items-center">
                                       <img
                                          src={value.profilImage}
                                          alt="profil"
                                          className="w-full h-full object-cover rounded-full "
                                       />
                                    </div>
                                    <div>
                                       <p className="font-semibold text-sm lg:text-base">{value.name}</p>
                                       <p className="text-[10px] lg:text-sm text-gray-400 ">
                                          {value.bisnis} - {value.location}
                                       </p>
                                    </div>
                                 </div>
                                 <p className="text-gray-500 font-light truncate w-full text-wrap text-sm">
                                    {value.comment}
                                 </p>
                              </div>
                           </SwiperSlide>
                        ))}
                     </Swiper>
                  </div>
               </div>
            </div>
         </div>
         
         </>
      );
};

export default Testimonial;
