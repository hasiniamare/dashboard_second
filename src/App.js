import React from 'react'
import SideBar from './components/Sidebar/Sidebar'
import Navbar from './components/Navbar/Navbar'
import { MainDash } from './components/MainDash/MainDash'




export default function App() {
  return (
    <div className='App'>
      <SideBar/>
      <Navbar/>
      <MainDash/>
      
   
    </div>
  )
}