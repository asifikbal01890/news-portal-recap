import React from 'react';
import theDaily from "../../../../public/assets/logo.png";
import moment from 'moment';

const TopBar = () => {

    const dayPick = moment().format("dddd, MMMM D, YYYY");

    return (
        <div className='mt-[50px]'>
            <img src={theDaily} alt=""/>
            <p className='mt-5 text-lg text-[#706F6F] text-center'>Journalism Without Fear or Favour</p>
            <p className='text-center font-medium text-xl mt-[10px]'>{dayPick}</p>
        </div>
    );
};

export default TopBar;