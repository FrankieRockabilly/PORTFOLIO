import React from 'react'
import {AiFillHtml5} from 'react-icons/ai'
import { BiSolidFileCss,BiLogoReact,BiLogoNodejs ,BiLogoTailwindCss} from 'react-icons/bi';
import ToolList from '../List/ToolList.json'

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
                    <p>Understanding about CSS and some framework and use this tech for any web design</p>
            </div>
            <div className="bg-white flex flex-col gap-3 px-8 py-4 rounded-2xl text-zinc-900 w-full md:w-80">
                <div className="w-16 h-16 bg-kuning rounded-full flex justify-center ">
                    <BiLogoTailwindCss className='translate-y-1/2 h-1/2' size={40} color='#000'/>
                </div>
                <h1 className='font-bold text-2xl font-ubuntu'>TailwindCss</h1>
                    <p>Use some css library for make some web project include TailwindCss</p>
            </div>
            <div className="bg-white flex flex-col gap-3 px-8 py-4 rounded-2xl text-zinc-900 w-full md:w-80">
                <div className="w-16 h-16 bg-kuning rounded-full flex justify-center ">
                    <BiLogoReact className='translate-y-1/2 h-1/2' size={40} color='#000'/>
                </div>
                <h1 className='font-bold text-2xl font-ubuntu'>ReactJs</h1>
                    <p>Understanding about HTML5 and use this tech for any web design</p>
            </div>
            {/* <div className="bg-white flex flex-col gap-3 px-8 py-4 rounded-2xl text-zinc-900 w-full md:w-80">
                <div className="w-16 h-16 bg-kuning rounded-full flex justify-center ">
                    <BiLogoNodejs className='translate-y-1/2 h-1/2' size={40} color='#000'/>
                </div>
                <h1 className='font-bold text-2xl font-ubuntu'>NodeJs</h1>
                    <p>Understanding about HTML5 and use this tech for any web design</p>
            </div> */}
        </div>

    </div>

        <section>
            <div className='bg-zinc-900 pt-20 pb-32 text-center px-5'>
            <h1 className='py-5 text-white text-3xl font-semibold'>Tools & Software</h1>

            <h1 className='text-xs bg-zinc-800 py-2 rounded-t-3xl'>HERE ARE THE TOOLS AND SOFTWARE I USE</h1>
                <div className='border border-zinc-800 rounded-b-3xl py-5 md:py-10'>
                    <div className='flex flex-wrap justify-center items-center gap-5'>
                    {ToolList.map((value, index)=>{
                        return(
                                <div className='h-40 w-48 md:h-24 md:w-24 bg-zinc-800 rounded-xl py-5 flex flex-col md:flex-row justify-center items-center border border-zinc-600 md:hover:scale-110 hover:bg-zinc-900 transition-all duration-300 group relative'>
                                    <img src={value.img} alt="" className='h-10 w-10 md:h-20 md:w-20 md:group-hover:scale-90 transition-all duration-300'/>
                                    <div className='pt-5 md:absolute top-[100px] md:border rounded-2xl border-zinc-600 md:bg-zinc-800 px-3 py-2 md:group-hover:scale-90 md:hidden w-28 h-28 group-hover:block transition-all ease-in-out duration-300'>
                                        <p className='text-xs tracking-widest'>{value.tools} </p>
                                        <h2 className='text-white text-2xl font-semibold'>{value.keahlian} </h2>
                                    </div>
                                </div>
                        )
                    })}
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}

export default Discover