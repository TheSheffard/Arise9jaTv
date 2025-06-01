'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export type NewsTypes = {
  imgSrc: string | StaticImport;
  _id: string;
  categoryName: string;
  title: string;
  image: string;
  date: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

// Proper page props type for Next.js app directory
type PageProps = {
  params: { id: string };
};

export default function NewsDetails({ params }: PageProps) {
  const { id } = params;
  const [news, setNews] = useState<NewsTypes | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNewsDetails = async () => {
      try {
        const response = await fetch(`https://arise9jaserver.vercel.app/news/${id}`);
        if (!response.ok) throw new Error('Failed to fetch news');
        const data = await response.json();
        if (Array.isArray(data) && data.length > 0) {
          setNews(data[0]);
        } else if (typeof data === 'object' && data !== null) {
          setNews(data);
        } else {
          throw new Error('Invalid data format');
        }
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNewsDetails();
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading news...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;
  if (!news) return <p className="text-center mt-10">News not found.</p>;

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="relative w-full h-[500px] rounded-lg overflow-hidden mb-6">
        <Image
          src={news.imgSrc || news.image}
          alt={news.title}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <h1 className="text-3xl font-bold mt-4">{news.title}</h1>
      <p className="text-sm text-gray-500">{news.date}</p>
      <div className="mt-6 prose max-w-none">
        <p className="text-gray-700 whitespace-pre-line">{news.content}</p>
      </div>
    </div>
  );
}