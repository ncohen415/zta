import React from "react"
import Image from "next/image"
import ContactForm from "./ContactForm"
import Map from "@/public/map.png"

type Props = {}

const ContactSection = (props: Props) => {
  return (
    <div className="flex flex h-screen w-screen px-[75px] pt-[135px] pb-[75px]">
      <div className="flex-auto max-w-[50%] pr-[20px]">
        <h2 className="text-[65px] leading-[70px] tracking-tigher font-extrabold text-primary m-0 pb-[50px]">
          Contact Us
        </h2>
        <p className="text-primary text-[20px] mb-[25px] font-medium">
          Rely on our seasoned expertise in tenant law for comprehensive
          support. Our dedicated team at Zanghi Torres Arshawsky LLP ensures
          your peace of mind.
        </p>
        <p className="text-primary text-[20px] mb-[45px] font-medium">
          Reach out to us today to explore our customized solutions and
          safeguard your property rights effectively.
        </p>
        <ContactForm />
      </div>

      <div className="flex-auto max-w-[50%] pl-[50px]">
        <div className="h-[100%] w-[100%] relative">
          <Image
            src={Map}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt="ZTA Location"
          />
        </div>
      </div>
    </div>
  )
}

export default ContactSection
