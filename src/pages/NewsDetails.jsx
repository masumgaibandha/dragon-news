import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import RightAside from "../components/HomeLayOut/RightAside";
import NewsDetailsCard from "../components/NewsDetailsCard";
import { useLoaderData, useParams } from "react-router";

const NewsDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [news, setNews] = useState({});
  // console.log(data, id, news);

    useEffect(() =>{
      const newsDetails = data.find((singleNews) => singleNews.id ==id);
      setNews(newsDetails);
    }, [data, id])

  return (
    <div>
      <header className="py-5">
        <Header></Header>
        <main className="container mx-auto grid grid-cols-12 gap-5 py-5">
          <section className="col-span-9">
            <h1 className="font-bold mb-5">News Details</h1>
            <NewsDetailsCard news={news}></NewsDetailsCard>
          </section>
          <aside className="col-span-3">
            <RightAside></RightAside>
          </aside>
        </main>
      </header>
    </div>
  );
};

export default NewsDetails;
