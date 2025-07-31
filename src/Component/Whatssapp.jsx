import  { useEffect, useState } from "react"
import { FaWhatsapp } from "react-icons/fa";

const Whatsapp = () => {
    const [size, setSize] = useState(20)
    const [whatsappActive, setWhatsappActive] = useState(false)
    const handleCLickWhatsapp=()=>{
    setWhatsappActive((prevState)=> !prevState)
    console.log(whatsappActive)
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
            <div className="p-2 rounded-lg bg-green-500 text-white relative"> 
                <div className="cursor-pointer"  onClick={handleCLickWhatsapp}>
                    <FaWhatsapp size={size}/>
                </div>

                {whatsappActive && (
                    <div className="absolute bottom-[120%] right-0 z-10 w-[20rem] h-auto  text-black bg-white border rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
                        <div className="flex flex-col justify-center items-center gap-0 bg-blue-700  text-white p-2 lg:p-4">
                            <h1 className="text-[11px] lg:text-lg">How can we help ?</h1>
                            <p className="text-gray-300 text-sm">We usually respon in a few hours</p>
                        </div>
                        <div className="p-2 lg:p-4">
                            <div className="bg-white text-black text-sm flex flex-col justify-start items-start gap-2 mb-52">
                                <p>Frengki</p>
                                <p className="px-2 py-3 bg-slate-100 rounded-lg w-full"> Hi There, Do you have any problem ?</p>
                            </div>
                            <div className="bg-blue-600 w-full h-[2px] rounded-full"></div>
                            <div className="flex flex-col justify-start items-start gap-2">
                                <input type="text" className="w-full border-none px-2 py-3 font-light outline-none" placeholder="text us here please"/>
                                <button className="px-5 py-2 rounded-lg bg-blue-700 text-white">Send</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Whatsapp