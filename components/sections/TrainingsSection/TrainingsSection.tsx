import React from "react"
import { Button } from "@/components/ui/button"
import { getTrainings } from "@/actions"

type Props = {}

interface Training {
  title: string
  company: string
}

const TrainingsSection = async (props: Props) => {
  const data = await getTrainings()
  const trainings = data.data.allTrainings

  return (
    <div className="flex flex-col min-h-screen w-screen px-[25px] pt-[135px] bg-lightBlue pb-[75px] md:px-[75px]">
      <div className="flex flex-col justify-between items-center mb-[50px] md:flex-row">
        <h2 className="text-[31px] md:text-[40px] lg:text-[65px] leading-[70px] tracking-tigher font-extrabold text-white m-0">
          Trainings & Seminars
        </h2>
        <Button className="font-semibold" size={"huge"} variant={"secondary"}>
          Contact us to Learn More
        </Button>
      </div>
      <p className="text-white text-[20px] mb-[50px] font-semibold">
        Zanghi Torres Arshawsky LLP provides comprehensive training sessions for
        our clients, covering a wide array of topics. These include essential
        considerations in property management, such as fair housing issues,
        reasonable accommodation concerns, and program compliance. Additionally,
        our training addresses the enforcement of lease provisions and offers
        insights into the fundamental principles of unlawful detainer (eviction)
        actions.
      </p>
      <div className="justify-items-center grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-5 lg:grid-cols-4 lg:gap-4">
        {trainings?.map((training: Training) => {
          return (
            <div className="aspect-square bg-primary py-[20px] px-[20px] flex flex-col justify-center items-center w-[350px] md:w-[100%] ">
              <p className="text-white text-center font-semibold mb-[20px] opacity-70">
                {training.company}
              </p>
              <p className="text-white text-center font-bold text-[20px]">
                {training.title}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TrainingsSection
