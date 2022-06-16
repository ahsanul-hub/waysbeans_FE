import React from 'react'
import Navbar from '../components/navbar'
import Contact from '../components/contact'
import Chat from '../components/chat'

export default function Complain () {
    return (
        <>
            <Navbar/>
            <div className="containerComplain">
                <Contact/>
                <Chat/>
            </div>
        </>
    )
}
