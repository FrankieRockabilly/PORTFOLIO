import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Line from "./Line";
import testimonial from "../Assets/Json/testimonial.json";

const Testimonial = () => {
    return (
        <div className="bg-gray-100 py-20 ">
            <div className="flex flex-col justify-center items-center gap-6 pt-12">
                <h1 className="text-center text-2xl lg:text-3xl font-bold">Testimonial</h1>
                <Line />
            </div>

            {/* Infinite Carousel */}
            <div className="py-12">
                <Swiper
                    loop={true} // Infinite scroll
                    autoplay={{
                        delay: 0, // Tidak ada delay
                        disableOnInteraction: false, // Tetap berjalan meski ada interaksi
                    }}
                    speed={5000} // Kecepatan scroll (ms)
                    modules={[Autoplay]} // Menggunakan modul Autoplay
                    className="w-full"
                    breakpoints={{
                        320: { slidesPerView: 1, spaceBetween: 10 }, // Mobile
                        640: { slidesPerView: 2, spaceBetween: 10 }, // Tablet
                        1024: { slidesPerView: 3, spaceBetween: 15 }, // Laptop
                        1280: { slidesPerView: 4, spaceBetween: 20 }, // Desktop
                    }}
                >
                    {testimonial.map((value, index) => (
                        <SwiperSlide key={index} className="flex justify-center">
                            <div className="bg-white rounded-lg px-4 md:px-12 py-5 shadow-md w-[20rem] md:w-[27rem] h-60 overflow-hidden flex flex-col justify-start items-start gap-2">
                                <div className="flex justify-center items-center gap-4">
                                    <div className="w-20 h-20 rounded-full border flex justify-center items-center">
                                        <img src={value.profilImage} alt="profil" className="w-full h-full object-cover rounded-full" />
                                    </div>
                                    <div>
                                        <p className="font-semibold ">{value.name}</p>
                                        <p className="text-sm text-gray-400">{value.bisnis}</p>
                                    </div>
                                </div>
                                <p className="text-gray-500 font-light truncate w-full text-wrap text-sm lg:text-base">{value.comment}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonial;
