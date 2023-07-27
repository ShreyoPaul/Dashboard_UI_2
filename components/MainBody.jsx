import React from 'react'
import SideBar from './SideBar'
import Dashboard from './Dashboard'

const MainBody = () => {
  return (
    <div className='flex flex-row w-full bg-[#F8F8F8] '>
        <div className='w-[18%] hidden sm:flex'><SideBar /></div>
        <div className='w-full'><Dashboard/></div>
    </div>
  )
}

export default MainBody