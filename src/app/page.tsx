"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Bag, Heart, List } from "@phosphor-icons/react"
import Slider, { Settings } from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import { useRef, useState } from "react"

import useScrollStatus from "@/hooks/useScrollStatus"
import useTimeCountdown from "@/hooks/useTimeCountdown"

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

  const BEST_SELLERS = [
    {
      image: {
        url: "/assets/homepage/best-seller-1.png",
        w: 500,
        h: 750,
      },
      title: "Green Jacket",
      sales: "",
      price: "$129",
      oldPrice: "",
    },
    {
      image: {
        url: "/assets/homepage/best-seller-2.png",
        w: 500,
        h: 750,
      },
      title: "Prada Bag",
      sales: "",
      price: "$129",
      oldPrice: "",
    },
    {
      image: {
        url: "/assets/homepage/best-seller-3.png",
        w: 500,
        h: 750,
      },
      title: "Yellow Jacket",
      sales: "",
      price: "$150",
      oldPrice: "",
    },
    {
      image: {
        url: "/assets/homepage/best-seller-4.png",
        w: 500,
        h: 500,
      },
      title: "Pointer Footwear",
      sales: "-30%",
      price: "$129",
      oldPrice: "$170",
    },
  ]

  const { isAtTop, isAtBottom, scrollDirection } = useScrollStatus()
  const { days, hours, minutes, seconds } = useTimeCountdown(86400 * 25)
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
      <header
        className={`fixed z-10 w-full py-4 transition-all duration-300 ease-in-out ${isAtTop ? "bg-transparent py-8" : "bg-black/80 py-4 shadow-md"}`}
      >
        <div className={`section-container flex items-center justify-between`}>
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={"/assets/etalon-logo.png"}
              alt={""}
              width={308}
              height={308}
              className="size-9 rounded-full"
            />
            <div className="text-3xl font-bold text-white">etalon</div>
          </Link>
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
        <section className="bg-[#191919] py-5">
          <div className="section-container flex gap-8">
            {["gucci", "h&m", "nike", "tnf", "prada", "ellesse"].map(
              (item, index) => (
                <div key={index}>
                  <Image
                    src={`/assets/homepage/${item}-logo.png`}
                    alt={""}
                    width={300}
                    height={300}
                    className="brightness-0 invert"
                  />
                </div>
              )
            )}
          </div>
        </section>
        <section className="bg-[#E9E9E9]">
          <div className="section-container py-16">
            <h2 className="text-6xl">New Collection</h2>
            <div className="mt-10 grid grid-cols-12 gap-10">
              <div className="relative col-span-5 h-[450px] rounded-3xl bg-[#C6C2C9] bg-[url('/assets/homepage/new-collection-winter.png')] bg-[length:80%_auto] bg-[left_80%_top_4rem] bg-no-repeat p-5">
                <div className="text-2xl font-bold">Mens Winter Collection</div>
                <button className="absolute bottom-5 right-5 rounded-lg bg-gray-900 px-3 py-2 text-white">
                  Discover Now
                </button>
              </div>
              <div className="relative col-span-7 rounded-3xl bg-primary-default bg-[url('/assets/homepage/new-collection-bag.png')] bg-[length:70%_auto] bg-[left_0%_top_1rem] bg-no-repeat p-5">
                <div className="float-end mr-10 mt-10 text-2xl font-bold">
                  Men&apos;s Bags
                  <br />
                  Collection
                </div>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 text-5xl font-bold">
                  -40% OFF
                </div>
                <button className="absolute bottom-5 right-5 rounded-lg bg-gray-900 px-3 py-2 text-white">
                  Discover Now
                </button>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="section-container flex flex-col py-16">
            <h2 className="text-6xl">Best Sellers</h2>
            <div className="mt-10 grid grid-cols-4 gap-6">
              {BEST_SELLERS.map((item, index) => (
                <div key={index} className="flex flex-col">
                  <div className="relative h-72 grow overflow-hidden rounded-2xl bg-[#EFEFED] pt-5">
                    <Image
                      src={item.image.url}
                      alt={""}
                      width={item.image.w}
                      height={item.image.h}
                      className="mx-auto h-auto w-4/5"
                    />
                    {!!item.sales && (
                      <div className="absolute left-5 top-5 rounded-lg bg-secondary-dark px-4 py-1 text-white">
                        {item.sales}
                      </div>
                    )}
                    <button className="group">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 256 256"
                        className="absolute right-5 top-5 fill-secondary-dark"
                      >
                        <path
                          className="block group-hover:hidden"
                          d="M178,40c-20.65,0-38.73,8.88-50,23.89C116.73,48.88,98.65,40,78,40a62.07,62.07,0,0,0-62,62c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,228.66,240,172,240,102A62.07,62.07,0,0,0,178,40ZM128,214.8C109.74,204.16,32,155.69,32,102A46.06,46.06,0,0,1,78,56c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,155.61,146.24,204.15,128,214.8Z"
                        ></path>
                        <path
                          className="hidden group-hover:block"
                          d="M240,102c0,70-103.79,126.66-108.21,129a8,8,0,0,1-7.58,0C119.79,228.66,16,172,16,102A62.07,62.07,0,0,1,78,40c20.65,0,38.73,8.88,50,23.89C139.27,48.88,157.35,40,178,40A62.07,62.07,0,0,1,240,102Z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <div className="cursor-pointer text-lg font-semibold hover:text-secondary-dark">
                        {item.title}
                      </div>
                      <div>
                        {!!item.oldPrice ? (
                          <span className="line-through">{item.oldPrice}</span>
                        ) : (
                          ""
                        )}
                        <span className="font-semibold"> {item.price}</span>
                      </div>
                    </div>
                    <button className="rounded-xl bg-primary-default p-2">
                      <Bag size={24} className="fill-secondary-dark" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <button className="mx-auto mt-10 rounded-xl bg-gray-900 px-4 py-3 text-white">
              Load More Products
            </button>
          </div>
        </section>
        <section className="bg-[linear-gradient(to_right,_#FEDE67_50%,_#3B5E48_50%)]">
          <div className="section-container flex gap-20 bg-[linear-gradient(to_right,_#FEDE67_30%,_#3B5E48_30%)] py-16">
            <div className="flex flex-col gap-5">
              <div className="text-6xl font-bold">-70% OFF</div>
              <Image
                src={"/assets/homepage/sale-thumb.png"}
                alt={""}
                width={700}
                height={293}
                className="w-[450px]"
              />
              <div className="flex items-center gap-3">
                <div className="rounded-xl border-2 border-black px-3 py-2 text-2xl font-semibold">
                  <span className="line-through">$180</span>
                  <span> $50</span>
                </div>
                <button className="rounded-xl bg-gray-900 p-3">
                  <Bag size={28} className="fill-white" />
                </button>
              </div>
            </div>
            <div className="grow">
              <div className="text-6xl font-medium text-white">
                Sale ends soon
              </div>
              <div className="mt-14 grid grid-cols-4 gap-8 text-white">
                <div className="flex flex-col items-center gap-3">
                  <div className="flex h-32 w-full items-center justify-center rounded-2xl bg-secondary-dark text-7xl">
                    {days}
                  </div>
                  <div className="text-xl">Days</div>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="flex h-32 w-full items-center justify-center rounded-2xl bg-secondary-dark text-7xl">
                    {hours}
                  </div>
                  <div className="text-xl">Hours</div>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="flex h-32 w-full items-center justify-center rounded-2xl bg-secondary-dark text-7xl">
                    {minutes}
                  </div>
                  <div className="text-xl">Minutes</div>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="flex h-32 w-full items-center justify-center rounded-2xl bg-secondary-dark text-7xl">
                    {seconds}
                  </div>
                  <div className="text-xl">Seconds</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer></footer>
    </>
  )
}
