import React from 'react';
import userLogo from "../../../../public/assets/user.png";
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='flex justify-between'>
            <div className='w-4 h-4'>

            </div>
            <div className='flex items-center gap-5'>
                <NavLink className="text-[#706F6F] text-lg" to={"/"}>Home</NavLink>
                <NavLink className="text-[#706F6F] text-lg" to={"/about"}>About</NavLink>
                <NavLink className="text-[#706F6F] text-lg" to={"/career"}>Career</NavLink>
            </div>
            <div className='flex items-center gap-[9px]'>
                <img  src={userLogo} alt="" />
                <Link to={"/login"}><button className='font-semibold text-white text-xl bg-[#403F3F] px-[42px] py-[8px]'>Login</button></Link>
            </div>
        </div>
    );
};

export default NavBar;