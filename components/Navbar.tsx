import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";
import Link from "next/link";
export function Navbar() {
    const [mobileScreen, setMobileScreen] = useState(false);

    function handleClick() {
        console.log("calling", mobileScreen)
        setMobileScreen(!mobileScreen);
    }

    function handleCloseMobileMenu(event: any) {
        event.stopPropagation(); // Prevent click event from propagating
        setMobileScreen(false);
    }



    return (
        <div suppressHydrationWarning={true} className="container mx-auto px-4 py-4 md:py-8">
            <div className="flex justify-between">
                <Link href={"/"}><div className="flex gap-2 items-center ">
                    <div className="bg-my-yellow h-6 w-6 rounded-full"></div>
                    <div className="flex items-center space-x-2">
                        <div className='font-bold text-base md:text-xl lg:text-2xl '>Ankita Chaudhary</div>
                        <div className="font-extralight text-sm mt-1">Web developer</div>
                    </div>

                </div>
                </Link>

                <div>

                    <button onClick={() => { handleClick() }} className="w-6 h-6 flex hover:cursor-pointer md:hidden">
                        <AiOutlineMenu className="w-full h-full" />
                    </button>
                    <ul className=" space-x-2 hidden md:flex tracking-wider">
                        <Link href={"/resume"}>    <li className=" px-2 py-1 font-light hover:text-yellow-900  ">Resume</li></Link>
                        <p className="border-r-black border-r h-6 my-auto"></p>
                        <Link href={"/projects"}>     <li className="px-2 py-1 font-light  hover:text-yellow-900  ">Projects</li></Link>
                        <p className="border-r-black border-r h-6 my-auto"></p>

                        <Link href={"/contact"}>      <li className=" px-2 py-1 font-light  hover:text-yellow-900 ">Contact</li></Link>
                    </ul>
                </div>
            </div>
            <div className={`${mobileScreen === true ? "fixed overflow-hidden inset-0 z-50 bg-slate-100" : "hidden"} md:hidden`} onClick={handleCloseMobileMenu}>
                <ImCancelCircle className="w-6 h-6 float-right hover:cursor-pointer mt-4 mr-2" />
                <div className="flex justify-center mt-10">
                    <ul className="flex flex-col justify-center space-y-3 tracking-wider">
                        <Link href={"/resume"}> <li className=" hover:text-yellow-900 ">Resume</li></Link>
                        <Link href={"/projects"}> <li className=" hover:text-yellow-900 ">Projects</li></Link>
                        <Link href={"/contact"}> <li className=" hover:text-yellow-900 ">Contact</li></Link>

                    </ul>
                </div>
            </div>

        </div>
    );
}
