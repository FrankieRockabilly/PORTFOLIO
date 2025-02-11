import React, { useEffect, useState } from 'react'

const ChangingTextHome = ({texts}) => {
    const [currentTextindex, setCurrentTextIndex]  = useState(0)

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setCurrentTextIndex((prevIndex)=>(prevIndex + 1) % texts.length );
        },3000)
        return () => clearInterval(intervalId)
    },[texts])

  return (
    <div className='text-4xl md:text-7xl text-kuning transition-opacity duration-1000 ease-in-out'>
        {texts[currentTextindex]}
    </div>
  )
}

export default ChangingTextHome;