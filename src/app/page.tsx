"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Bag, List } from "@phosphor-icons/react"
import Slider, { Settings } from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import { useRef, useState } from "react"

export default function Home() {
  const HEADER_LINKS = [
    {
      label: "Home",
      href: "#",
      isActive: true,
    },
    {
      label: "Store",
      href: "#",
      isActive: false,
    },
    {
      label: "New",
      href: "#",
      isActive: false,
    },
    {
      label: "Contacts",
      href: "#",
      isActive: false,
    },
  ]

  const BANNER_SLIDER = [
    {
      image: "/assets/homepage/banner-carousel-1.png",
    },
    {
      image: "/assets/homepage/banner-carousel-2.png",
    },
    {
      image: "/assets/homepage/banner-carousel-4.png",
    },
  ]

  const [current, setCurrent] = useState(0)

  const sliderRef = useRef<Slider>(null)
  var settings: Settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    pauseOnDotsHover: false,
    arrows: false,
    swipe: false,

    beforeChange(_, nextSlide) {
      setCurrent(nextSlide)
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          swipe: true,
        },
      },
    ],
  }

  return (
    <>
      <header className="fixed w-full">
        <div className="section-container flex items-center justify-between bg-transparent py-4">
          <div className="flex items-center gap-2">
            <Image
              src={"/assets/etalon-logo.png"}
              alt={""}
              width={308}
              height={308}
              className="size-9 rounded-full"
            />
            <div className="text-3xl font-bold text-white">etalon</div>
          </div>
          <nav>
            {HEADER_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`body-md-500 p-4 ${
                  link.isActive
                    ? "text-white"
                    : "text-white/50 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <button className="body-md-500 flex items-center gap-1 text-white">
              Menu <List size={24} />
            </button>
            <button className="flex size-9 items-center justify-center rounded-full bg-primary-default">
              <Bag size={24} className="fill-secondary-dark" />
            </button>
          </div>
        </div>
      </header>
      <main>
        <section className="overflow-hidden bg-gradient-to-br from-secondary-dark to-secondary-light">
          <div className="section-container relative flex py-32">
            <div className="flex w-1/2 flex-col items-start text-white">
              <h3 className="font-qwigley text-9xl leading-none text-white/80">
                2022
              </h3>
              <h1 className="text-9xl">Autumn Jackets</h1>
              <div className="mt-3 text-2xl">Autumn Sale / Up to 50% OFF</div>
              <button className="mt-10 h-10 rounded-md bg-primary-default px-3 py-2 font-semibold text-secondary-dark">
                Open Collection
              </button>
            </div>
            <div className="absolute right-0 top-[10%] w-1/2">
              <Slider {...settings} ref={sliderRef}>
                {BANNER_SLIDER.map((item, index) => (
                  <div key={index} className="">
                    <div className="relative h-fit w-full">
                      <Image
                        src={item.image}
                        alt={""}
                        width={1600}
                        height={2000}
                        className="h-auto w-full"
                      />
                      <div className="absolute right-1/4 top-1/4 -translate-y-14 translate-x-12 text-4xl text-white">
                        $299
                      </div>
                      <div className="absolute right-1/4 top-1/4 flex size-32 translate-x-1/4 items-center justify-center rounded-full bg-primary-default text-center text-3xl font-black">
                        -40% OFF
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
              <div className="absolute bottom-[10%] left-1/2 flex w-4/5 -translate-x-1/2 justify-between">
                <button
                  className={`rounded-full border-2 border-solid border-white p-3`} // ${current === 0 ? "opacity-50" : ""}
                  onClick={sliderRef.current?.slickPrev}
                  // disabled={current === 0}
                >
                  <ArrowLeft weight="bold" size={24} className="fill-white" />
                </button>
                <button
                  className={`rounded-full border-2 border-solid border-white p-3`} // ${current === BANNER_SLIDER.length - 1 ? "opacity-50" : ""}
                  onClick={sliderRef.current?.slickNext}
                  // disabled={current === BANNER_SLIDER.length - 1}
                >
                  <ArrowRight weight="bold" size={24} className="fill-white" />
                </button>
              </div>
              <div className="absolute right-0 top-1/2 flex -translate-y-1/2 flex-col gap-6">
                {BANNER_SLIDER.map((_, index) => (
                  <div
                    key={index}
                    className={`size-4 cursor-pointer rounded-full transition-all duration-300 ease-in-out ${
                      index === current ? "scale-125 bg-white" : "bg-white/50"
                    }`}
                    onClick={() => sliderRef.current?.slickGoTo(index)}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer></footer>
    </>
  )
}
