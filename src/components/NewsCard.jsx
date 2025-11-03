import { useState } from "react";
import { FaRegBookmark, FaShareAlt, FaEye, FaStar } from "react-icons/fa";

export default function NewsCard({ news }) {
  const { total_view, author, thumbnail_url, details, title } = news;
  const [expanded, setExpanded] = useState(false);

  const date = new Date(author.published_date).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="card bg-base-100 shadow-md rounded-2xl overflow-hidden mb-6">
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h2 className="font-semibold text-sm">{author.name}</h2>
            <p className="text-xs text-gray-500">{date}</p>
          </div>
        </div>
        <div className="flex gap-3 text-gray-500 text-lg">
          <FaRegBookmark className="cursor-pointer hover:text-gray-700" />
          <FaShareAlt className="cursor-pointer hover:text-gray-700" />
        </div>
      </div>

      {/* Title */}
      <div className="px-4">
        <h3 className="text-lg md:text-xl font-bold text-gray-800 leading-tight mb-3">
          {title}
        </h3>
      </div>

      {/* Thumbnail */}
      <figure className="px-4">
        <img
          src={thumbnail_url}
          alt="news thumbnail"
          className="rounded-xl w-full object-cover"
        />
      </figure>

      {/* Body */}
      <div className="card-body">
        <p className="text-sm text-gray-700">
          {expanded ? details : details.slice(0, 200) + "..."}
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-orange-500 font-semibold hover:underline ml-1"
          >
            {expanded ? "Show Less" : "Read More"}
          </button>
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between border-t pt-3 mt-3 text-sm text-gray-600">
          <div className="flex items-center gap-1 text-orange-400">
            <FaStar />
            <span className="text-gray-700 font-medium">4.9</span>
          </div>
          <div className="flex items-center gap-1">
            <FaEye />
            <span>{total_view.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
