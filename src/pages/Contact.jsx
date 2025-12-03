import React from 'react'
import ContactLeft from './ContactLeft'
import ContactRight from './ContactRight'
import Footer from './Footer.jsx'
import AboutNavbar from './AboutNavbar.jsx'

const Contact = () => {
    return (
        <div className="min-h-screen w-full bg-[#020617] relative">
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `radial-gradient(circle 500px at 50% 200px, #3e3e3e, transparent)`,
                }}
            />
            <div className='z-100 relative'>
                <AboutNavbar />
                <div className="m-2 flex flex-wrap md:flex-nowrap items-center justify-center mt-40">
                    <ContactLeft />
                    <ContactRight />
                </div>
                <Footer />
            </div>
        </div>

    )
}

export default Contact
