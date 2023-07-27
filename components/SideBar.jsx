import React from 'react'
import plus from '../public/assets/png/plus.png'
import dashboard from '../public/assets/png/dashboard.png'
import up from '../public/assets/png/up.png'
import down from '../public/assets/png/down.png'
import Image from 'next/image'
import { useState } from 'react'

const Accordion = ({name}) => {
    const [toggle, setToggle] = useState(true)
    const handleAccordian = () => {
        setToggle(!toggle)
        console.log(toggle)

    }
    return (
        <div className="accordion-item text-white text-[14px] md:px-6 px-4 py-4 border-b border-black ">
            <div className="accordion-header">
                <button className="accordion-button collapsed flex flex-row justify-between w-full items-center" type="button" data-bs-toggle="collapse" aria-expanded="false" onClick={handleAccordian}>
                    <span className='flex flex-row justify-center items-center'>
                        <Image src={dashboard} alt='img' width={18} height={18} />
                        <span className="h4 pl-2 text-capitalize ">
                            {name}
                        </span>
                    </span>
                    <span className='hidden lg:flex'>
                        {
                            toggle ? <Image src={down} alt='img' width={18} height={18} /> : <Image src={up} alt='img' width={18} height={18} />
                        }
                    </span>
                </button>
            </div>
            <ul className={`accordion-collapse py-1 md:px-7 px-3 md:text-[13px] text-[12px] ${toggle ? "hidden" : ""} text-white`} data-bs-parent="#accordionExample">
                <li className='p-1'>Commarce</li>
                <li className='p-1'>Analytics</li>
                <li className='p-1'>Crypto</li>
                <li className='p-1'>Helpdesk</li>
                <li className='p-1'>Monitoring</li>
                <li className='p-1'>Fitness</li>
            </ul>
        </div>
    )
}

const SideBar = () => {
    return (
        <div className='flex flex-col bg-[#262626] h-full w-full text-white '>
            <div className='px-6 py-4 '>
                <div className='flex flex-row justify-start items-center rounded-md p-3 bg-[#E5E5E5] text-['>
                    <Image src={plus} alt='img' width={18} height={18} />
                    <div className='text-[#171717] font-semibold lg:text-[16px] text-[13px] pl-1'> ADD ITEMS</div>
                </div>
            </div>
            <div className=' bg-black h-[0.3px] ' />
            <div className=' flex flex-col justify-start'>
                <Accordion name={"Dashboard"} />
                <Accordion name={"Application"} />
                <Accordion name={"Elements"} />
                <Accordion name={"Forms"} />
                <Accordion name={"Plugins"} />
                <Accordion name={"Elements"} />
                <Accordion name={"Datagrids"} />
                <Accordion name={"Settings"} />
            </div>
        </div>
    )
}

export default SideBar