import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const HomeLeft = () => {
    const [category, setCategory] = useState([])

    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/news/categories')
            .then(res => res.json())
            .then(data => setCategory(data.data.news_category)
            )
    }, [])

    return (
        <div>
            <h2 className='text-xl font-semibold text-[#403F3F] mb-5'>All Category</h2>
            <div className='flex flex-col'>
                {
                    category?.map(cate => <NavLink to={`${cate.category_id}`} className={`"font-medium text-[#9F9F9F] text-xl  py-[17px] pl-[50px] rounded-[5px]`}>{cate.category_name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default HomeLeft;