"use client"
import React, { useState, useRef, useEffect } from "react"
import { gsap } from "gsap"
import Handshake from "@/public/handshake.webp"
import Writing from "@/public/writing.webp"
import Housing from "@/public/housing.jpeg"
import UnlawfulDetainer from "@/public/unlawful-detainer.webp"
import Image, { StaticImageData } from "next/image"
type Props = {}

interface Specialty {
  title: string
  content: string
  image: StaticImageData
}
const OurSpecialtiesContent = (props: Props) => {
  const navRef = useRef<HTMLDivElement | null>(null)
  const markerRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState<number>(0)

  const navItems = [
    {
      title: "Owners & Managers",
      content: `We represent owners and property managers of market rate and rent controlled properties throughout the Bay Area with expertise in residential rent control ordinances. Our attorneys have the knowledge and experience to represent our clients in any matter involving rent and eviction controls in court or administrative hearings throughout Northern California.`,
      image: Writing,
    },
    {
      title: "Affordable Housing",
      content: `Affordable housing remains one of our sub-specialties with our attorneys having substantial experience and knowledge of affordable housing programs. Our office takes a pragmatic and reasoned approach in consulting with our subsidized and non-profit housing provider clients and litigating on their behalf with due consideration given to their housing retention goals and policies.`,
      image: Housing,
    },
    {
      title: "Unlawful Detainer",
      content: `We have extensive experience prosecuting unlawful detainer actions. We handle more than a thousand residential evictions a year as well as commercial evictions and other landlord-tenant related matters. Each of our attorneys has significant trial experience and we prepare each case with a view toward trial if an advantageous settlement is not attainable.`,
      image: UnlawfulDetainer,
    },
  ]

  useEffect(() => {
    // Initial animation to position the marker under the first item
    if (navRef.current && markerRef.current) {
      gsap.to(markerRef.current, {
        x: navRef.current.children[activeIndex].offsetLeft,
        width: navRef.current.children[activeIndex].offsetWidth,
        height: navRef.current.children[activeIndex].offsetHeight,
        duration: 0.4,
      })
    }
  }, [])

  const handleNavClick = (index: number) => {
    setActiveIndex(index)
    // Animate the marker to the new active item
    if (navRef.current && markerRef.current) {
      gsap.to(markerRef.current, {
        x: navRef.current.children[index].offsetLeft,
        width: navRef.current.children[index].offsetWidth,
        height: navRef.current.children[index].offsetHeight,
        duration: 0.4,
      })
    }
  }

  return (
    <>
      <div ref={navRef} className="relative flex pt-[50px] mb-[25px]">
        {navItems?.map((item: Specialty, index: number) => {
          return (
            <div
              onClick={() => handleNavClick(index)}
              className="cursor-pointer flex-auto flex justify-center border-b-2 border-secondary pb-[20px] pt-[20px] z-[2] bg-transparent"
            >
              <h1
                className={`text-[30px] font-bold ${
                  index === activeIndex ? "text-primary" : "text-white"
                }`}
              >
                {item.title}
              </h1>
            </div>
          )
        })}
        <div
          ref={markerRef}
          className={`absolute bg-secondary top-[50px] z-[1]`}
        />
      </div>

      <div className="flex flex-auto pt-[50px]">
        <div className="flex-auto pr-[20px] min-w-[50%]">
          <p className="text-[20px] text-white font-semibold w-[100%] max-w-[675px]">
            {navItems[activeIndex].content}
          </p>
        </div>
        <hr className="rotate-90 h-px w-[100%]" />
        <div className="flex justify-end flex-auto pl-[20px]">
          <div
            style={{ height: "467px", width: "700px", position: "relative" }}
          >
            <Image
              className="relative"
              src={navItems[activeIndex].image}
              alt=""
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default OurSpecialtiesContent
