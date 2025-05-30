import { Business, FeaturedStory, Hero, JustIn, MoreNews, QuickLinks, TheLatest, WhatToRead } from "./HomeHelp"

export const HomeComp = () => {
  return (
    <div className="px-2 md:px-10 h-fit  border-red-500 max-w-[1400px] mx-auto">
      <Hero />
      <FeaturedStory />
      <QuickLinks/>
      <JustIn/>
      <Business/>
      <WhatToRead/>
      <TheLatest/>
      <MoreNews/>
    </div>
  )
}

