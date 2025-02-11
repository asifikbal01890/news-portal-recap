import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DetailsCard = () => {
   const [newsInfo, setNewsInfo] = useState([])
   const params = useParams();
   console.log(newsInfo);
   
   
       useEffect(() => {
           fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
               .then(res => res.json())
               .then(data => setNewsInfo(data.data[0])
               )
       }, [])
    return (
        <div>
            <img src={newsInfo.image_url} alt="" />
        </div>
    );
};

export default DetailsCard;