import React from 'react'
import Header from './components/Header/header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'


export default function Layout() {
  return (
   <>
   <Header></Header>
   <Outlet/>
   <Footer></Footer>
   </>
  )
}
