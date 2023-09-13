import React from 'react'
import Link from 'next/link'
import { AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle, AiOutlineCopyright, AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineTwitter } from "react-icons/ai"

const footer = () => {
  return (
    <div suppressHydrationWarning={true} className='  container py-8  mx-auto px-4'>
        <div className="text-black w-full h-full my-6 max-w-7xl border bg-slate-200" />
            <div className="space-y-4 md:flex md:justify-between md:items-center">
                <div className="leading-tight">
                    <h2 className="font-bold text-lg">Phone </h2>
                    <h3 className="font-light ">+91 90563-00043</h3>
                </div>
                <div className="leading-tight">
                    <h2 className="font-bold text-lg">Email </h2>
                    <h3 className="font-light ">ankitach4650@gmail.com</h3>
                </div>
                <div className="leading-tight">
                    <h2 className="font-bold text-lg">Follow me </h2>
                    <div className="flex gap-6">
                        <Link href="https://twitter.com/ankitach23"><AiOutlineTwitter className="w-8 h-10" /></Link>
                        <Link href="https://github.com/ankitach23"><AiOutlineGithub className="w-8 h-10" /></Link>
                        <Link href="https://www.linkedin.com/in/ankita-chaudhary-9a55201bb/"><AiOutlineLinkedin className="w-8 h-10" /></Link>
                        <Link href="https://www.instagram.com/ankitach_23/"><AiOutlineInstagram className="w-8 h-10" /></Link>
                    </div>
                </div>
                <div className="gap-2 flex items-center">
                <AiOutlineCopyright className="w-5 h-5"/>
                    <h3 className="font-light">2023 By Ankita Chaudhary.</h3>
                </div>
            </div>
      
    </div>
  )
}

export default footer
