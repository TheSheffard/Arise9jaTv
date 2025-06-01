'use client'

import { fetchSport, NewsTypes } from '@/utils/fetchNews';
import { CardC } from '@/utils/Helper'
import { useEffect, useState } from 'react';

const Sport = () => {
    const [news, setNews] = useState<NewsTypes[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadNews = async () => {
            try {
                const data = await fetchSport();
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
        return <div className="px-2 md:px-10 h-fit border-red-500 text-center font-semibold">Loading...</div>;
    }
    return (
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 my-10  px-2 md:px-10">
            {
                news.map((item, index) => (
                    <CardC news={item} key={index} />
                ))
            }
        </div>
    )
}

export default Sport