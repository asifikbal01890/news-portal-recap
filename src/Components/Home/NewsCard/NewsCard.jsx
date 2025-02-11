import React from "react";
import { Link } from "react-router-dom";

const NewsCard = ({ article }) => {
  return (
    <div className=" bg-base-100 shadow-xl border border-gray-200 p-4">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={article.author.img}
          alt={article.author.name}
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h3 className="font-semibold">{article.author.name}</h3>
          <p className="text-sm text-gray-500">
            {new Date(article.author.published_date).toDateString()}
          </p>
        </div>
      </div>
      <figure>
        <img
          src={article.image_url}
          alt="News Thumbnail"
          className="rounded-lg w-full h-48 object-cover"
        />
      </figure>
      <div className="card-body p-2">
        <h2 className="card-title text-lg font-bold">{article.title}</h2>
        <p className="text-sm text-gray-600">{article.details.substring(0, 150)}...</p>
        <div className="flex justify-between items-center mt-3">
          <span className="badge badge-primary">{article.rating.badge}</span>
          <span className="text-gray-500 text-sm">{article.total_view} views</span>
        </div>
        <div className="card-actions justify-end">
          <Link to={`/newsDetails/${article._id}`}><button className="btn btn-primary btn-sm">Read More</button></Link>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
