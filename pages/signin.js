import React, { useState} from 'react'
import Image from 'next/image'
import signin from '@/public/assets/png/signin.png'

const Signin = () => {
    const [form, setForm] = useState({
        l1: "",
        l2: ""
    })

    const changeHandle = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    return (
        <div className='bg-[#F5F5F5] h-[100vh] pt-[80px] px-8 md:px-0'>
            <div className='flex md:flex-row flex-col  bg-white w-auto md:w-[750px] h-[500px] relative mx-auto  rounded-md'>
                <div className='md:flex hidden flex-1'>
                    <Image src={signin} className='rounded-tl-md rounded-bl-md' alt='img' width={450} height={500} />
                </div>
                <div className='flex flex-1 justify-start p-8 px-10 w-full  flex-col'>
                    <div className='text-[22px] pb-1'>Login</div>
                    <div className='text-[14px] pb-1mb-1'>Donec tortor quam at duis tortor.</div>

                    <div className=' text-[14px]'>
                        <div>Email</div>
                        <input className='w-full my-2 border p-2 outline-none px-3 rounded-[4px]'
                            placeholder='Placeholder content'
                            type="text" id="" value={form.l1} name={"l1"} onChange={changeHandle} />
                    </div>
                    <div className=' text-[14px]'>
                        <div>Password</div>
                        <input className='w-full my-2 border p-2 outline-none px-3 rounded-[4px]'
                            placeholder='Placeholder content'
                            type="text" id="" value={form.l2} name={"l2"} onChange={changeHandle} />
                    </div>
                    <div className='text-[13px] text-right font-semibold mb-4'>Forgot password?</div>
                    <div className='w-full bg-[#2563EB] cursor-pointer text-white rounded-md p-3 flex justify-center items-center'>
                        Login
                    </div>
                    <div className='bg-black border mt-14 '/>
                    <div className=' text-center relative top-[-15px] left-[48%] bg-white w-6 flex justify-center'>or</div>
                    <div className='w-full bg-[#FFFFFF] mt-1  cursor-pointer text-[#525252] border border-[#525252] rounded-md p-3 flex justify-center items-center'>
                        Regster now
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin