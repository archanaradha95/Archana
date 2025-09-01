import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Technologies from './Components/Technologies'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Experience from './Components/Experience'

function App() {
  

  return (
    <div className="overflow-x-hidden text-stone-300 antialiased">

      {/* Background */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-black">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
      </div>

      
      <div className="relative z-10 mx-auto px-8">
          <Navbar/>
          <Hero/>
          <Technologies/>
          <Projects/>
          <Experience/>
          <Contact/>
        </div>

      </div>
    
  )
}

export default App
