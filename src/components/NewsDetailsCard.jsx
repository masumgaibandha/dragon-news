import React from 'react'
import { Link } from 'react-router'

const NewsDetailsCard = ({news}) => {
  // console.log(news)
  return (
    <div className='space-y-5'>
      <img src={news.image_url} className='w-full h-[450px] object-cover' alt="" />
      <h2 className='text-2xl'>{news.title}</h2>
      <p>{news.details}</p>
      <Link to={`/category/${news.category_id}`} className='btn btn-secondary'><img src="https://i.ibb.co/BHNyZCwY/Vector-2.png" alt="" /> All news in this category</Link>
    </div>
  )
}

export default NewsDetailsCard