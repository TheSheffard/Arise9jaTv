'use client'

import Image from "next/image"
import { NewsTypes } from "./fetchNews";
import Link from "next/link";

interface NewsT {
    news: NewsTypes;
}
export const CardA = ({ news }: NewsT) => {
    return (
        <section className="h-fit p-2">
            <div className="relative rounded-md h-[170px] w-full overflow-hidden bg-teal-500">
                <Image
                    alt={news.title}
                    src={news?.imgSrc}
                    fill

                />
            </div>
            <p className="font-semibold mt-2">{news.date}</p>
            <p className="text-[16px] font-semibold mt-1">{news.title.slice(0, 50)}</p>
        </section>
    )
}
export const CardB = ({ news }: NewsT) => {
    return (
        <section className="h-fit p-2">
            <div className="relative rounded-md h-[400px] w-full overflow-hidden bg-teal-500">
                <Image
                    alt={news.title}
                    src={news?.imgSrc}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority
                />
            </div>
            <p className="font-semibold mt-3">{news.date}</p>
            <p className="text-[20px] font-semibold mt-2">{news.title.slice(0, 50)}</p>
        </section>
    )
}

export const SmallCard = ({ news }: NewsT) => {
    return (
        <section className="flex gap-4 items-stretch h-full">
            <p className="font-semibold flex-1 min-w-[80px] self-center">
                {news.title.slice(0, 35) + " ...."}
            </p>
            <div className="relative flex-1 h-full min-h-[100px] w-full rounded-md overflow-hidden bg-teal-400">
                <Image
                    alt={news.title}
                    src={news?.imgSrc}
                    fill
                    sizes="(max-width: 768px) 150px, 200px"
                    className="object-cover"
                    priority
                />
            </div>
        </section>
    )
}




export const CardC = ({ news }: NewsT) => {
    return (
        <Link href={`/news/${news._id}`} passHref>
                <section className="flex gap-2 items-center p-2">
                    <div className="h-[150px] md:h-[250px] flex flex-1 bg-teal-400 relative rounded-md overflow-hidden">
                        <Image
                            alt={news.title}
                            src={news?.imgSrc}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                    <div className="flex flex-1 flex-col">
                        <p className="font-semibold">{news.date}</p>
                        <p className="md:text-lg font-semibold line-clamp-2">{news.title}</p>
                    </div>
                </section>
        </Link>
    )
}