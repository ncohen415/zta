import React from "react"
import { Button } from "@/components/ui/button"
import OurSpecialtiesContent from "./OurSpecialtiesContent"

type Props = {}

const OurSpecialtiesSection = (props: Props) => {
  return (
    <div className="flex flex-col h-fit pb-[75px] min-h-screen w-screen px-[25px] pt-[135px] bg-lightBlue md:px-[75px] md:pb-[0]">
      <div className="flex flex-col justify-between items-center md:flex-row">
        <h2 className="text-[40px] md:text-[50px] lg:text-[65px] leading-[70px] mb-[30px] md:mb-[0] tracking-tigher font-extrabold text-white m-0">
          Our Specialties
        </h2>
        <Button className="font-semibold" size={"huge"} variant={"secondary"}>
          Contact Us
        </Button>
      </div>
      <div className="flex flex-col">
        <OurSpecialtiesContent />
      </div>
    </div>
  )
}

export default OurSpecialtiesSection
