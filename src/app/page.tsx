"use client"
import React from 'react';
import { usePathname } from 'next/navigation';
import { RiDoubleQuotesL } from "react-icons/ri";
import { FaStar } from "react-icons/fa";
import Link from 'next/link';
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import Image from 'next/image';

const Home = () => {
  const pathname = usePathname();

  return (
    <main className="max-w-screen-xl mx-auto px-4">
      <div className="text-center">
        <h4 className="text-zinc-800 text-sm mt-10">Hello</h4>
        <h1 className="text-4xl md:text-5xl text-zinc-800 font-bold mb-5">
          {`I'm`} <span className="text-orange-500">Shaheen</span>, <br />
          <span className="text-orange-500">Creative</span> Developer
        </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center">
  <div className='mb-5  ml-5 sm:ml-[20%]'>
    <RiDoubleQuotesL className='text-zinc-800 font-bold text-3xl text-left' />
    <p className='text-xs sm:text-xs font-normal mt-2 text-zinc-800 '>
     We will provide you awesome and <br /> clean websites
      by Next.js and React <br /> exceptional and highly
      recommend <br /> -ed nowadays at your own choice.
    </p>
    <div className='text-black flex gap-2 text-2xl mt-4'>
      <FaFacebook className='hover:text-orange-500' />
      <IoLogoWhatsapp className='hover:text-orange-500' />
      <RiInstagramFill className='hover:text-orange-500' />
      <FaTwitter className='hover:text-orange-500' />
    </div>
  </div>

  <div className="image-container relative flex flex-col items-center">
    <img src="/c1.png" alt="" className="w-64 sm:w-64 md:w-80 ml-10" />
    <ul className='items-center absolute transform -translate-x-1/2 -translate-y-1/2 text-xs font-medium text-white bg-black bg-opacity-60 rounded-full py-1 border border-white top-[80%] left-2/4 flex justify-between w-40 ml-5'>
      {['/', '/hire-me'].map((path) => (
        <li key={path} className={`flex-1 text-center ${pathname === path ? 'bg-orange-500 text-white rounded-full py-1 ml-2 text-center' : 'text-white'}`}>
          <Link href={path}>{path === '/' ? 'Portfolio' : 'Hire Me'}</Link>
        </li>
      ))}
    </ul>
  </div>

  <div className='text-center  text-white mx-4  py-2 flex flex-col items-center '>
    <div className='bg-zinc-800 px-6 py-5 rounded-full md:ml-32 sm:ml-[100%]'>
    <div className='flex text-orange-500 text-xs'>
      <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
    </div>
    <p className='font-bold text-xl leading-4 mt-2'>12 <br />Years</p>
    <p className='text-xs leading-5'>Experience</p>
  </div>
  </div>
</div>

      
    </main>
  );
}

export default Home;
