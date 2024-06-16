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
                    <CustomButton onClick={handleClickScroll.bind(this, 'about')} className='md:ml-8 md:my-0 my-7'>About</CustomButton>
                    <CustomButton onClick={handleClickScroll.bind(this, 'projects')} className='md:ml-8 md:my-0 my-7'>Projects</CustomButton>
                    <CustomButton onClick={handleClickScroll.bind(this, 'contact')} className='md:ml-8 md:my-0 my-7'>Contact</CustomButton>
                    <CustomButton onClick={() => openResume()} className='md:ml-16 md:my-0 my-7'>Resume</CustomButton>
                </ul>
            </div>
        </div>


        // <div className='bg-[#6a6a6a94] relative m-3 rounded-[2px] flex flex-row px-4 py-6 max-[455px]:justify-center'>
        //     <div className='text-xl font-mono text-white w-[35%] max-[743px]:hidden'>
        //         <Image src='/../favicon.ico' alt='Neel Vaghasiya Logo' width={50} height={50}/>
        //     </div>
        //     <div className='flex flex-row gap-10 max-[743px]:gap-5 max-[455px]:gap-2'>
        //         <CustomButton className='text-white text-sm  max-[634px]:text-xs'>Home</CustomButton>
        //     <CustomButton onClick={handleClickScroll.bind(this, 'about')} className='text-[#BDBDBD] text-sm max-[634px]:text-xs'>About</CustomButton>
        //         <CustomButton onClick={handleClickScroll.bind(this, 'skills')} className='text-[#BDBDBD]  text-sm max-[634px]:text-xs'>Expertise</CustomButton>
        //         <CustomButton onClick={handleClickScroll.bind(this, 'projects')} className='text-[#BDBDBD]  text-sm max-[634px]:text-xs '>Projects</CustomButton>
        //         <CustomButton onClick={handleClickScroll.bind(this, 'contacts')} className='text-[#BDBDBD]   text-sm max-[634px]:text-xs'>Contacts</CustomButton>
        //     </div>
        // </div>
    )
}

export default NavBar