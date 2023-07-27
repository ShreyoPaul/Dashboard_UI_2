import React from 'react'
import a1 from "../public/assets/png/a1.png"
import a2 from "../public/assets/png/a2.png"
import a3 from "../public/assets/png/a3.png"
import a4 from "../public/assets/png/a4.png"
import a5 from "../public/assets/png/a5.png"
import Image from 'next/image'

const Navbar = () => {
    return (
        <div className='bg-[#111827] text-white px-4'>
            <nav className='flex flex-row justify-between py-3'>
                <ul className='flex flex-row justify-center items-center'>
                    <li className=' flex flex-row px-2 justify-center items-center'>
                        <span className='pr-1'>
                            <Image src={a1} alt='img' width={18} height={18} />
                        </span>
                        Home
                    </li>
                    <li className=' flex flex-row px-2 justify-center items-center'>
                        <span className='pr-1'>
                            <Image src={a2} alt='img' width={18} height={18} />
                        </span>
                        Contents
                    </li>
                    <li className=' flex flex-row px-2 justify-center items-center'>
                        <span className='pr-1'>
                            <Image src={a3} alt='img' width={18} height={18} />
                        </span>
                        Catagories
                    </li>
                    <li className=' flex flex-row px-2 justify-center items-center'>
                        <span className='pr-1'>
                            <Image src={a4} alt='img' width={18} height={18} />
                        </span>
                        Settings
                    </li>
                </ul>
                <div className='flex flex-row justify-center items-center bg-[#FFFFFF] text-[#111827] rounded-full p-1  '>
                    <div>
                    <Image src={a5} alt='img' width={30} height={30} />
                    </div>
                    <div className=' sm:flex hidden text-[14px]  px-1'>İsmail İhsan Bülbül</div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar