"use client"
import React, { useEffect, useState } from "react"
import { Button } from "./ui/button"
import { Divide, Ham } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
  NavigationMenuLink,
} from "./ui/navigation-menu"
import Link from "next/link"
import Image from "next/image"
import Logo from "@/public/logo.png"
import MiniLogo from "@/public/logo-mini.png"
import { Squash as Hamburger } from "hamburger-react"

type Props = {}

const Header = (props: Props) => {
  const [windowWidth, setWindowWidth] = useState<number>()
  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false)

  useEffect(() => {
    const handleResize = () => {
      if (window !== undefined) {
        setWindowWidth(window.innerWidth)
      }
    }

    // Initial width calculation
    handleResize()

    // Event listener for window resize
    window.addEventListener("resize", handleResize)

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div className="h-[150px] absolute top-0 z-10 w-screen bg-transparent flex items-center justify-between px-[25px] md:px-[75px] max-w-[1900px]">
      <div className="h-fit">
        {windowWidth && windowWidth > 937 ? (
          <Image src={Logo} alt="hi" height={36} width={250} />
        ) : (
          <Image src={MiniLogo} alt="hi" height={36} width={116} />
        )}
      </div>

      <NavigationMenu
        className={`${
          openMobileMenu
            ? "flex"
            : windowWidth && windowWidth > 905
            ? "flex"
            : "hidden"
        } absolute top-0 left-0 w-screen h-screen bg-babyBlue md:relative md:top-[unset] md:left-[unset] md:w-[unset] md:h-[unset] md:bg-[unset]`}
      >
        <NavigationMenuList className="flex flex-col md:flex-row">
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={`${navigationMenuTriggerStyle()}`}>
                <p className="text-[30px] font-bold mb-[60px] md:text-base md:font-medium md:mb-[unset]">
                  About Us
                </p>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <p className="text-[30px] font-bold mb-[60px] md:text-base md:font-medium md:mb-[unset]">
                  {" "}
                  Specialties
                </p>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <p className="text-[30px] font-bold mb-[60px] md:text-base md:font-medium md:mb-[unset]">
                  {" "}
                  Our Team
                </p>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <p className="text-[30px] font-bold mb-[60px] md:text-base md:font-medium md:mb-[unset]">
                  {" "}
                  Trainings
                </p>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <p className="text-[30px] font-bold mb-[60px] md:text-base md:font-medium md:mb-[unset]">
                  {" "}
                  Contact
                </p>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="block absolute top-[45px] z-10 right-[25px] md:hidden">
        <Hamburger toggle={setOpenMobileMenu} toggled={openMobileMenu} />
      </div>
    </div>
  )
}

export default Header
