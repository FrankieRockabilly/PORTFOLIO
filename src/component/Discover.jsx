import React from 'react'
import {AiFillHtml5} from 'react-icons/ai'
import { BiSolidFileCss,BiLogoReact,BiLogoNodejs ,BiLogoTailwindCss} from 'react-icons/bi';
import {BsFillBootstrapFill} from 'react-icons/bs';



const Discover = () => {
    return (
    <>
    <div className='bg-kuning py-14 px-5'>
        <div className='flex justify-center py-5'>
            <button className='px-4 py-2 rounded-full bg-black text-white'>Services</button>
        </div>
        <div className='flex flex-col justify-center text-center px-20 gap-2'>
            <h1 className='text-2xl font-bold text-black'>Discover my Unique skillset</h1>
            <p className='text-gray-600'>Proficiency and expertise honed years to drie exceptional results in my project</p>
        </div>

        {/* our skillset */}
        <div className='flex flex-wrap gap-3 md:gap-7 justify-center py-5'>
            <div className="bg-white flex flex-col gap-3 px-8 py-4 rounded-2xl text-zinc-900 w-full md:w-80">
                <div className="w-16 h-16 bg-kuning rounded-full flex justify-center ">
                    <AiFillHtml5 className='translate-y-1/2 h-1/2' size={40} color='#000'/>
                </div>
                <h1 className='font-bold text-2xl font-ubuntu'>HTML5</h1>
                    <p>Understanding about HTML5 and use this tech for any web design</p>
            </div>
            <div className="bg-white flex flex-col gap-3 px-8 py-4 rounded-2xl text-zinc-900 w-full md:w-80">
                <div className="w-16 h-16 bg-kuning rounded-full flex justify-center ">
                    <BiSolidFileCss className='translate-y-1/2 h-1/2' size={40} color='#000'/>
                </div>
                <h1 className='font-bold text-2xl font-ubuntu'>CSS</h1>
                    <p>Understanding about HTML5 and use this tech for any web design</p>
            </div>
            <div className="bg-white flex flex-col gap-3 px-8 py-4 rounded-2xl text-zinc-900 w-full md:w-80">
                <div className="w-16 h-16 bg-kuning rounded-full flex justify-center ">
                    <BiLogoTailwindCss className='translate-y-1/2 h-1/2' size={40} color='#000'/>
                </div>
                <h1 className='font-bold text-2xl font-ubuntu'>TailwindCss</h1>
                    <p>Understanding about HTML5 and use this tech for any web design</p>
            </div>
            <div className="bg-white flex flex-col gap-3 px-8 py-4 rounded-2xl text-zinc-900 w-full md:w-80">
                <div className="w-16 h-16 bg-kuning rounded-full flex justify-center ">
                    <BsFillBootstrapFill className='translate-y-1/2 h-1/2' size={40} color='#000'/>
                </div>
                <h1 className='font-bold text-2xl font-ubuntu'>Bootstrap</h1>
                    <p>Understanding about HTML5 and use this tech for any web design</p>
            </div>
            <div className="bg-white flex flex-col gap-3 px-8 py-4 rounded-2xl text-zinc-900 w-full md:w-80">
                <div className="w-16 h-16 bg-kuning rounded-full flex justify-center ">
                    <BiLogoReact className='translate-y-1/2 h-1/2' size={40} color='#000'/>
                </div>
                <h1 className='font-bold text-2xl font-ubuntu'>ReactJs</h1>
                    <p>Understanding about HTML5 and use this tech for any web design</p>
            </div>
            <div className="bg-white flex flex-col gap-3 px-8 py-4 rounded-2xl text-zinc-900 w-full md:w-80">
                <div className="w-16 h-16 bg-kuning rounded-full flex justify-center ">
                    <BiLogoNodejs className='translate-y-1/2 h-1/2' size={40} color='#000'/>
                </div>
                <h1 className='font-bold text-2xl font-ubuntu'>NodeJs</h1>
                    <p>Understanding about HTML5 and use this tech for any web design</p>
            </div>
        </div>

        {/* trusted by start */}
        <div className='text-center'>
            <h1 className='font-bold text-2xl text-black py-2'>Trusted by :</h1>
            <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-kuning rounded-box">
                <div className="carousel-item">
                    <img src="frenky.jpg " className="rounded-box w-32 h-32" />
                </div> 
                <div className="carousel-item">
                    <img src="frengky.jpg " className="rounded-box w-32 h-32" />
                </div> 
                <div className="carousel-item">
                    <img src="frenky.jpg " className="rounded-box w-32 h-32" />
                </div> 
                <div className="carousel-item">
                    <img src="frenky.jpg " className="rounded-box w-32 h-32" />
                </div> 
                <div className="carousel-item">
                    <img src="frenky.jpg " className="rounded-box w-32 h-32" />
                </div> 
                <div className="carousel-item">
                    <img src="frenky.jpg " className="rounded-box w-32 h-32" />
                </div> 
                <div className="carousel-item">
                    <img src="frenky.jpg " className="rounded-box w-32 h-32" />
                </div>
                </div>
            </div>
        {/* trusted by end */}
    </div>
    </>
  )
}

export default Discover