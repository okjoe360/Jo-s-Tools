import React from 'react'
import { Outlet, Link } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = () => {
  return (
        <main className='bg-body-secondary' style={{height:"100vh"}}>
            <Header />
            <div className='mb-3'>
                <Outlet />
            </div>
            <div className='my-3'>&nbsp;</div>
            <Footer />
        </main>
  )
}

export default Layout