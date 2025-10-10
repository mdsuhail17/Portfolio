'use client'

import { HeroParallax } from '../../components/ui/hero-parallax'

const products = [
  {
    title: "Crazy School Eleven",
    link: "#",
    thumbnail: "/HomeSectionPhotos/crazyschooleleven.png",
  },
  {
    title: "Crazy School Five",
    link: "#",
    thumbnail: "/HomeSectionPhotos/crazyschoolfive.png",
  },
  {
    title: "Crazy School New 1",
    link: "#",
    thumbnail: "/HomeSectionPhotos/crazyschoolNew1.png",
  },
  {
    title: "Crazy School New 2",
    link: "#",
    thumbnail: "/HomeSectionPhotos/crazyschoolnew2.png",
  },
  {
    title: "Crazy School One",
    link: "#",
    thumbnail: "/HomeSectionPhotos/crazyschoolone.png",
  },
  {
    title: "Crazy Store Four",
    link: "#",
    thumbnail: "/HomeSectionPhotos/crazystorefour.png",
  },
  {
    title: "Crazy Store New 1",
    link: "#",
    thumbnail: "/HomeSectionPhotos/crazystorenew1.png",
  },
  {
    title: "Crazy Store New 2",
    link: "#",
    thumbnail: "/HomeSectionPhotos/crazystorenew2.png",
  },
  {
    title: "Crazy Store New 3",
    link: "#",
    thumbnail: "/HomeSectionPhotos/crazystorenew3.png",
  },
  {
    title: "Crazy Store Nine",
    link: "#",
    thumbnail: "/HomeSectionPhotos/crazystorenine.png",
  },
  {
    title: "Crazy Store One",
    link: "#",
    thumbnail: "/HomeSectionPhotos/crazystoreone.png",
  },
  {
    title: "Crazy Store Ten",
    link: "#",
    thumbnail: "/HomeSectionPhotos/crazystoreten.png",
  },
  {
    title: "Crazy Store Two",
    link: "#",
    thumbnail: "/HomeSectionPhotos/crazystoretwo.png",
  },
  {
    title: "Crazy School Eight",
    link: "#",
    thumbnail: "/HomeSectionPhotos/crazyschooleight.png",
  },
  {
    title: "Crazy School Three",
    link: "#",
    thumbnail: "/HomeSectionPhotos/crazyschoolthree.png",
  },
  {
    title: "Crazy School Twelve",
    link: "#",
    thumbnail: "/HomeSectionPhotos/crazyschooltwel.png",
  },
  {
    title: "Crazy School Two",
    link: "#",
    thumbnail: "/HomeSectionPhotos/crazyschooltwo.png",
  },
  {
    title: "Crazy Store Eight",
    link: "#",
    thumbnail: "/HomeSectionPhotos/crazystoreeight.png",
  },
  {
    title: "Crazy Store Eleven",
    link: "#",
    thumbnail: "/HomeSectionPhotos/crazystoreeleven.png",
  },
  {
    title: "Crazy Store Thirteen",
    link: "#",
    thumbnail: "/HomeSectionPhotos/crazystorethirteen.png",
  },
]

const HeroSection = () => {
  return (
    <section id="hero" className="relative bg-black">
      <HeroParallax products={products} />
    </section>
  )
}

export default HeroSection
