import React from "react"
import Logo from "@/public/logo.png"
import Image from "next/image"
import { MapPin, Phone, Mail } from "react-feather"
import { getCourthouseWebsites } from "@/actions"

type Props = {}

interface CourthouseWebsite {
  title: string
  link: string
}

const Footer = async (props: Props) => {
  const data = await getCourthouseWebsites()
  const websites = data.data.allCourthouseWebsites
  console.log(websites)
  return (
    <div className="h-[50vh] w-screen  bg-babyBlue flex justify-between p-[75px]">
      <div className="flex-auto min-w-[50%] flex flex-col">
        <div className="h-fit">
          <Image src={Logo} alt="hi" height={36} width={250} />
        </div>
      </div>
      <div className="flex-auto min-w-[50%] flex flex-col">
        <div className="flex mb-[15px]">
          <div className="flex-auto max-w-[33.33%]">
            <h3 className="text-primary text-[20px] font-bold mb-[15px]">
              Resources
            </h3>
            <ul>
              <li className="mb-[10px] text-primary">SF Rent Board</li>
              <li className="mb-[10px] text-primary">Oakland Rent Board</li>
              <li className="mb-[10px] text-primary">
                California Department of Fair Employment & Housing
              </li>
              <li className="text-primary">HUD.gov Handbooks</li>
            </ul>
          </div>
          <div className="flex-auto max-w-[33.33%]">
            <h3 className="text-primary text-[20px] font-bold mb-[15px]">
              Quick Links
            </h3>
            <ul>
              <li className="mb-[10px] text-primary">About Us</li>
              <li className="mb-[10px] text-primary">Specialties</li>
              <li className="mb-[10px] text-primary">Our Team</li>
              <li className="text-primary">Trainings & Seminars</li>
            </ul>
          </div>
          <div className="flex-auto max-w-[33.33%]">
            <h3 className="text-primary text-[20px] font-bold mb-[15px]">
              Contact Us
            </h3>
            <ul>
              <li className="flex mb-[10px]">
                <MapPin color="#002E6D" size={20} className="mr-[10px]" />
                <p className="mt-[-5px] text-primary">
                  625 Market Street, 4th Floor <br />
                  San Francisco, CA 94105
                </p>
              </li>
              <li className="flex mb-[10px]">
                <Phone color="#002E6D" size={20} className="mr-[10px]" />
                <p className="mt-[-5px] text-primary">415-977-0444</p>
              </li>
              <li className="flex mb-[10px]">
                <Mail color="#002E6D" size={20} className="mr-[10px]" />
                <a
                  href="mailto:info@ztalaw.com"
                  className="mt-[-5px] text-primary"
                >
                  info@ztalaw.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h3 className="text-primary text-[15px] font-bold mb-[15px]">
            Courthouse Websites
          </h3>
          <div>
            <ul className="flex flex-wrap">
              {websites?.map((website: CourthouseWebsite) => {
                return (
                  <li className="flex-auto text-primary">
                    <a target="_blank" href={`${website.link}`}>
                      {website.title}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
