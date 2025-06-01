'use client'

import { useEffect, useState } from "react";
import { Business, FeaturedStory, Hero, JustIn, MoreNews, QuickLinks, TheLatest, WhatToRead } from "./HomeHelp"
import { fetchNews, NewsTypes } from "@/utils/fetchNews";

export const HomeComp = () => {
  const [news, setNews] = useState<NewsTypes[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadNews = async () => {
      try {
        const data = await fetchNews();
        setNews(data);
      } catch (error) {
        console.error("Error loading news:", error);
      } finally {
        setLoading(false);
      }
    };
    loadNews();
  }, []);

  if (loading) {
    return <div className="px-2 md:px-10 h-fit border-red-500 max-w-[1400px] mx-auto">Loading...</div>;
  }

  if (!news.length) {
    return <div className="px-2 md:px-10 h-fit border-red-500 max-w-[1400px] mx-auto">No news found</div>;
  }

  return (
    <div className="px-2 md:px-10 h-fit border-red-500 max-w-[1400px] mx-auto">
      <Hero news={news} />
      <FeaturedStory news={news} />
      <QuickLinks />
      <JustIn news={news[0]} />
      <Business />
      <WhatToRead />
      <TheLatest news={news.slice(13, 18)} />
      <MoreNews news={news.slice(18)} />
    </div>
  )
}