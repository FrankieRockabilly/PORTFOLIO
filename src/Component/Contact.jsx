import React, { useState } from 'react'
import { Envelope, MapPin } from '@phosphor-icons/react'
import Maps from './Maps'
import SuksesKirimPesan from '../Assets/SweetAlert/SuksesKirimPesan'
import Line from './Line'

const Contact = () => {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [message, setMessage] = useState()
    const [isSuccesSendFeedback, setIsSuccessSendFeedback] = useState(false)

    const handleClickSendFeedback = (e) => {
        e.preventDefault()
        setIsSuccessSendFeedback(true)
        console.log('oke');

    }

    return (
        <>
            <div className='px-5 lg:px-36 py-10'>
                <div className='flex flex-col justify-center items-center gap-6 pt-16'>
                    <h1 className='text-center text-2xl lg:text-3xl font-bold '>Get In Touch</h1>
                    <Line />
                </div>
                {isSuccesSendFeedback && (
                    <SuksesKirimPesan />
                )}
                <div className='flex flex-wrap  rounded-2xl shadow-xl'>
                    {/* 1 */}
                    <form className='px-16 py-16 flex flex-col justify-start items-start gap-5  w-2[70%]' onSubmit={handleClickSendFeedback}>
                        <div className='flex flex-wrap justify-between gap-5 w-full'>
                            {/* <label htmlFor="">Full Name*</label> */}
                            <input type="text" className='w-full lg:w-auto outline-none border-b-[1px] py-3 border-gray-500 bg-white' placeholder='Full Name*'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required />
                            <input type="email" className='w-full lg:w-auto outline-none border-b-[1px] py-3 border-gray-500 bg-white' placeholder='Email*'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required />
                            <input type="text" className='w-full lg:w-auto outline-none border-b-[1px] py-3 border-gray-500 bg-white' placeholder='Phone Number*'
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)} />
                        </div>
                        <div className='w-full'>
                            <input type="text" className='outline-none border-b-[1px] py-3 border-gray-500 bg-white w-full' placeholder='Message'
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                aria-required />
                        </div>
                        <button type='submit' className='px-7 py-3 rounded-full bg-gradient-to-b from-primarySec to-primary shadow-2xl hover:from-primary hover:to-[#11856e] shadow-primarySec text-white'>Send Message</button>
                    </form>

                    {/* 2 */}
                    <div className='grow w-auto px-5 py-5 flex flex-col justify-start items-start gap-3 text-gray-700'>
                        <div className='flex justify-start items-center gap-3'>
                            <div className='px-2 py-2 rounded-full border'>
                                <Envelope size={32} weight="thin" />
                            </div>
                            <p className='break-words text-wrap text-lg'>frankierockabill@gmail.com</p>
                        </div>
                        <div className='flex justify-start items-center gap-3'>
                            <div className='px-2 py-2 rounded-full border'>
                                <MapPin size={32} weight="thin" />
                            </div>
                            <p className='break-words text-wrap text-lg'>Rokan Hulu, indonesia</p>
                        </div>

                        <div className='w-full'>
                            <Maps />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact