import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import toast, { Toaster } from "react-hot-toast";
import AboutImg from "./about.png"
function About() {
  return (
    <div>
      <Navbar/>
      <h1>About Page</h1>
      <img 
      src={AboutImg}
      alt='about-image'
      className='image'
      />
     
     <div>
        <button
        className="btn" 
        onClick={()=>{
          toast.loading("loading...")
          }}>
          loading
        </button>

        <button 
        className="btn"
        onClick={()=>{
          toast.dismiss()
          toast.success("loaded successfully...")
          }}>
            success
        </button>

        <button
        className="btn"
        onClick={()=>{
          toast.dismiss()
          toast.error("loding error...")
          }}>
          error
        </button>
      </div>
      <Footer />
      <Toaster/>
    </div>
  )
}

export default About