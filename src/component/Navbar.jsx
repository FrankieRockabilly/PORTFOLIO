import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineMenu, AiFillFacebook ,AiFillInstagram, AiOutlineTwitter,AiFillGithub} from 'react-icons/ai';
import { FaBloggerB } from 'react-icons/fa';

const Navbar = () => {

  // }

  return (
    <>
    <div className="relative px-7 md:px-24 w-full bg-zinc-900">
      <div className=" top-0 navbar bg-zinc-900 z-10  py-5 relative">
        <div className="flex-1">
          <div className="flex items-center">
            <p className='font-bold text-2xl md:text-4xl text-white'>Frengki Iskandar</p>
          </div>
        </div>

      <div className="md:invisible">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex justify-end">
          {/* Page content here */}
          <label htmlFor="my-drawer" className="btn drawer-button "><AiOutlineMenu/></label>
        </div> 
        <div className="drawer-side ">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 flex flex-col gap-5 w-80 h-full bg-kuning text-lg font-semibold tracking-widest text-black absolute top-[89px] ">
            {/* Sidebar content here */}
            <Link to={'/'}><li className='uppercase'><a>Home</a></li> </Link>
            <Link to={'/about'}><li className='uppercase'><a>About</a></li> </Link>
            <Link to={'/contact'}><li className='uppercase' ><a>Contact</a></li> </Link>
            <Link to={'/moree'}><li className='uppercase'><a>More</a></li> </Link>

            <div className="flex flex-col gap-6 text-xs px-4 ">
              <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, sapiente!</h2>
              <div className="flex items-center gap-5">
                <a href="#"><FaBloggerB size={25}/></a>
                <a href="#"><AiFillFacebook size={25}/></a>
                <a href="#"><AiOutlineTwitter size={25}/></a>
                <a href="#"><AiFillGithub size={25}/></a>
                <a href="#"><AiFillInstagram size={25}/></a>
              </div>
            <span className='border-b-2 border-white my-2'></span>
            <div className="flex flex-col gap-0 text-xs">
              <p>Faq & shipping</p>
              <p>Term & condition</p>
            </div>
            </div>
            
          </ul>
        </div>
    </div>

    
        
      <div className="flex-none gap-2 hidden md:block">
          <ul className='flex justify-between text-xl gap-5 text-white font-bold'>
            <Link to={'/'}> <p className='hover:bg-kuning rounded-ss-2xl rounded-ee-2xl hover:text-white px-3 py-2 transition duration-200 ease-linear'>Home</p></Link>
            <Link to={'/about'}> <p className='hover:bg-kuning rounded-ss-2xl rounded-ee-2xl hover:text-white px-3 py-2 transition duration-200 ease-linear'>About</p></Link>
            <Link to={'/contact'}> <p className='hover:bg-kuning rounded-ss-2xl rounded-ee-2xl hover:text-white px-3 py-2 transition duration-200 ease-linear'>Contact</p></Link>
            <Link to={'/kontak'}> <p className='hover:bg-kuning rounded-ss-2xl rounded-ee-2xl hover:text-white px-3 py-2 transition duration-200 ease-linear'>More</p></Link>
          </ul>
      </div>
      </div>

      
    </div>
    </>
  )
}

export default Navbar