'use client'

import { useEffect, useState } from "react";
import { Business, FeaturedStory, Hero, JustIn, MoreNews, QuickLinks, TheLatest, WhatToRead } from "./HomeHelp"
import { fetchNews, NewsTypes } from "@/utils/fetchNews";
import { JustInSkeleton, MoreNewsSkeleton } from "../NewsSkeletons";

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

  return (
    <div className="px-2 md:px-10 h-fit  max-w-[1400px] mx-auto">
      <Hero news={news} loading={loading} />
      <FeaturedStory news={news} loading={loading} />
      <QuickLinks />
      {loading || !news.length ? (
        <JustInSkeleton />
      ) : (
        <JustIn news={news[0]} />
      )}
      <Business />
      <WhatToRead />

      {loading || news.length < 18 ? (
        <MoreNewsSkeleton />
      ) : (
        <TheLatest news={news.slice(13, 18)} />
      )}


      {loading || news.length <= 18 ? (
        <MoreNewsSkeleton />
      ) : (
        <MoreNews news={news.slice(18)} />

      )}
    </div>
  )
}