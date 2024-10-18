import React from 'react'

const Navbar = () => {
    return (
        <nav className="shadow-lg sticky top-0 z-50  px-4 bg-white">
            <div className="container mx-auto flex justify-between items-center py-4 ">
                <div className="text-base lg:text-xl font-bold text-center">
                    <a href="#">Techbrain Network</a>
                    <p>Aerospace</p>
                </div>

                <div>
                    <ul className="hidden lg:flex gap-6">
                        <li><a className="hover:border-b-2 border-blue-600 font-semibold " href="#">Home</a></li>
                        <li><a className="hover:border-b-2 border-blue-600 font-semibold " href="#">About</a></li>
                        <li><a className="hover:border-b-2 border-blue-600 font-semibold " href="#">Products</a></li>
                        <li><a className="hover:border-b-2 border-blue-600 font-semibold " href="#">Blog</a></li>
                        <li><a className="hover:border-b-2 border-blue-600 font-semibold " href="#">Contact</a></li>

                    </ul>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 lg:hidden">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
            </div>
        </nav>
    )
}

export default Navbar