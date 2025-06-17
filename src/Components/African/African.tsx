'use client'
import { fetchAfrican, NewsTypes } from '@/utils/fetchNews';
import { CardC } from '@/utils/Helper'
import { useEffect, useState } from 'react';
import { CardCSkeleton } from '../NewsSkeletons';

const African = () => {
    const [news, setNews] = useState<NewsTypes[]>([]);
    const [loading, setLoading] = useState(true);
    const [displayCount, setDisplayCount] = useState(20);

    const handleLoadMore = () => {
        setDisplayCount(prevCount => prevCount + 40); 
    };

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



    return (
        <section>
            <div className="grid gap-5 grid-cols-1 md:grid-cols-2 my-10 px-2 md:px-10">
                {news.slice(0, displayCount).map((item, index) => (
                    <CardC news={item} key={index} />
                ))}
            </div>

            {/* Load More Button */}

            {news.length > displayCount && (
                <div className="flex justify-center my-6">
                    <button
                        onClick={handleLoadMore}
                        className="bg-blue-500 text-white px-4 py-3 font-semibold rounded"
                    >
                        Load More
                    </button>
                </div>
            )}
        </section>
    )
}

export default African;