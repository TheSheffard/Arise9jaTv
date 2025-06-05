'use client'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export const HeroCardSkeleton = () => (
  <div className="space-y-2">
    <Skeleton height={200} className="w-full" />
    <Skeleton width={100} />
    <Skeleton count={2} />
  </div>
)

export const FeaturedStorySkeleton = () => (
  <div className="h-[350px]">
    <Skeleton height="100%" className="w-full" />
    <div className="mt-2 space-y-2">
      <Skeleton width={80} />
      <Skeleton count={1} />
    </div>
  </div>
)

export const SmallCardSkeleton = () => (
  <div className="flex gap-3 items-center">
    <Skeleton width={80} height={80} />
    <div className="flex-1 space-y-2">
      <Skeleton width={70} />
      <Skeleton count={1} />
    </div>
  </div>
)

export const BusinessCardSkeleton = () => (
  <div className="flex gap-3">
    <Skeleton width={150} height={150} />
    <div className="flex-1 space-y-2">
      <Skeleton width={80} />
      <Skeleton count={2} />
    </div>
  </div>
)

export const JustInSkeleton = () => (
  <div className="flex flex-col md:flex-row gap-4">
    <Skeleton className="h-[200px] md:h-[300px] w-full md:w-1/2" />
    <div className="w-full md:w-1/2 space-y-4">
      <Skeleton width={100} />
      <Skeleton count={3} />
    </div>
  </div>
)

export const WhatToReadSkeleton = () => (
  <section className="block md:flex items-center md:h-[80vh] gap-3 p-3">
    <div className="w-full h-[500px] md:h-full">
      <Skeleton height="100%" className="w-full" />
    </div>
    <div className="grid gap-5 grid-cols-2 mt-4 md:mt-0">
      {[...Array(4)].map((_, i) => (
        <div key={i}>
          <Skeleton height={150} className="w-full" />
          <div className="mt-2">
            <Skeleton width={80} />
            <Skeleton count={1} />
          </div>
        </div>
      ))}
    </div>
  </section>
)

// export const TheLatestSkeleton = () => (
//   <section className="my-10">
//     <Skeleton width={120} height={32} className="mb-4" />
//     <div className="grid grid-cols-2 gap-5 md:grid-cols-5">
//       {[...Array(5)].map((_, i) => (
        
//         <CardA key={i} news={{
//           imgSrc: '',
//           _id: '',
//           categoryName: '',
//           title: '',
//           image: '',
//           date: '',
//           content: '',
//           createdAt: '',
//           updatedAt: '',
//           __v: 0
//         }} />
//       ))}
//     </div>
//   </section>
// )

export const MoreNewsSkeleton = () => (
  <section className="my-16">
    <Skeleton width={120} height={32} className="my-6" />
    <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
      {[...Array(2)].map((_, i) => (
        <div key={i} className="flex gap-3">
          <Skeleton width={150} height={150} />
          <div className="flex-1 space-y-2">
            <Skeleton width={80} />
            <Skeleton count={2} />
          </div>
        </div>
      ))}
    </div>
  </section>
)


// components/CardCSkeleton.tsx
export const CardCSkeleton = () => (
  <div className="flex flex-col md:flex-row gap-4">
    {/* Image placeholder */}
    <div className="w-full md:w-1/3">
      <Skeleton height={180} className="w-full rounded-md" />
    </div>
    
    {/* Content placeholder */}
    <div className="w-full md:w-2/3 space-y-2">
      <Skeleton width={120} height={20} />
      <Skeleton height={28} />
      <Skeleton count={2} />
      <div className="flex gap-2 items-center">
        <Skeleton circle width={24} height={24} />
        <Skeleton width={100} height={20} />
      </div>
    </div>
  </div>
)