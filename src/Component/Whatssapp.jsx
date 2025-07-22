import React, { useEffect, useState } from "react"
import { FaWhatsapp } from "react-icons/fa";

const Whatsapp = () => {
    const [size, setSize] = useState(20)
    const [whatsappActive, setWhatsappActive] = useState(false)
    const handleCLickWhatsapp=()=>{
    setWhatsappActive((prevState)=> !prevState)
    }

    useEffect(() => {
        const updateSize = () => {
            const width = window.innerWidth
            if (width < 640) {
                // sm: mobile
                setSize(30);
            } else if (width >= 640 && width < 1024) {
                // md & lg: tablet
                setSize(35);
            } else if (width >= 1024 && width < 1536) {
                // xl: desktop
                setSize(38);
            } else {
                // 2xl: large desktop
                setSize(40);
            }
        }

        // Panggil sekali saat component mount
        updateSize();

        // Tambah event listener untuk resize
        window.addEventListener('resize', updateSize);

        // Cleanup saat component unmount
        return () => window.removeEventListener('resize', updateSize);
    }, []); // Jangan lupa dependency array kosong

    return (
        <>
            <div className="p-2 rounded-lg bg-green-500 text-white" onClick={handleCLickWhatsapp}> 
                <FaWhatsapp size={size}/>
            </div>
        </>
    )
}

export default Whatsapp