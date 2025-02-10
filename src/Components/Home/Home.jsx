import React from 'react';
import TopBar from '../Shared/TopBar/TopBar';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';
import NavBar from '../Shared/NavBar/NavBar';

const Home = () => {
    return (
        <div className='max-w-[1140px] mx-auto'>
           <div className='flex justify-center'> 
           <TopBar></TopBar>
           </div>
           <div className='flex gap-5 items-center bg-[#F3F3F3] p-4 mt-[30px]'>
            <p className='text-xl font-medium text-white bg-[#D72050] px-6 py-[9px]'>Latest</p>
            <Marquee pauseOnHover={true} speed={100}>
                <Link className='ml-6' to={'/'}>Match Highlights: Germany vs Spain — as it happened </Link>
                <Link className='ml-6' to={'/'}>Match Highlights: Germany vs Spain — as it happened </Link>
                <Link className='ml-6' to={'/'}>Match Highlights: Germany vs Spain — as it happened </Link>
                <Link className='ml-6' to={'/'}>Match Highlights: Germany vs Spain — as it happened </Link>
                <Link className='ml-6' to={'/'}>Match Highlights: Germany vs Spain — as it happened </Link>
            </Marquee>
           
           </div>
           <div className='mt-[21px]'>
                <NavBar></NavBar>
            </div>
        </div>
    );
};

export default Home;