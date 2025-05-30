'use client'

import { CardA, CardB, SmallCard } from "@/utils/Helper";
import Link from "next/link";
import "react-loading-skeleton/dist/skeleton.css";
import { NavLinks } from "../NavComp/NavFucn";




// type NewsTypes = {
//   _id: string;
//   categoryId: string;
//   categoryName: string;
//   title: string;
//   image: string;
//   date: string;
//   content: string;
//   createdAt: string;
//   updatedAt: string;
//   __v: number;
// };

export const Hero = () => {
  return (
    <div className="h-fit gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1.2fr_2fr_1fr]">
      {/* Left section  */}
      <div >
        {
          Array(3).fill(0).map((_, index) => (
            <CardA key={index} />
          ))
        }
      </div>

      {/* Middle Card */}
      <div>
        <CardB />
      </div>
      {/* Right Section */}
      <div>
        <p className="text-teal-700 font-bold text-lg">Most Read</p>
        <div className="flex gap-4 flex-col">
          {
            Array(6).fill(0).map((_, index) => (
              <SmallCard key={index} />
            ))
          }

        </div>

      </div>

    </div>
  )
}


export const FeaturedStory = () => {
  return (
    <section>
      <p className="font-bold text-lg">Featured Stories</p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
        {
          Array(4).fill(0).map((_, index) => (
            <FeaturedSectionCard key={index} />
          ))
        }
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 mt-10 md:grid-cols-6">
        {
          Array(6).fill(0).map((_, index) => (
            <FeaturedSectionCardCardA key={index} />
          ))
        }
      </div>
    </section>
  )
}



export const FeaturedSectionCard = () => {
  return (
    <section className=" h-fit p-2 mt-16">
      <div className="rounded-md h-[350px] overflow-hidden w-full bg-teal-500">

      </div>
      <p className="font-semibold">date</p>
      <p className="text-[20px] font-semibold">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>

    </section>
  )
}

export const FeaturedSectionCardCardA = () => {
  return (
    <section className=" h-fit p-2">
      <div className="rounded-md h-[150px] overflow-hidden w-full bg-teal-500">

      </div>
      <p className="font-semibold">date</p>
      <p className="text-[17px] font-semibold">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>

    </section>
  )
}

export const QuickLinks = () => {
  return (
    <section className="flex items-center my-10 flex-wrap gap-4">
      <p className="font-semibold text-lg">Quick Links:</p>
      {
        NavLinks.map((el, index) => (
          <Link className="bg-teal-400 px-3 py-[2px] font-semibold rounded-2xl" key={index} href={`${el.to}`}> {el.name} </Link>
        ))
      }
    </section>
  )
}

export const JustIn = () => {
  return (
    <section className="my-10">
      <p className="text-xl text-teal-700 my-3 font-bold">Just In</p>
      <section className="block md:flex gap-2  items-center">
        <div className="h-[200px] md:h-[300px] flex flex-1 bg-teal-400 rounded-md overflow-hidden">
        </div>
        <div className="flex flex-1 flex-col">

          <p className="font-semibold">Date</p>
          <p className="md:text-xl font-semibold">Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
        </div>

      </section>
    </section>
  )
}

export const Business = () => {
  return (
    <section className="my-16">
      <p className="text-2xl font-bold">Business</p>
      <div className="grid md:grid-cols-2 gap-5 my-2">
        {
          Array(2).fill(0).map((_, index) => (
            <section className="flex gap-2  items-center" key={index}>
              <div className="h-[150px] md:h-[150px] flex flex-1 bg-teal-400 rounded-md overflow-hidden">
              </div>
              <div className="flex flex-2 flex-col">

                <p className="font-semibold">Date</p>
                <p className="md:text-lg font-semibold">Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
              </div>

            </section>
          ))
        }
      </div>
    </section>
  )
}

export const WhatToRead = () => {
  return (
    <section className="block md:flex items-center md:h-[80vh] gap-3  p-3">
      {/* Left section  */}
      <div className="bg-amber-500 w-full h-[500px] md:h-full relative rounded-md overflow-hidden">

        <div className="bg-black absolute bottom-4 rounded-md md:left-4 p-3">
          <p className="font-semibold text-white">Date</p>
          <p className="text-[20px] font-semibold text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>

      </div>

      {/* Right Section  */}
      <div className="grid gap-5 grid-cols-2 ">
        {
          Array(4).fill(0).map((_, index) => (
            <FeaturedSectionCardCardA key={index} />
          ))
        }
      </div>

    </section>
  )
}

export const TheLatest = () => {
  return (
    <section className="my-10">
      <p className="text-2xl font-bold">The Latest</p>
      <div className="my-4 grid grid-cols-2 gap-5 md:grid-cols-5 ">
        {
          Array(5).fill(0).map((_, index) => (
            <CardA key={index} />
          ))
        }
      </div>

    </section>
  )
}

export const MoreNews = () => {
  return (
    <section className="my-16">
      <p className="text-2xl font-semibold my-6">More News</p>

      <div className="my-2 grid gap-5 grid-cols-1 md:grid-cols-2">
        {
          Array(20).fill(0).map((_, index) => (
            <section className="flex gap-2  items-center" key={index}>
              <div className="h-[150px] md:h-[150px] flex flex-1 bg-teal-400 rounded-md overflow-hidden">
              </div>
              <div className="flex flex-2 flex-col">

                <p className="font-semibold">Date</p>
                <p className="md:text-lg font-semibold">Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
              </div>

            </section>

          ))
        }
      </div>
    </section>
  )
}