import React from "react"
import Image from "next/image"
import SF from "@/public/sf.png"
import { Button } from "@/components/ui/button"
import SectionButton from "@/components/ContactButton"

type Props = {}

const HeroSection = (props: Props) => {
  return (
    <>
      {/* BACKGROUND */}
      <div className="h-fit min-h-screen w-screen relative z-1 top-0">
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
      <div className="absolute z-4 h-screen w-screen pt-[150px] top-0 px-[25px] md:px-[75px]">
        <div className="pt-[135px] w-full md:w-8/12 lg:w-5/12">
          <h1 className="text-[50px] leading-[40px] tracking-tight font-bold text-primary mb-[45px] md:text-[65px] md:leading-[55px] lg:text-[85px] lg:leading-[70px] ">
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
          <SectionButton text={"Contact Us"} secondary={false} />
        </div>
      </div>
    </>
  )
}

export default HeroSection
