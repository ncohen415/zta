import React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Handshake from "@/public/handshake.webp"

type Props = {}

const AboutUsSection = (props: Props) => {
  return (
    <div className="h-fit min-h-screen w-screen px-[25px] pt-[135px] flex flex-col md:px-[75px] lg:flex-row">
      <div className="flex flex-col flex-1 pr-[20px] pb-[calc(100vh-800px)]">
        <div>
          <h2 className=" text-[40px] md:text-[50px] lg:text-[65px] leading-[70px] tracking-tigher font-extrabold text-darkBlue mb-[45px]">
            About Us
          </h2>
          <p className="text-[20px] tracking-tighter text-darkBlue font-medium mb-[45px]">
            I'm baby church-key meh disrupt jean shorts four dollar toast
            jianbing. Hell of gorpcore next level cred. Cornhole health goth 3
            wolf moon yuccie fanny pack coloring book. Schlitz unicorn 3 wolf
            moon shabby chic tbh prism. Williamsburg vexillologist pug raclette
            pickled shabby chic. Four loko ennui marxism, stumptown everyday
            carry la croix readymade jianbing cred next level pop-up.
            <br />
            <br />
            YOLO artisan bushwick asymmetrical. Bespoke hexagon bodega boys
            biodiesel 3 wolf moon ascot vexillologist DIY blackbird spyplane
            mixtape flannel hoodie yes plz. Scenester tumblr truffaut tonx fit
            yuccie, yes plz venmo flexitarian. Unicorn prism lomo trust fund hot
            chicken cloud bread gorpcore meh normcore jean shorts vibecession
            ethical.
          </p>
        </div>
        <Button size={"huge"}>Contact Us</Button>
      </div>
      <div className="flex-1 relative pl-[20px] hidden lg:block">
        <div className="absolute right-0 bg-primary h-[800px] w-[600px]" />
        <div className="absolute right-[15px] top-[15px] h-[800px] w-[600px]">
          <Image
            src={Handshake}
            alt="Golden Gate Bridge"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      </div>
    </div>
  )
}

export default AboutUsSection
