import Image from 'next/image'
import React, { useState } from 'react'
import plus from '../public/assets/png/plus.png'
import settings from '../public/assets/png/settings.png'
import shopping from '../public/assets/png/shopping.png'
import shop from '../public/assets/png/shop.png'
import users from '../public/assets/png/users.png'
import list from '../public/assets/png/list.png'
import srch from '../public/assets/png/search.png'
import left from '../public/assets/png/left_b.png'
import right from '../public/assets/png/right_b.png'
import flag1 from '../public/assets/png/flag1.png'
import flag2 from '../public/assets/png/flag2.png'
import { BiInfoCircle, BiSave } from 'react-icons/bi'
import {FiMenu} from 'react-icons/fi'
import SideBar from './SideBar'

const Dashboard = () => {
    const [search, setSearch] = useState("")

    const tableData = [
        {
            h1: "Etiam purus in",
            h2: "Curabitur donec duis",
            h3: "Morbi pharetra, accumsan",
            bg: 1
        },
        {
            h1: "Duis eget habitant",
            h2: "At amet odio",
            h3: "Commodo eget scelerisque",
            bg: 0
        },
        {
            h1: "Aliquam velit lacus",
            h2: "Pellentesque egestas placerat",
            h3: "Tortor habitant sit",
            bg: 1
        },
        {
            h1: "Fermentum scelerisque ultricies",
            h2: "Morbi sagittis nulla",
            h3: "Quam semper quis",
            bg: 0
        },
        {
            h1: "Integer semper pellentesque",
            h2: "Neque turpis enim",
            h3: "Egestas non sociis",
            bg: 1
        },
        {
            h1: "Parturient at id",
            h2: "Sem neque, mattis",
            h3: "Pellentesque facilisis massa",
            bg: 0
        },
        {
            h1: "Amet, pretium eget",
            h2: "In ipsum volutpat",
            h3: "Ut feugiat egestas",
            bg: 1
        },
        {
            h1: "Risus consequat sollicitudin",
            h2: "Adipiscing odio nulla",
            h3: "Pharetra id sit",
            bg: 0
        },
        {
            h1: "Risus consequat sollicitudin",
            h2: "Adipiscing odio nulla",
            h3: "Pharetra id sit",
            bg: 1
        },
    ]

    const [form3, setForm3] = useState({
        l1: "",
        l2: "",
        l3: "",
        l4: "",
        l5: "",
        l6: "",
        l7: ""
    })

    const [form4, setForm4] = useState({
        l1: "",
        l2: "",
        l3: "",
        l4: "",
        l5: ""
    })

    const [form5, setForm5] = useState({
        l1: "",
        l2: "",
        l3: ""
    })

    const changeHandle1 = (e) => {
        setForm3({ ...form3, [e.target.name]: e.target.value })
    }

    const changeHandle2 = (e) => {
        setForm4({ ...form4, [e.target.name]: e.target.value })
    }

    const changeHandle3 = (e) => {
        setForm4({ ...form5, [e.target.name]: e.target.value })
    }

    const [toggle, setToggle] = useState(false)

    return (
        <div className=' text-[#262626] w-full'>
            <button className='p-3 absolute top-[100px] sm:hidden flex rounded-full w-12 h-12 bg-black text-white  focus:bg-gray-300 justify-center items-center' onClick={()=>{
                setToggle(!toggle)
            }}>
                <FiMenu />
            </button>
            {
                toggle ? <div className='sm:hidden flex'>
                <SideBar />
            </div> : null
            }

            {/* //DASHBOARD HEADER---- */}
            <div className='lg:px-8 px-3 py-3 bg-white flex flex-row  justify-between w-full items-center'>
                <div className='flex flex-row justify-start items-center'>
                    <span className='font-bold lg:text-[22px] md:text-[18px] text-[15px]'>Add new post</span>
                    <div className=' px-1 lg:px-4 flex flex-row md:text-[15px] text-[12px] '>
                        <div className='flex flex-row justify-center items-center px-2 '>
                            <Image src={plus} alt='img' width={18} height={18} />
                            <div className='pl-1'>Add Content</div>
                        </div>
                        <div className='flex flex-row justify-center items-center px-2 '>
                            <Image src={settings} alt='img' width={18} height={18} />
                            <div className='pl-1'>Settings</div>
                        </div>
                    </div>
                </div>
                <div className='text-[13px]  flex justify-center items-center'>
                    <input type="text" name="" id=""
                        className='p-2 rounded-[4px] border border-[#D4D4D4] lg:min-w-[300px] w-[150px]'
                        value={search}
                        placeholder='Search content'
                        onChange={(e) => {
                            setSearch(e.target.value)
                        }} />
                    <Image src={srch} alt='img' width={18} height={18} className='relative right-8' />
                </div>
            </div>

            {/* //DASHBOARD DATA 1---- */}
            <div className='flex flex-row w-full flex-wrap  justify-center items-center '>
                <div className='flex flex-row justify-start items-center bg-white my-6 mx-3 p-4 py-3 min-w-[255px] rounded-md'>
                    <div className='p-1'>
                        <Image src={shopping} alt='img' width={45} height={45} />
                    </div>
                    <div className=' p-2'>
                        <div className='text-[14px] '>Total Sales</div>
                        <div className='text-[25px] font-bold'>$2,456</div>
                    </div>
                </div>
                <div className='flex flex-row justify-start items-center bg-white my-6 mx-3 p-4 py-3 min-w-[255px] rounded-md'>
                    <div className='p-1'>
                        <Image src={shop} alt='img' width={45} height={45} />
                    </div>
                    <div className=' p-2'>
                        <div className='text-[14px] '>Total Expenses</div>
                        <div className='text-[25px] font-bold'>$3,326</div>
                    </div>
                </div>
                <div className='flex flex-row justify-start items-center bg-white my-6 mx-3 p-4 py-3 min-w-[255px] rounded-md'>
                    <div className='p-1'>
                        <Image src={users} alt='img' width={45} height={45} />
                    </div>
                    <div className=' p-2'>
                        <div className='text-[14px] '>Total Visitors</div>
                        <div className='text-[25px] font-bold'>$5,325</div>
                    </div>
                </div>
                <div className='flex flex-row justify-start items-center bg-white my-6 mx-3 p-4 py-3 min-w-[255px] rounded-md'>
                    <div className='p-1'>
                        <Image src={list} alt='img' width={45} height={45} />
                    </div>
                    <div className=' p-2'>
                        <div className='text-[14px] '>Total Orders</div>
                        <div className='text-[25px] font-bold'>$1,326</div>
                    </div>
                </div>
            </div>

            {/* //DASHBOARD TABLE 2---- */}
            <div className='w-full px-8'>
                <div className=' flex flex-col rounded-md  p-6 bg-white'>
                    <div className='text-[20px] font-bold'>Form title</div>
                    <div className='text-[16px] py-1'>Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim.</div>
                    <div className='text-[16px] flex flex-row p-3 my-3 rounded-md bg-[#FEF2F2] text-[#7F1D1D] border items-center border-[#F87171] '>
                        <div className='text-[20px] pr-1'><BiInfoCircle /></div>
                        <div className='px-1'>
                            Senectus malesuada suspendisse bibendum elit amet vitae.
                        </div>
                    </div>

                    <div className=" my-3 overflow-x-auto rounded-md flex flex-col flex-wrap justify-center items-center w-auto ">
                        <table className=" w-full text-sm text-left text-gray-500 border-collapse border rounded-md ">
                            <thead className="text-xs text-gray-700 bg-[#E6E6E6] rounded-md">
                                <tr>
                                    <th scope="col" className="px-4 py-3 lg:px-5 lg:py-4 border border-[#E5E5E5] border-1">
                                        Table Title
                                    </th>
                                    <th scope="col" className="px-4 py-3 lg:px-5 lg:py-4 border border-[#E5E5E5] border-1">
                                        Table Title
                                    </th>
                                    <th scope="col" className="px-4 py-3 lg:px-5 lg:py-4 border border-[#E5E5E5] border-1">
                                        Table Title
                                    </th>
                                    <th scope="col" className="px-4 py-3 lg:px-5 lg:py-4 border border-[#E5E5E5] border-1">
                                        Table Title
                                    </th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    tableData.map((data, key) => {
                                        if (data.bg) {

                                            return (
                                                <tr key={key} className="bg-white border-b text-black text-[13px] md:text-[12px] lg:text-[14px] ">
                                                    <td scope="row" className="px-4 py-3 lg:px-5 lg:py-4 border border-[#E5E5E5] border-1  text-black  ">
                                                        {data.h1}
                                                    </td>
                                                    <td className="px-4 py-3 lg:px-5 lg:py-4 border border-[#E5E5E5] border-1">
                                                        {data.h2}
                                                    </td>
                                                    <td className="px-4 py-3 lg:px-5 lg:py-4 border border-[#E5E5E5] border-1">
                                                        {data.h3}
                                                    </td>
                                                    <td className="px-4 py-3 lg:px-5 lg:py-4 flex flex-row  sm:flex-col md:flex-row  items-center">
                                                        <button className=" mx-1  text-[16px] text-white bg-[#2E4DDD] flex lg:flex-row flex-row items-center justify-center p-1 px-2 rounded-sm sm:mb-1 mb-0 lg:mb-0">
                                                            <BiSave />
                                                            <div className='pl-1 text-[14px] '>Edit</div>
                                                        </button>
                                                        <button className=" mx-1  text-[16px] text-white bg-[#D97706] flex flex-row items-center justify-center p-1 px-2 rounded-sm">
                                                            <BiSave />
                                                            <div className='pl-1 text-[14px]'>Delete</div>
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        }
                                        else {
                                            return (
                                                <tr key={key} className="border border-[#E5E5E5] border-1-b text-black text-[13px] md:text-[12px] lg:text-[14px]  bg-[#F3F3F3]">
                                                    <td scope="row" className="px-4 py-3 lg:px-5 lg:py-4 border border-[#E5E5E5] border-1  text-black  ">
                                                        {data.h1}
                                                    </td>
                                                    <td className="px-4 py-3 lg:px-5 lg:py-4 border border-[#E5E5E5] border-1">
                                                        {data.h2}
                                                    </td>
                                                    <td className="px-4 py-3 lg:px-5 lg:py-4 border">
                                                        {data.h3}
                                                    </td>
                                                    <td className="px-4 py-3 lg:px-5 lg:py-4  flex flex-row sm:flex-col md:flex-row items-center">
                                                        <button className=" mx-1  text-[16px] text-white bg-[#2E4DDD] flex lg:flex-row flex-row items-center justify-center p-1 px-2 rounded-sm sm:mb-1 mb-0 lg:mb-0">
                                                            <BiSave />
                                                            <div className='pl-1 text-[14px] '>Edit</div>
                                                        </button>
                                                        <button className=" mx-1  text-[16px] text-white bg-[#D97706] flex flex-row items-center justify-center p-1 px-2 rounded-sm">
                                                            <BiSave />
                                                            <div className='pl-1 text-[14px]'>Delete</div>
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        }
                                    })
                                }




                            </tbody>
                        </table>
                    </div>

                    <div className='flex flex-row justify-center items-center mt-3'>
                        <button className='mx-1'>
                            <Image src={left} alt='img' width={15} height={15} />
                        </button>
                        <button className='p-2 border mx-1 rounded-md w-8 h-8 flex items-center justify-center focus:bg-[#2E4DDD] focus:text-white'>1</button>
                        <button className='p-2 border mx-1 rounded-md w-8 h-8 flex items-center justify-center focus:bg-[#2E4DDD] focus:text-white'>2</button>
                        <button className='p-2 border mx-1 rounded-md w-8 h-8 flex items-center justify-center focus:bg-[#2E4DDD] focus:text-white'>3</button>
                        <button className='p-2 border mx-1 rounded-md w-8 h-8 flex items-center justify-center focus:bg-[#2E4DDD] focus:text-white'>4</button>
                        <button className='p-2 border mx-1 rounded-md w-8 h-8 flex items-center justify-center focus:bg-[#2E4DDD] focus:text-white'>5</button>
                        <button className='mx-1'>
                            <Image src={right} alt='img' width={15} height={15} />
                        </button>
                    </div>

                </div>
            </div>

            {/* //DASHBOARD FORM 3---- */}
            <div className='w-full px-8 mt-8'>
                <div className=' flex flex-col  rounded-md  p-6 bg-white'>
                    <div className='text-[20px] font-bold'>Form title</div>
                    <div className='text-[16px] py-1'>Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim.</div>
                    <div>
                        <div className='Language my-3 flex flex-row justify-start items-start'>
                            <button className='p-1 text-[16px] mr-4 focus:bg-[#FDE68A] flex flex-row justify-center items-center rounded-md border'>
                                <Image src={flag1} alt='img' width={25} height={25} />
                                <div className=' pl-1'>English</div>
                            </button>
                            <button className='p-1 text-[16px] mr-4 focus:bg-[#FDE68A] flex flex-row justify-center items-center rounded-md border'>
                                <Image src={flag2} alt='img' width={25} height={25} />
                                <div className=' pl-1'>Turkish</div>
                            </button>
                        </div>

                        <div className='my-2'>
                            <div>Label Title</div>
                            <input className='w-full my-3 border p-2 outline-none px-3 rounded-[4px]'
                                placeholder='Placeholder content'
                                type="text" id="" value={form3.l1} name={"l1"} onChange={changeHandle1} />
                        </div>
                        <div className='my-2 w-full flex lg:flex-row flex-col lg:justify-center lg:items-center'>
                            <div className=' flx flex-1 mr-2'>
                                <div>Label Title</div>
                                <select onChange={changeHandle1} name='l2' value={form3.l2} className='w-full my-3 border p-2 outline-none px-3 pr-6 rounded-[4px]'>
                                    <option>Choose</option>
                                    <option>Choose1</option>
                                    <option>Choose2</option>
                                </select>
                            </div>
                            <div className=' flx flex-1 mr-2'>
                                <div>Label Title</div>
                                <input className='w-full my-3 border p-2 outline-none px-3 rounded-[4px]'
                                    placeholder='Placeholder content'
                                    type="text" id="" value={form3.l3} name={"l3"} onChange={changeHandle1} />
                            </div>
                            <div className=' flx flex-1'>
                                <div>Label Title</div>
                                <input className='w-full my-3 border p-2 outline-none px-3 rounded-[4px]'
                                    placeholder='Placeholder content'
                                    type="text" id="" value={form3.l4} name={"l4"} onChange={changeHandle1} />
                            </div>
                        </div>
                        <div className='my-2 w-full flex lg:flex-row flex-col lg:justify-center lg:items-center'>

                            <div className=' flx flex-1 mr-2'>
                                <div>Label Title</div>
                                <input className='w-full my-3 border p-2 outline-none px-3 rounded-[4px]'
                                    placeholder='Placeholder content'
                                    type="text" id="" value={form3.l5} name={"l5"} onChange={changeHandle1} />
                            </div>
                            <div className=' flx flex-1'>
                                <div>Label Title</div>
                                <input className='w-full my-3 border p-2 outline-none px-3 rounded-[4px]'
                                    placeholder='Placeholder content'
                                    type="text" id="" value={form3.l6} name={"l6"} onChange={changeHandle1} />
                            </div>
                        </div>
                        <div className='mt-2'>
                            <div>Label Title</div>
                            <textarea className='w-full h-[150px] mt-3 border p-2 outline-none px-3 rounded-[4px]'
                                placeholder='Placeholder content'
                                type="text" id="" value={form3.l7} name={"l7"} onChange={changeHandle1} style={{ resize: "none" }} />
                        </div>
                    </div>
                </div>
            </div>

            {/* //DASHBOARD FORM 4 & 5---- */}
            <div className='w-full px-8 mt-8 flex lg:flex-row flex-col lg:items-start '>
                <div className=' flex flex-col mb-3 lg:mb-0 lg:mr-3 lg:w-[75%] w-full rounded-md  p-6 bg-white'>
                    <div className='text-[20px] font-bold'>Form title</div>
                    <div className='text-[16px] py-1'>Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim.</div>
                    <div>
                        <div className='my-2'>
                            <div>Label Title</div>
                            <input className='w-full my-3 border p-2 outline-none px-3 rounded-[4px]'
                                placeholder='Placeholder content'
                                type="text" id="" value={form4.l1} name={"l1"} onChange={changeHandle2} />
                        </div>
                        <div className=' flx flex-1 mr-2'>
                            <div>Label Title</div>
                            <select onChange={changeHandle2} name='l2' value={form4.l2} className='w-full my-3 border p-2 outline-none px-3 pr-6 rounded-[4px]'>
                                <option>Choose</option>
                                <option>Choose1</option>
                                <option>Choose2</option>
                            </select>
                        </div>
                        <div className='my-2 w-full flex lg:flex-row flex-col lg:justify-center lg:items-center'>

                            <div className=' flx flex-1 mr-2'>
                                <div>Label Title</div>
                                <input className='w-full my-3 border p-2 outline-none px-3 rounded-[4px]'
                                    placeholder='Placeholder content'
                                    type="text" id="" value={form4.l3} name={"l3"} onChange={changeHandle2} />
                            </div>
                            <div className=' flx flex-1'>
                                <div>Label Title</div>
                                <input className='w-full my-3 border p-2 outline-none px-3 rounded-[4px]'
                                    placeholder='Placeholder content'
                                    type="text" id="" value={form4.l4} name={"l4"} onChange={changeHandle2} />
                            </div>
                        </div>
                        <div className='mt-2'>
                            <div>Label Title</div>
                            <textarea className='w-full h-[150px] mt-3 border p-2 outline-none px-3 rounded-[4px]'
                                placeholder='Placeholder content'
                                type="text" id="" value={form4.l5} name={"l5"} onChange={changeHandle2} style={{ resize: "none" }} />
                        </div>
                    </div>

                </div>
                <div className=' flex h-auto flex-col  lg:ml-3 my-3 lg:my-0 rounded-md  p-6 bg-white'>
                    <div className='text-[20px] font-bold'>Form title</div>
                    <div>
                        <div className='my-2'>
                            <div>Label Title</div>
                            <input className='w-full my-3 border p-2 outline-none px-3 rounded-[4px]'
                                placeholder='Placeholder content'
                                type="text" id="" value={form5.l1} name={"l1"} onChange={changeHandle3} />
                        </div>
                        <div className=' flx flex-1 mr-2'>
                            <div>Label Title</div>
                            <select onChange={changeHandle3} name='l2' value={form5.l2} className='w-full my-3 border p-2 outline-none px-3 pr-6 rounded-[4px]'>
                                <option>Choose</option>
                                <option>Choose1</option>
                                <option>Choose2</option>
                            </select>
                        </div>
                        <div className='mt-2'>
                            <div>Label Title</div>
                            <textarea className='w-full h-[150px] mt-3 border p-2 outline-none px-3 rounded-[4px]'
                                placeholder='Placeholder content'
                                type="text" id="" value={form5.l3} name={"l3"} onChange={changeHandle3} style={{ resize: "none" }} />
                        </div>
                    </div>
                    <div className='w-full flex justify-center bg-[#2563EB] text-white p-2 rounded-md my-4'>
                        Button title
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Dashboard