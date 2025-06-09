import React from 'react'
import DashBoard from './pages/DashBoard'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from './pages/Home'
import Environments from './pages/Environments'
import Analytics from './pages/Analytics'
import AboutUs from './pages/AboutUs'
const App = () => {
  return (
    <main>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/environments' element={<Environments/>}/>
          <Route path='/dashboard' element={<DashBoard/>}/>
          <Route path='/about' element={<AboutUs/>}/>
           <Route path='/analytics/:id' element={<Analytics/>}/>
        </Routes>
      </Router>
    </main>
  )
}

export default App
