import React from 'react'
import qna from '../Assets/Image/pro.jpg'
// import personal from '../Assets/Image/personal.jpg'
import nexcent from '../Assets/Image/nexcent.jpg'
import tiwiponsel from '../Assets/Image/tiwiponsel.png'
import Line from './Line'

const Projects = () => {
    return (
        <>
            <section className=' pb-28 pt-20 lg:pt-1 px-5'>
                <div className='flex flex-col justify-center items-center gap-6 pt-24 pb-10 '>
                    <h1 className='text-center text-2xl lg:text-3xl font-bold'>Projects</h1>
                    <Line />
                </div>
                <div className='flex justify-center items-center gap-20 flex-wrap'>
                    {/* item project */}
                    {/* 1 */}
                    <div className='w-96 flex flex-col justify-center items-center gap-5 px-5 py-2 shadow-lg  rounded-lg'>
                        <div className='w-72 h-64'>
                            <img src={qna} alt="infidea" className='w-full h-full bg-contain rounded-2xl' />
                        </div>
                        <h1 className='w-40 text-center font-semibold tracking-wider'>QnA Infidea</h1>

                        <div className='flex justify-between items-center w-full text-gray-500'>
                            <p>Project</p>
                            <p className='text-black font-semibold'>Frontend Dev</p>
                        </div>

                        <div className='py-8'>
                            <button className='px-8 rounded-xl border py-5 hover:bg-primary text-gray-400 hover:text-white transition-all duration-300 ease-in'><a href="https://qna.infidea.id/" target='blank'>See Project</a></button>
                        </div>
                    </div>

                    {/* 2 */}
                    <div className='w-96 flex flex-col justify-center items-center gap-5 px-5 py-2 shadow-lg  rounded-lg'>
                        <div className='w-72 h-64'>
                            <img src={tiwiponsel} alt="infidea" className='w-full h-full bg-contain rounded-2xl' />
                        </div>
                        <h1 className='w-40 text-center font-semibold tracking-wider'>E Commerce</h1>

                        <div className='flex justify-between items-center w-full text-gray-500'>
                            <p>Project</p>
                            <p className='text-black font-semibold'>Fullstack Dev</p>
                        </div>

                        <div className='py-8'>
                            <button className='px-8 rounded-xl border py-5 hover:bg-primary text-gray-400 hover:text-white transition-all duration-300 ease-in'><a href="https://deristore-tiwiponsel.vercel.app/" target='blank'>See Project</a></button>
                        </div>
                    </div>

                    {/* 3 */}
                    <div className='w-96 flex flex-col justify-center items-center gap-5 px-5 py-2 shadow-lg  rounded-lg'>
                        <div className='w-72 h-64'>
                            <img src={nexcent} alt="infidea" className='w-full h-full bg-contain rounded-2xl' />
                        </div>
                        <h1 className='w-40 text-center font-semibold tracking-wider'>Nexcent UI</h1>

                        <div className='flex justify-between items-center w-full text-gray-500'>
                            <p>Project</p>
                            <p className='text-black font-semibold'>Frontend Dev</p>
                        </div>

                        <div className='py-8'>
                            <button className='px-8 rounded-xl border py-5 hover:bg-primary text-gray-400 hover:text-white transition-all duration-300 ease-in'>See Project</button>
                        </div>
                    </div>

                </div>

                <div className='my-4'>
                    <a href="/RESUME.pdf" download="RESUME.pdf">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded">Download My CV</button>
                    </a>
                </div>


            </section>
        </>
    )
}

export default Projects