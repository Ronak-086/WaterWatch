import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import WaterBodies from '@/components/WaterBodies'
import { EnvironmentContextProvider } from '@/store/EnvironmentsStore'
import React from 'react'

const Environments = () => {
  return (
    <EnvironmentContextProvider>
    <main >
      <Navbar/>
      <WaterBodies/>
      <Footer/>
    </main>
    </EnvironmentContextProvider>
  )
}

export default Environments
