import React from 'react'
import Footer from './Footer'
import Contact from './Contact'
import {FaMapMarkerAlt} from 'react-icons/fa'
import {MdAttachEmail} from 'react-icons/md'
import {HiPhone} from 'react-icons/hi'
import {BsFillChatLeftDotsFill} from 'react-icons/bs'
import { useState } from 'react'


const TalkChat = () => {

    const {name, setName} = useState('')
    const { email ,setEmail} = useState('')
    const { message, setMessage} = useState('')

    const {errName, setErrName} = useState(true)
    const {errEmail, setErrEmail } = useState(true)
    const {errMessage, setErrMessage} = useState(true)
  return (
    <>
    <div className='bg-zinc-900 px-10 py-20 '>
        <div className="flex flex-wrap justify-center gap-32 items-center">
            <di className='flex flex-col gap-5 md:w-[30rem] '>
                <h1 className='bg-kuning text-zinc-900 rounded-full px-3 py-2 w-[7rem] text-center'>Contact us</h1>
                <h2 className='text-5xl font-bold text-white'>Get in touch</h2>
                <h1>Let's Discuss Your Software and Web Design Needs</h1>
                <div className='flex flex-col gap-3'>
                    <input type="text" className='px-3 py-3 rounded-xl bg-zinc-300 text-zinc-900' placeholder='Name'
                    // value={name}
                    // onChange={(e)=>{setName(e.target.value)}}
                    />
                    <input type="text" className='px-3 py-3 rounded-xl bg-zinc-300 text-zinc-900' placeholder='Email'/>
                    <textarea name="" id="" cols="20" rows="7" className='px-3 py-3 rounded-xl bg-zinc-300 text-zinc-900' placeholder='Message'></textarea>
                    <button className='bg-kuning rounded-xl py-4 text-black font-bold hover:bg-yellow-500'>Send</button>
                </div>
            </di>

            <div className='hidden md:block'>
                <img src="frenky.jpg" alt="" className='h-[35rem] rounded-3xl'/>
            </div>

        </div>
    </div>

    <section>
        <div className='py-20  bg-white px-10'>

            <div className='flex flex-wrap justify-center text-center gap-5'>
                <div className='flex flex-col gap-5 py-5 px-28 items-center border border-zinc-200 rounded-3xl shadow-2xl'>
                    <div className='w-16 h-16 rounded-full flex justify-center bg-kuning items-center'>
                        <MdAttachEmail color='#000000' size={35}/>
                    </div>
                    <h1 className='font-bold text-black text-xl'>Email</h1>
                    <h2>Reach Out to Us via Eamail</h2>
                    <p className='underline text-lg text-zinc-500'>frankie_rockabilly@gmail.com</p>
                </div>
                
                <div className='flex flex-col gap-5 py-5 px-28 items-center border border-zinc-200 rounded-3xl shadow-2xl'>
                    <div className='w-16 h-16 rounded-full flex justify-center bg-kuning items-center'>
                        <BsFillChatLeftDotsFill color='#000000' size={35}/>
                    </div>
                    <h1 className='font-bold text-black text-xl'>Live Chat</h1>
                    <h2>Instant Support through Live Chat</h2>
                    <p className='underline text-lg text-zinc-500'>Start new Chat</p>
                </div>
                <div className='flex flex-col gap-5 py-5 px-28 items-center border border-zinc-200 rounded-3xl shadow-2xl'>
                    <div className='w-16 h-16 rounded-full flex justify-center bg-kuning items-center'>
                        <HiPhone color='#000000' size={35}/>
                    </div>
                    <h1 className='font-bold text-black text-xl'>Phone</h1>
                    <h2>Speak with Our Experts by Phone</h2>
                    <p className='underline text-lg text-zinc-500'>(+62) 822 1566 0040</p>
                </div>

            </div>

        </div>
    </section>


    <section>
    <div className='bg-white flex flex-col justify-center py-5 text-center gap-3'>
        <p className=' px-3 py-2 bg-slate-400 text-black rounded-full w-32 mx-auto'>Where i am</p>
        <h1 className='font-bold text-4xl text-black'>Our Office Locations</h1>
        <p className='my-5'>Discover Our Creative Hubs</p>

        <div className='flex flex-wrap gap-5 justify-center items-center'>
            <div className='flex flex-col gap-1 w-96 py-14 px-6  font-bold  text-start bg-kuning rounded-xl text-black'>
                <FaMapMarkerAlt size={30} />
                <h1 className='text-3xl tracking-wide'>Rokan Hulu, Indonesia</h1>
                <p>Located in Riau Province, Indonesia</p>
            </div>

            <div className='w-96 py-14 px-6 text-start rounded-xl text-white bg-black font-bold '>
                <FaMapMarkerAlt size={30}/>
                <h1 className='text-3xl tracking-wide'>Rokan Hulu, Indonesia</h1>
                <p>Located in Riau Province, Indonesia</p>
            </div>
        </div>
    </div>
    </section>
    <Contact />
    <Footer />
    </> 
)
}

export default TalkChat