import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Contact from './Contact'

const AboutPage = () => {
  return (
    <>
    <Navbar />
    <div>
      <div className='px-5'>
      <div className='md:flex items-center gap-10 px-10 md:px-32 py-32'>
          <div className='flex flex-col justify-center gap-10 items-center text-center md:text-start md:items-start'>
              <button className='px-7 py-2 bg-kuning rounded-full text-black'>About us</button>
              <h1 className='text-4xl md:text-6xl font-bold text-white'>We offer development services of all kind</h1>
              <p>Meet out expert team of web design and digital marketing professionals. With a divers skill set and years of experience, we combine creativity and expertise to deliver impactfull solutions.</p>
          </div>

          {/* items2 */}
          <div className='flex justify-around items-center gap-20 '>
            <div className='bg-kuning h-[23rem] w-64 hidden md:block'>
              <div className='border border-kuning h-[23rem] w-60 rotate-6 bg-cover'>
                <img src="https://scontent.fpku3-2.fna.fbcdn.net/v/t39.30808-6/254264962_1324268078030437_5355450597161557353_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFI0pY8Kh1r25oDx1tXOA18mBNI9dIsuEWYE0j10iy4RZfzD3SVnMiW3ID9r17pqSp0GT-immmgc8z6utOFWf9u&_nc_ohc=TIsfuwjyDH4AX_FUdVx&_nc_zt=23&_nc_ht=scontent.fpku3-2.fna&oh=00_AfCBR5WkmYba887idy5-qGk6UXQm4du-wNnGze3XejGOrA&oe=64D301D8" alt="Frengky iskandar" 
                className='h-[23rem] w-64'/>
              </div>
            </div>
            <div className='bg-kuning h-[23rem] w-64 hidden md:block'>
              <div className='border border-kuning h-[23rem] w-60 rotate-6 bg-cover'>
                <img src="https://scontent.fpku3-2.fna.fbcdn.net/v/t39.30808-6/273300412_1102792667179103_5245740049939953412_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_eui2=AeG2DSpHeB0z5_PzBlVblBKDlPE4nRB5702U8TidEHnvTfFJlolMXv8hW6TE8ip77x_wBLEqA4od0Tpxmj8TjRqk&_nc_ohc=K7oiFNll-4UAX_5c1V6&_nc_zt=23&_nc_ht=scontent.fpku3-2.fna&oh=00_AfCDbdRxcVy6y8tBmm0xYckGLDHey-eLBNJwivZrZRh1tg&oe=64D3087A" alt="Muklas ardiansyah"
                className="w-60 h-[23rem]"/>
              </div>
            </div>
          </div>`
      </div>
    </div>


      <div className='bg-white px-10 md:px-80 flex flex-col items-center'>

        <div className="flex flex-col  gap-5 md:flex-row  py-20 px-10 bg-white border-b border-gray-800 ">
          <div className='md:w-72'>
            <h1 className='font-bold text-3xl md:text-5xl text-black'>Design Capabilities</h1>
          </div>
          <div className='text-xl md:text-3xl flex flex-col gap-3 px-10 font-semibold md:w-60'>
            <h1>UX / UI Design</h1>
            <h1>Product Design</h1>
            <h1>App Design</h1>
            <h1>Brand Identity</h1>
          </div>
        </div>

        {/* items2 */}
        <div className="flex flex-col justify-between gap-5 md:flex-row py-20 px-10 bg-white border-b border-gray-800 ">
          <div className='md:w-72'>
            <h1 className='font-bold text-3xl md:text-5xl text-black'>Coding Capabilities</h1>
          </div>
          <div className='text-xl md:text-3xl flex flex-col gap-3 px-10 font-semibold md:w-60'>
            <h1>HTML</h1>
            <h1>CSS</h1>
            <h1>TailwindCss</h1>
            <h1>Bootstrap</h1>
            <h1>ReactJs</h1>
            <h1>NodeJs</h1>
          </div>
        </div>

        {/* items3 */}
        <div className="flex flex-col justify-between gap-5 md:flex-row py-20 px-10 bg-white border-b border-gray-800 ">
        <div className='md:w-72'>
            <h1 className='font-bold text-3xl md:text-5xl text-black'>Design Capabilities</h1>
          </div>
          <div className='text-xl md:text-3xl flex flex-col gap-3 px-10 font-semibold md:w-60'>
            <h1>Figma</h1>
            <h1>Framer</h1>
            <h1>Adobe Photoshop</h1>
          </div>
        </div>
      </div>
    </div>
      <Contact />
      <Footer />
    </>
  )
}

export default AboutPage