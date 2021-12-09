import React from 'react'
import { Outlet } from 'react-router'
import Header from './Header'
import Footer from './Footer'

// Outlet son todos los componentes hijos de la ruta padre, dependiendo del Path.


export default function Layout() {
    return (
        <>
         <Header />   

            <Outlet />

         <Footer />
        </>
    )
}
