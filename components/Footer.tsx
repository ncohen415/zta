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
  return (
    <div className="h-fit min-h-[50vh] w-screen bg-babyBlue flex flex-col justify-between p-[25px] md:p-[75px] md:flex-row">
      <div className="flex-auto min-w-[50%] flex flex-col mb-[50px] md:mb-[unset]">
        <div className="h-fit">
          <Image src={Logo} alt="hi" height={36} width={250} />
        </div>
      </div>
      <div className="flex-auto min-w-[50%] flex flex-col">
        <div className="flex flex mb-[15px] ">
          <div className="flex-auto max-w-[33.33%] pr-[5px]">
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
          <div className="flex-auto max-w-[33.33%] px-[5px]">
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
                <div className="mr-[10px] max-w-[15px] min-w-[15px] max-h-[15px] min-h-[15px] md:max-w-[unset] md:min-w-[unset]">
                  <MapPin color="#002E6D" size={20} />
                </div>
                <p className="mt-[-5px] text-primary">
                  625 Market Street, 4th Floor <br />
                  San Francisco, CA 94105
                </p>
              </li>
              <li className="flex mb-[10px]">
                <div className="mr-[10px] max-w-[15px] min-w-[15px] max-h-[15px] min-h-[15px] md:max-w-[unset] md:min-w-[unset]">
                  <Phone
                    color="#002E6D"
                    size={20}
                    className="mr-[10px] aspect-square max-w-[15px] min-w-[15px] md:max-w-[unset] md:min-w-[unset]"
                  />
                </div>

                <p className="mt-[-5px] text-primary">415-977-0444</p>
              </li>
              <li className="flex mb-[10px]">
                <div className="mr-[10px] max-w-[15px] min-w-[15px] max-h-[15px] min-h-[15px] md:max-w-[unset] md:min-w-[unset]">
                  <Mail
                    color="#002E6D"
                    size={20}
                    className="mr-[10px] max-w-[15px] min-w-[15px] md:max-w-[unset] md:min-w-[unset]"
                  />
                </div>

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
