'use client'
import React, { useState } from 'react'
import { CustomButton } from './custom/CustomHTMLTags'
import Image from 'next/image'
import { IoMenu, IoClose } from "react-icons/io5"
import Link from 'next/link'
import Logo from './../favicon.ico'

const NavBar = () => {

    const [open, setOpen] = useState(false)

    const handleClickScroll = (value: string) => {
        const element = document.getElementById(value)
        // console.log(element)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
        setOpen(false)
    }

    const openResume = () => {
        
    }
    
    return (
        <div className='shadow-sm border-b-2 fixed w-full top-0 left-0'>
            <div className='md:flex items-center justify-between bg-white py-6 md:px-10 px-7'>
                <Link href='/' className='font-bold rounded-full text-2xl flex items-center justify-center gap-2'>
                    <Image
                        data-cursor={true}
                        src={Logo}
                        alt='Logo'
                        height={45} width={45}
                        className='rounded-full' />
                </Link>

                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 md:hidden'>
                    {open ? <IoClose /> : <IoMenu />}
                </div>

                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
                    <CustomButton onClick={handleClickScroll.bind(this, 'home')} className='md:ml-8 md:my-0 my-7'>Home</CustomButton>
                    <CustomButton onClick={handleClickScroll.bind(this, 'education')} className='md:ml-8 md:my-0 my-7'>Education</CustomButton>
                    <CustomButton onClick={handleClickScroll.bind(this, 'skills')} className='md:ml-8 md:my-0 my-7'>Skills</CustomButton>
                    <CustomButton onClick={handleClickScroll.bind(this, 'projects')} className='md:ml-8 md:my-0 my-7'>Projects</CustomButton>
                    <CustomButton onClick={handleClickScroll.bind(this, 'contact')} className='md:ml-8 md:my-0 my-7'>Contact</CustomButton>
                    <CustomButton onClick={() => openResume()} className='md:ml-16 md:my-0 my-7'>Resume</CustomButton>
                </ul>
            </div>
        </div>
    )
}

export default NavBar