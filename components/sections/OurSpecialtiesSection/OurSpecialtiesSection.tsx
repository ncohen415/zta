import React from "react"
import { Button } from "@/components/ui/button"
import OurSpecialtiesContent from "./OurSpecialtiesContent"

type Props = {}

const OurSpecialtiesSection = (props: Props) => {
  return (
    <div className="flex flex-col h-screen w-screen px-[75px] pt-[135px] bg-lightBlue">
      <div className="flex justify-between items-center">
        <h2 className="text-[65px] leading-[70px] tracking-tigher font-extrabold text-white m-0">
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
