import React from "react"
import Image from "next/image"
import ContactForm from "./ContactForm"
import Map from "@/public/map.png"

type Props = {}

const ContactSection = (props: Props) => {
  return (
    <div className="flex flex-col flex h-fit min-h-screen w-screen px-[25px] pt-[135px] pb-[75px] md:px-[75px] md:flex-row">
      <div className="flex-auto w-[100%]  mb-[50px] md:pr-[20px] md:mb-[unset] md:max-w-[50%] lg:w-[50%]">
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

      <div className="flex-auto aspect-square md:pl-[20px] md:max-w-[50%] md:aspect-[unset]">
        <div className="h-[100%] w-[100%] relative">
          <iframe
            className="h-[100%] w-[100%]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.059756948845!2d-122.40388088387292!3d37.78863931913302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808826d8c7ab%3A0x7695eccd162be209!2s625+Market+St%2C+San+Francisco%2C+CA+94105!5e0!3m2!1sen!2sus!4v1475076888862"
          />
        </div>
      </div>
    </div>
  )
}

export default ContactSection
