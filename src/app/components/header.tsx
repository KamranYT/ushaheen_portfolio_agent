"use client";
import Image from 'next/image';
import { TiThMenu } from "react-icons/ti";
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    Sheet,
    SheetPortal,
    SheetOverlay,
    SheetTrigger,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetFooter,
    SheetTitle,
    SheetDescription,
} from "@/components/ui/sheet"


const Header = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <header className='flex justify-between items-center bg-zinc-700 sticky top-0 z-10 max-w-screen-xl mx-auto'>
             <div className='flex items-center'>
                <Image src="/logo1.png" alt="Logo" width={50} height={50} className='md:mr-4 sm:ml-4 ml-4 md:flex' />
            </div>
            <div className='hidden sm:hidden md:flex'>
                <nav>
                    <ul className='space-x-10 text-lg font-medium text-white items-center mx-10 hidden md:flex'>
                        {['/', '/about', '/contact'].map((path) => (
                            <li key={path} className={` ${pathname === path ? 'bg-orange-500 text-white rounded-full px-2 py-1' : ''}`}>
                                <Link href={path}>
                                    {path === '/' ? 'Home' : path.substring(1).charAt(0).toUpperCase() + path.substring(2)}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
                <button className='btn text-white text-xl md:hidden mr-4'><TiThMenu /></button>
            </SheetTrigger>
            <SheetContent className="w-40 sm:w-56 bg-slate-50 rounded-s-xl">
                <SheetHeader>
                    <SheetTitle> <Image src="/logo1.png" alt="Logo" width={50} height={50} className='absolute left-4 top-1' /></SheetTitle>
                    <SheetDescription></SheetDescription>
                </SheetHeader>
                <nav>
                    <ul className='text-lg font-medium text-zinc-800 mt-10 '>
                        <li className='hover:underline decoration-orange-500'>
                            <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
                        </li>
                        {/* Add more links here */}
                        <li className='hover:underline decoration-orange-500'>
                            <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
                        </li>
                        <li className='hover:underline decoration-orange-500'>
                            <Link href="/service" onClick={() => setIsOpen(false)}>Service</Link>
                        </li>
                        <li className='hover:underline decoration-orange-500'>
                            <Link href="/resume" onClick={() => setIsOpen(false)}>Resume</Link>
                        </li>
                        <li className='hover:underline decoration-orange-500'>
                            <Link href="/project" onClick={() => setIsOpen(false)}>Project</Link>
                        </li>
                        <li className='hover:underline decoration-orange-500'>
                            <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
                        </li>
                    </ul>
                </nav>
                <SheetFooter>
                </SheetFooter>
            </SheetContent>
        </Sheet>
        </header>
    );
};

export default Header;

                   

