'use client'
import { fetchAfrican, NewsTypes } from '@/utils/fetchNews';
import { CardC } from '@/utils/Helper'
import { useEffect, useState } from 'react';
import { CardCSkeleton } from '../NewsSkeletons';

const African = () => {
    const [news, setNews] = useState<NewsTypes[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadNews = async () => {
            try {
                const data = await fetchAfrican();
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
        return (
            <div className="grid gap-5 grid-cols-1 md:grid-cols-2 my-10 px-2 md:px-10">
                {[...Array(4)].map((_, index) => (
                    <CardCSkeleton key={index} />
                ))}
            </div>
        );
    }

    if (news.length === 0) {
        return (
            <div className="px-2 md:px-10 h-fit text-center font-semibold my-10">
                No African news available at the moment
            </div>
        );
    }

    return (
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 my-10 px-2 md:px-10">
            {news.map((item, index) => (
                <CardC news={item} key={index} />
            ))}
        </div>
    )
}

export default African;