import DashboardPreview from "@/components/DashboardPreview"
import Features from "@/components/Features"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"
import WhyItMatters from "@/components/WhyItMatters"


const Home = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Features/>
      <DashboardPreview/>
      <WhyItMatters/>
      <Footer/>
    </main>
  )
}

export default Home
