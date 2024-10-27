"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
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

const About = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [formData, setFormData] = useState({
    
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e:any) => {
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

  return (
    <main className='max-w-screen-xl mx-auto'>
      <section className='bg-gray-100 rounded-xl'>
        <div>
        <h1 className='text-4xl text-orange-500 font-bold text-center pt-10'>About <span className='text-zinc-800'>Me</span></h1>
        <p className='text-[10px] font-normal text-slate-700 text-center'>we provide you high standard clean websites with different styles </p>
        </div>
        <div className='sm:flex sm:justify-center sm:gap-8 md:flex md:justify-center md:gap-8 mx-10 items-center'>
        <div>
          <Image src="/img1.jpg" alt="" width={300} height={350} className='rounded-xl mb-10 mt-10' />
        </div>
        <div >
        <h2 className='text-2xl text-zinc-800 font-bold mt-5  '>Why  <span className='text-orange-500'> Hire Me ?</span></h2>
        <p className='text-[10px] font-normal text-slate-700'>Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit. Aspernatur, quaerat non. Laboriosam aliquam, <br />dolorem illum, dolores odio facilis nisi cumqueimpe <br />dit ducimus similique placeat consequuntur <br />quibusdam quos a deleniti exercitationem?</p>
        <div className='flex sm:justify-between md:justify-between mt-3 gap-10'>
          <p className='text-[10px]'><b className='text-[14px]'>450 <sup>+</sup> </b> <br />Projects Completed</p>
          <p className='text-[10px]'><b className='text-[14px]'>450 <sup>+</sup></b> <br />Projects Completed</p>
        </div>
        <div>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger  className='btn border-2 border-orange-500 hover:bg-orange-500 hover:border-none rounded-xl px-3 py-1 hover:text-white mt-3 text-[12px] mb-5'>
           Hire Me
            </SheetTrigger>
            <SheetContent className="w-72 sm:max-w-xs bg-slate-50 rounded-l-md">
              <SheetHeader>
                <SheetTitle>Get In <span className='text-orange-500'>Touch</span> With</SheetTitle>
                <SheetDescription className='text-[10px] text-slate-700'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia placeat sapiente repellendus officiis ipsam?</p>
                </SheetDescription>
              </SheetHeader>

              <form onSubmit={handleSubmit} className="mt-4 px-6 ">
                <div>
                  
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder='Your Name'
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className=" w-full bg-transparent border-b border-solid border-orange-500 text-zinc-800 text-md font-sans  mb-6 outline-none placeholder:text-orange-500" />
                  
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
      </div>
      </section >
    </main >
  )
}

export default About



