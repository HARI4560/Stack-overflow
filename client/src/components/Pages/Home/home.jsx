import React from 'react'
import LeftSidebar from '../../leftSidebar/LeftSidebar'
import RightSidebar from '../../rightSidebar/RightSidebar'
import HomeMainbar from '../../homeMainbar/HomeMainbar'
import '../../../App.css'

const home = () => {
  return (
    <div className='home-container-1'>
      <LeftSidebar />
      <div className='home-container-2'>
        <HomeMainbar />
        <RightSidebar />
      </div>
    </div>
  )
}

export default home