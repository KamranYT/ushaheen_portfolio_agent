"use client"
import Link from 'next/link';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MdArrowOutward } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { IoSend } from "react-icons/io5";

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose
} from "@/components/ui/sheet";

const Footer = () => {
  const [email, setEmail] = useState(''); // To store email input for subscription
  const [isOpen, setIsOpen] = React.useState(false);
  const [formData, setFormData] = useState({

    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);

    // Reset form after submission
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      message: ''
    });

    alert('Your message has been sent!');
  };



  // Function for handling the subscribe button click
  const handleSubscribe = () => {
    if (email) {
      alert(`Subscribed with ${email}`);
      setEmail('');
    } else {
      alert('Please enter a valid email.');
    }
  };
  return (
    <main className='bg-zinc-800 max-w-screen-xl mx-auto'>
      <div>
       <Image src="/logo1.png" alt="Logo" width={60} height={60} className='ml-16 pt-5' />
      </div>
      <div className='md:flex md:justify-between mx-16 border-b border-b-gray-400 border-spacing-y-12'>
        <div>
        <h1 className='text-4xl text-white font-bold '>{`Let's Connect There`}</h1>
        <p className='text-white leading-tight text-[10px] md:text-left mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti possimus dignissimos <br /> iure hic, odio nemo dicta, sequi illo, esse harum accusantium necessitatibus expeditaes <br /> incidunt saepe earum delectus explicabo voluptates.</p>
        <div className='text-white flex gap-1 mt-4 text-2xl mb-5'>
          <FaFacebook className='hover:text-orange-500 transition-all duration-500' />
          <IoLogoWhatsapp className='hover:text-orange-500 transition-all duration-500' />
          <RiInstagramFill className='hover:text-orange-500 transition-all duration-500' />
          <FaTwitter className='hover:text-orange-500 transition-all duration-500' />
        </div>
        </div>
        <div>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className='btn text-white my-5 bg-orange-500 rounded-full px-4 py-2 text-sm flex  items-center md:mt-10 mt-2'>
                Hire Me <MdArrowOutward className='text-lg' />
            </SheetTrigger>
            <SheetContent className="w-72 sm:max-w-xs bg-slate-50 rounded-l-md">
              <SheetHeader>
                <SheetTitle>Get In <span className='text-orange-500'>Touch</span> With</SheetTitle>
                <SheetDescription className='text-[10px] text-slate-700'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia placeat sapiente repellendus officiis ipsam?</p>
                </SheetDescription>
              </SheetHeader>

              <form onSubmit={handleSubmit} className="mt-4 px-6">
                <div>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder='Your Name'
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-solid border-orange-500 text-zinc-800 text-md font-sans  mb-6 outline-none placeholder:text-orange-500" />
                  
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder='Email Address'
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className='w-full bg-transparent border-b border-solid border-orange-500 text-zinc-800 text-md font-sans  mb-6 outline-none placeholder:text-orange-500' />
                  
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder='Phone Number'
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className='w-full bg-transparent border-b border-solid border-orange-500 text-zinc-800 text-md font-sans  mb-6 outline-none placeholder:text-orange-500' />
                
                  <textarea
                    id="message"
                    name="message"
                    placeholder='Your Message'
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className='w-full bg-transparent border-b border-solid border-orange-500 text-zinc-800 text-md font-sans  mb-6 outline-none placeholder:text-orange-500'></textarea>
                </div>
                <button className=" border-[1px] border-orange-500 text-black py-2 px-3 rounded hover:bg-orange-600 transition duration-300 hover:text-white" type="submit">Submit Now</button>
              </form>

              <SheetFooter>
              </SheetFooter>
            </SheetContent>

          </Sheet>
          </div>

      </div>
      <div className='md:flex md:justify-between md:mx-16 md:mt-10 ml-16 mt-5'>
          <div>
            <h3 className='text-orange-500 font-semibold text-2xl'>Navigation</h3>
            <ul className=' text-[12px] font-normal text-white items-center mt-2 '>
              <li className='mt-1 hover:text-orange-500 transition-all duration-500'><Link href="/">Home</Link></li>
              <li className='mt-1 hover:text-orange-500 transition-all duration-500'><Link href="/about">About</Link></li>
              <li className='mt-1 hover:text-orange-500 transition-all duration-500'><Link href="/contact">Contact</Link></li>
            </ul>
      </div>
          <div>
            <h3 className='text-orange-500 font-semibold text-2xl '>Contact</h3>
            <div className='text-[12px] font-normal text-white mt-2 '>
              <p className='mt-1'>+000 123 456 789</p>
              <p className='mt-1'>ushaheen0000@gmail.com</p>
              <p className='mt-1'>uzmashaheen.com</p>
            </div>
          </div>
          <div>
            <h3 className='text-orange-500 font-semibold text-2xl '>Get the latest information</h3>
            <div className="flex mt-4">
              <input
                type="text"
                id="email"
                placeholder="Enter Your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className=" px-5 text-left text-[10px] font-extralight outline-none py-2 rounded-l-lg left-full" />
              <button
                className='bg-orange-500 px-2  text-[12px] text-center font-medium items-center text-white '
                onClick={handleSubscribe}>
                <IoSend className='text-sm' />
              </button>
            </div>
            </div>
            </div>
      <div className='text-white text-[9px] font-[arial serif] mt-10 pb-2 text-center'>
        <p>CopyRight@ 2024 All Rights Reserved
          {`Use terms & conditions | Privacy Policy`}</p>
      </div>

    </main>
  );
}

export default Footer;
