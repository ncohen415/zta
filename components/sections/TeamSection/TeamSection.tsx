import React from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import John from "@/public/john.jpg"
import Francisco from "@/public/francisco.jpg"
import MeetTheTeamButton from "@/components/MeetTheTeamButton"

type Props = {}

const TeamSection = (props: Props) => {
  return (
    <div
      id="team"
      className="flex flex-col h-fit min-h-screen w-screen px-[25px] pt-[135px] bg-grayBlue pb-[75px] md:px-[75px] "
    >
      <div className="flex flex-col justify-between items-center md:flex-row mb-[50px]">
        <h2 className="text-[31px] md:text-[40px] lg:text-[65px] leading-[70px] tracking-tigher font-extrabold text-primary mb-[30px] md:mb-[0]">
          Experienced Attornies
        </h2>
        <MeetTheTeamButton text="Meet the Whole Team" secondary={true} />
      </div>
      <p className="text-primary text-[20px] mb-[50px] font-semibold">
        Each of our partners has more than 20 years of experience in
        landlord-tenant law. Our associates have extensive experience in all
        facets of litigation with a focus on unlawful detainer litigation. Our
        “of counsel” associations provide our office with a wide range and
        breadth of experience in all matters relating to the ownership and
        management of residential and commercial property.
      </p>
      <div className="flex flex-col items-center lg:flex-row lg:justify-around">
        <div className="relative w-fit mb-[100px] lg:mb-[0]">
          <Image src={John} alt="" height={500} width={500} />
          <div className="absolute flex flex-col justify-center items-center bg-primary w-[395px] h-[115px] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h3 className="text-[20px] font-black text-white mb-[10px]">
              JOHN P. ZANGHI
            </h3>
            <h5 className="text-[18px] font-bold text-secondary">PARTNER</h5>
          </div>
        </div>
        <div className="relative w-fit">
          <Image src={Francisco} alt="" height={500} width={500} />
          <div className="absolute flex flex-col justify-center items-center bg-primary w-[395px] h-[115px] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h3 className="text-[20px] font-black text-white mb-[10px]">
              FRANCISCO G. TORRES
            </h3>
            <h5 className="text-[18px] font-bold text-secondary">PARTNER</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamSection
