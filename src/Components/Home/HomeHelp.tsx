'use client'

import { CardA, CardB, SmallCard } from "@/utils/Helper";
import Link from "next/link";
import "react-loading-skeleton/dist/skeleton.css";
import { NavLinks } from "../NavComp/NavFucn";
import Image from "next/image";
import { useEffect, useState } from "react";
import { fetchBreakingNews, fetchBusinessNews, NewsTypes } from "@/utils/fetchNews";

interface MoreNewsProps {
  news: NewsTypes;
}

interface NewsT {
  news: NewsTypes[];
}

export const Hero = ({ news }: NewsT) => {
  return (
    <div className="h-fit gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1.2fr_2fr_1fr]">
      {/* Left section */}
      <div>
        {news && news.length > 0 ? (
          news?.slice(0, 3).map((item, index) => (
            <Link href={`/news/${item._id}`} key={index} className="block">
              <CardA news={item} />
            </Link>
          ))
        ) : (
          <p>No news available</p>
        )}
      </div>
      
      {/* Middle Card */}
      <div>
        {news?.slice(4, 5).map((item, index) => (
          <Link href={`/news/${item._id}`} key={index} className="block">
            <CardB news={item} />
          </Link>
        ))}
      </div>
      
      {/* Right Section */}
      <div>
        <p className="text-teal-700 font-bold text-lg">Most Read</p>
        <div className="flex gap-4 flex-col">
          {news.slice(6, 12).map((item, index) => (
            <Link href={`/news/${item._id}`} key={index} className="block">
              <SmallCard news={item} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export const FeaturedStory = ({ news }: NewsT) => {
  return (
    <section>
      <p className="font-bold text-lg">Featured Stories</p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
        {news.slice(0, 4).map((item, index) => (
          <Link href={`/news/${item._id}`} key={index} className="block">
            <FeaturedSectionCard news={item} />
          </Link>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 mt-10 md:grid-cols-6">
        {news.slice(5, 11).map((item, index) => (
          <Link href={`/news/${item._id}`} key={index} className="block">
            <FeaturedSectionCardCardA news={item} />
          </Link>
        ))}
      </div>
    </section>
  )
}

export const FeaturedSectionCard = ({ news }: MoreNewsProps) => {
  return (
    <section className="h-fit p-2 mt-16">
      <div className="relative rounded-md h-[350px] w-full overflow-hidden bg-teal-500">
        <Image
          alt={news.title}
          src={news.imgSrc}
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
      </div>
      <div className="mt-4 space-y-2">
        <p className="font-semibold text-gray-600">{news.date}</p>
        <h3 className="text-xl font-semibold line-clamp-2">
          {news.title}
        </h3>
      </div>
    </section>
  )
}

export const FeaturedSectionCardCardA = ({ news }: MoreNewsProps) => {
  return (
    <section className="h-fit p-2">
      <div className="rounded-md h-[150px] relative overflow-hidden w-full bg-teal-500">
        <Image
          alt={news.title}
          src={news.imgSrc}
          fill
          className="object-cover"
        />
      </div>
      <p className="font-semibold">{news.date}</p>
      <p className="text-[17px] font-semibold">{news.title}</p>
    </section>
  )
}

export const QuickLinks = () => {
  return (
    <section className="flex items-center my-10 flex-wrap gap-4">
      <p className="font-semibold text-lg">Quick Links:</p>
      {NavLinks.map((el, index) => (
        <Link className="bg-teal-400 px-3 py-[2px] font-semibold rounded-2xl" key={index} href={el.to}>
          {el.name}
        </Link>
      ))}
    </section>
  )
}

export const JustIn = ({ news }: MoreNewsProps) => {
  return (
    <Link href={`/news/${news._id}`} className="block">
      <section className="my-10">
        <p className="text-xl text-teal-700 my-3 font-bold">Just In</p>
        <section className="block md:flex gap-2 items-center">
          <div className="h-[200px] md:h-[300px] relative flex flex-1 bg-teal-400 rounded-md overflow-hidden">
            <Image
              src={news.imgSrc}
              alt={news.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-1 flex-col">
            <p className="font-semibold">{news.date}</p>
            <p className="md:text-xl font-semibold">{news.title}</p>
          </div>
        </section>
      </section>
    </Link>
  )
}

export const Business = () => {
  const [news, setNews] = useState<NewsTypes[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadNews = async () => {
      try {
        const data = await fetchBusinessNews();
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

  return (
    <section className="my-16">
      <p className="text-2xl font-bold">Business</p>
      <div className="grid md:grid-cols-2 gap-5 my-2">
        {news?.slice(0, 2).map((item, index) => (
          <Link href={`/news/${item._id}`} key={index} className="block">
            <section className="flex gap-2 items-center">
              <div className="relative h-[150px] md:h-[150px] flex flex-1 rounded-md overflow-hidden">
                <Image
                  src={item.imgSrc}
                  alt={item.title || 'Business news image'}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="flex flex-2 flex-col">
                <p className="font-semibold">{item.date}</p>
                <p className="md:text-lg font-semibold">{item.title}</p>
              </div>
            </section>
          </Link>
        ))}
      </div>
    </section>
  );
};

export const WhatToRead = () => {
  const [news, setNews] = useState<NewsTypes[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadNews = async () => {
      try {
        const data = await fetchBreakingNews();
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
    return <div className="p-3">Loading...</div>;
  }

  if (news.length === 0) {
    return <div className="p-3">No news available</div>;
  }

  const firstNewsItem = news[0];

  return (
    <section className="block md:flex items-center md:h-[80vh] gap-3 p-3">
      {/* Left section - Featured news */}
      <Link href={`/news/${firstNewsItem._id}`} className="block w-full h-[500px] md:h-full">
        <div className="bg-amber-500 w-full h-full relative rounded-md overflow-hidden">
          <Image
            alt={firstNewsItem.title || 'Featured news'}
            src={firstNewsItem.imgSrc}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="bg-black/80 absolute bottom-0 left-0 right-0 p-4 rounded-b-md">
            <p className="font-semibold text-white">{firstNewsItem.date}</p>
            <p className="text-[20px] font-semibold text-white">{firstNewsItem.title}</p>
          </div>
        </div>
      </Link>

      {/* Right Section - Other news */}
      <div className="grid gap-5 grid-cols-2">
        {news.slice(1, 5).map((item, index) => (
          <Link href={`/news/${item._id}`} key={index} className="block">
            <FeaturedSectionCardCardA news={item} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export const TheLatest = ({ news }: NewsT) => {
  return (
    <section className="my-10">
      <p className="text-2xl font-bold">The Latest</p>
      <div className="my-4 grid grid-cols-2 gap-5 md:grid-cols-5">
        {news.map((item, index) => (
          <Link href={`/news/${item._id}`} key={index} className="block">
            <CardA news={item} />
          </Link>
        ))}
      </div>
    </section>
  )
}

export const MoreNews = ({ news }: NewsT) => {
  return (
    <section className="my-16">
      <p className="text-2xl font-semibold my-6">More News</p>
      <div className="my-2 grid gap-5 grid-cols-1 md:grid-cols-2">
        {news.map((item, index) => (
          <Link href={`/news/${item._id}`} key={index} className="block">
            <section className="flex gap-2 items-center">
              <div className="h-[150px] relative md:h-[150px] flex flex-1 rounded-md overflow-hidden">
                <Image
                  alt={item.title}
                  src={item.imgSrc}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-2 flex-col">
                <p className="font-semibold">{item.date}</p>
                <p className="md:text-lg font-semibold">{item.title}</p>
              </div>
            </section>
          </Link>
        ))}
      </div>
    </section>
  )
}