import { Outlet } from 'react-router-dom'
// import { lazy } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
// const Navbar = lazy(()=>import('./Navbar'));
// const Footer = lazy(()=>import('./Footer'));

export default function Layout() {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}
