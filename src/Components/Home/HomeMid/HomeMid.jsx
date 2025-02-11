import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const HomeMid = () => {

    const data = useLoaderData()
    console.log(data.data);


    return (
        <div>
            <h2 className='text-xl font-semibold text-[#403F3F] mb-5'>All Category</h2>
            <div className='w-[558px]'>
                {
                    data?.data?.map(newsInfo => <NewsCard
                    key={newsInfo._id}
                    article={newsInfo}
                    ></NewsCard>)
                }
            </div>
        </div>
    );
};

export default HomeMid;