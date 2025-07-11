import { useState, useEffect } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { FaHome, FaClipboardList, FaPhone, FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { LuLayoutList } from "react-icons/lu";

const Header = ({ scrollToAbout, scrollToHome, scrollToPortfolio, scrollToContact }) => {
      const [scroll, setScroll] = useState(false)

      const refresh = () => {
         window.location.reload();
      };

      const handleScroll = () => {
         if (window.scrollY > 50) {
            setScroll(true);
         } else {
            setScroll(false);
         }
      };

      const closeDrawer = () => {
         const drawer = document.getElementById("my-drawer");
         if (drawer) drawer.checked = false;
      };

      useEffect(() => {
         window.addEventListener("scroll", handleScroll);
         return () => {
            window.removeEventListener("scroll", handleScroll);
         };
      }, []);

      return (
         <>
            <header
               className={`bg-none flex justify-between items-center px-[10%] py-10 flex-grow-0 h-20 w-full fixed top-0 z-30 right-0 left-0  ${
                  scroll ? "shadow-md backdrop-blur-3xl bg-opacity-60" : ""
               }`}
            >
               <div
                  className="flex justify-center items-center gap-20 cursor-pointer"
                  onClick={refresh}
               >
                  <p className="font-bold text-xl text-primary">
                     FRENGKI <span className="text-oren">ISKANDAR</span>
                  </p>
               </div>

               <div>
                  <div className="lg:hidden ">
                     <div className="drawer">
                        <input
                           id="my-drawer"
                           type="checkbox"
                           className="drawer-toggle"
                        />
                        <div className="drawer-content">
                           <label htmlFor="my-drawer" className=" drawer-button">
                              <RxHamburgerMenu />
                           </label>
                        </div>
                        <div className="drawer-side ">
                           <label
                              htmlFor="my-drawer"
                              aria-label="close sidebar"
                              className="drawer-overlay"
                           ></label>
                           <div className="menu bg-white min-h-full w-72 p-4 gap-10 text-base font-light py-10 shadow-xl text-black">
                              <div
                                 className="flex justify-start items-center gap-5 hover:text-oren cursor-pointer"
                                 onClick={() => {
                                    scrollToHome();
                                    closeDrawer();
                                 }}
                              >
                                 <FaHome />
                                 <p>Home</p>
                              </div>
                              <div
                                 className="flex justify-start items-center gap-5 hover:text-oren cursor-pointer"
                                 onClick={() => {
                                    scrollToAbout();
                                    closeDrawer();
                                 }}
                              >
                                 <FaClipboardList />
                                 <p>About</p>
                              </div>
                              <div
                                 className="flex justify-start items-center gap-5 hover:text-oren cursor-pointer"
                                 onClick={() => {
                                    scrollToPortfolio();
                                    closeDrawer();
                                 }}
                              >
                                 <LuLayoutList />
                                 <p>Portfolio</p>
                              </div>
                              <div
                                 className="flex justify-start items-center gap-5 hover:text-oren cursor-pointer"
                                 onClick={() => {
                                    scrollToContact();
                                    closeDrawer();
                                 }}
                              >
                                 <FaPhone />
                                 <p>Contact</p>
                              </div>
                              <div className="flex justify-start items-center gap-5">
                                 <FaFacebook size={20} />
                                 <FaInstagram size={20} />
                                 <FaWhatsapp size={20} />
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="hidden lg:flex justify-center items-center gap-20 text-xl text-zinc-500">
                     <button
                        className="font-light py-2 hover:text-primary"
                        onClick={() => scrollToHome()}
                     >
                        Home
                     </button>
                     <button
                        className="font-light py-2 hover:text-primary"
                        onClick={() => scrollToAbout()}
                     >
                        About
                     </button>
                     <button
                        className="font-light py-2 hover:text-primary"
                        onClick={() => scrollToPortfolio()}
                     >
                        Portolio
                     </button>
                     <button
                        className="font-light py-2 hover:text-primary"
                        onClick={() => scrollToContact()}
                     >
                        Contact
                     </button>
                  </div>
               </div>
            </header>
         </>
    );
}

export default Header
