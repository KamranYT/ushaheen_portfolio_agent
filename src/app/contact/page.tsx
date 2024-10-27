"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
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
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
    alert('Your message has been sent!');
  };

  return (
    <main className=' max-w-screen-xl mx-auto '>
      <section className='relative w-full h-[120vh] overflow-hidden'>
        <Image
          src="/f.jpg"
          layout="fill"
          quality={100}
          alt="Background Image"
          className=' object-cover' />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h1 className='text-5xl font-bold text-orange-500 mb-5'>Contact <span className='text-white'>Us</span></h1>
          <form onSubmit={handleSubmit} className="w-[25rem] h-[30rem] bg-black bg-opacity-50 p-8 flex flex-col  ">
            <h2 className="text-2xl font-semibold text-white mb-4 mt-5">Get In <span className='text-orange-500'>Touch</span> With <span>Me</span></h2>
            <div>
              <input
                className="w-full h-9 bg-transparent border-b border-dashed border-orange-500 text-white text-lg font-sans mb-6 outline-none placeholder:text-orange-500"
                id="name"
                name="name"
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <input
                placeholder='Phone Number'
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full h-9 bg-transparent border-b border-dashed border-orange-500 text-white text-lg font-sans  mb-6 outline-none placeholder:text-orange-500" />
            </div>
            <div>
              <input
                className="w-full h-9 bg-transparent border-b border-dashed border-orange-500 text-white text-lg font-sans  mb-6 outline-none placeholder:text-orange-500"
                id="email"
                name="email"
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <textarea
                className="w-full h-9 bg-transparent border-b border-dashed border-orange-500 text-white text-lg font-sans  mb-6 outline-none placeholder:text-orange-500"
                id="message"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                rows={4}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button className=" border-[1px] border-orange-500 text-white py-2 mx-14 rounded hover:bg-orange-600 transition duration-300" type="submit">Submit Now</button>
          </form>
        </div>
      </section>
      <section>
        <div>
          <h3 className="text-4xl font-bold text-black text-center mt-20">Find <span className='text-orange-500'>Us</span> On The <span className='text-orange-500'>Map</span></h3>
          <div className="flex justify-center mt-4 mb-10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509168!2d144.95373531531592!3d-37.81627997975161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11b0ef%3A0x5045675218ceed5!2sFlinders%20Street%20Station!5e0!3m2!1sen!2sau!4v1615589187060!5m2!1sen!2sau"
              width="800"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
