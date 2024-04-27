import React from "react"
import Image from "next/image"
import SF from "@/public/sf.png"
import { Button } from "@/components/ui/button"

type Props = {}

const HeroSection = (props: Props) => {
  return (
    <>
      {/* BACKGROUND */}
      <div className="h-screen w-screen relative z-1 top-0">
        <Image
          className="absolute top-0 z-2"
          src={SF}
          alt="Golden Gate Bridge"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
        <div className="h-screen w-screen bg-babyBlue absolute z-3 top-0 opacity-80" />
      </div>
      {/* CONTENT */}
      <div className="absolute z-4 h-screen w-screen pt-[150px] px-[75px] top-0">
        <div className="pt-[135px] w-full lg:w-5/12">
          <h1 className="text-[85px] leading-[70px] tracking-tight font-bold text-darkBlue mb-[45px]">
            Proven Legal <br />
            Representation
          </h1>
          <h3 className="text-[20px] text-darkBlue font-medium mb-[45px]">
            Zanghi Torres Arshawsky LLP represents landlords, property
            management companies, housing authorities, affordable housing
            providers, and real estate investors throughout Northern California.
            Each of our partners of Zanghi Torres Arshawsky LLP has more than 20
            years of experience in landlord-tenant law.
          </h3>
          <Button size={"huge"}>Contact Us</Button>
        </div>
      </div>
    </>
  )
}

export default HeroSection
