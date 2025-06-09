import DashboardGraphs from '@/components/DashBoardGraphs'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const DashBoard = () => {
  return (
    <div>
      <Navbar/>
        <DashboardGraphs/>
      <Footer/>
    </div>
  )
}

export default DashBoard
