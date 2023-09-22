import React, { useEffect, useState } from 'react';
import Cart from './Cart/cart';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Availablemeals from './Meals/Availablemeals';
const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    //navbar scroll changeBackground function
    const changeBackground = () => {
        // console.log(window.scrollY)
        if (window.scrollY >= 10) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    useEffect(() => {
        changeBackground();
        // adding the event when scroll change background
        window.addEventListener("scroll", changeBackground);
    }, []);

    return (
        <nav className={navbar ? 'flex justify-between items-center fixed bg-[#ffffffb8] w-full py-2 px-4' : 'flex justify-between items-center fixed bg-[#ffffffe0] w-full py-1 px-4'}>
            <div className='w-1/5'>
                Store
            </div>
            <div className='flex justify-between w-full'>
                <BrowserRouter>

                    <Routes>
                        {/* <Route path="/" element={<Availablemeals />}> */}
                            {/* <Route index element={<Availablemeals />} /> */}
                            {/* <Route path="blogs" element={<Availablemeals />} /> */}
                            {/* <Route path="contact" element={<Availablemeals />} /> */}
                            {/* <Route path="*" element={<Availablemeals />} /> */}
                        {/* </Route> */}
                    </Routes>
                </BrowserRouter>

                <div>
                    AboutUs
                </div>
                <div>
                    Contact
                </div>  <div>
                    More
                </div>
            </div>
            <div className='w-1/5 flex justify-end'>

                <Cart />
            </div>
        </nav>
    );
}

export default Navbar;
