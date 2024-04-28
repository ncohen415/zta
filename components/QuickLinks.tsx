"use client"
import React from "react"

type Props = {}

const QuickLinks = (props: Props) => {
  const goToSection = (id: string) => {
    const targetDiv = document.getElementById(id)
    targetDiv?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
  return (
    <div className="flex-auto max-w-[33.33%] px-[5px]">
      <h3 className="text-primary text-[20px] font-bold mb-[15px]">
        Quick Links
      </h3>
      <ul>
        <li
          onClick={() => goToSection("about-us")}
          className="mb-[10px] text-primary cursor-pointer"
        >
          About Us
        </li>
        <li
          onClick={() => goToSection("specialties")}
          className="mb-[10px] text-primary cursor-pointer"
        >
          Specialties
        </li>
        <li
          onClick={() => goToSection("team")}
          className="mb-[10px] text-primary cursor-pointer"
        >
          Our Team
        </li>
        <li
          onClick={() => goToSection("trainings")}
          className="text-primary cursor-pointer"
        >
          Trainings & Seminars
        </li>
      </ul>
    </div>
  )
}

export default QuickLinks
