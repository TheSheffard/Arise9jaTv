'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

type NewsData = {
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
}

type ApiResponse = NewsData | NewsData[] | { error?: string }

export default function NewsDetails() {
  const pathname = usePathname()
  const pathSegments = pathname?.split('/') || []
  const id = pathSegments[pathSegments.length - 1] // Gets last segment

  const [news, setNews] = useState<NewsData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!id) {
      setError('Invalid news ID')
      setLoading(false)
      return
    }

    const fetchNewsDetails = async () => {
      try {
        const response = await fetch(`https://arise9jaserver.vercel.app/news/${id}`)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data: ApiResponse = await response.json()

        if (Array.isArray(data)) {
          setNews(data[0]) // Take first item if array
        } else if (data && typeof data === 'object' && '_id' in data) {
          setNews(data)
        } else {
          throw new Error('Invalid data format received from API')
        }
      } catch (err) {
        const error = err as Error
        setError(error.message)
        console.error('Fetch error:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchNewsDetails()
  }, [id])

  if (loading) return <div className="text-center py-10">Loading news...</div>
  if (error) return <div className="text-center py-10 text-red-500">{error}</div>
  if (!news) return <div className="text-center py-10">News not found</div>

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="relative w-full h-96 mb-6 rounded-lg overflow-hidden">
        <Image
          src={news.imgSrc}
          alt={news.title}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <h1 className="text-3xl font-bold mb-2">{news.title}</h1>
      <p className="text-gray-500 mb-6">{news.date}</p>
      <div className="prose max-w-none">
        <p className="whitespace-pre-line">{news.content}</p>
      </div>
    </div>
  )
}