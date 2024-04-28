import React from "react"
import { getTeamMembers } from "@/actions"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import Image from "next/image"
type Props = {}

interface Headshot {
  url: string
}

interface TeamMember {
  name: string
  teamMemberType: string
  email: string
  bio: string
  headshot: Headshot
  extension?: string
}

const page = async (props: Props) => {
  const data = await getTeamMembers()
  const teamMembers = data.data.allTeamMembers
  const partners = teamMembers.filter(
    (member: TeamMember) => member.teamMemberType === "partner"
  )
  const associates = teamMembers.filter(
    (member: TeamMember) => member.teamMemberType === "associate"
  )
  const ofCounsel = teamMembers.filter(
    (member: TeamMember) => member.teamMemberType === "of-counsel"
  )
  const caseByCase = teamMembers.filter(
    (member: TeamMember) => member.teamMemberType === "case-by-case"
  )

  console.log(teamMembers)

  return (
    <div className="h-fit min-h-screen pb-[75px] w-screen bg-babyBlue opacity-80 pt-[150px] top-0 px-[25px] md:px-[75px]">
      <div className="mb-[40px]">
        <h1 className="text-[45px] font-bold text-primary tracking-tight">
          Partners
        </h1>
        <Accordion type="single" collapsible className="w-full">
          {partners?.map((partner: TeamMember, index: number) => {
            return (
              <AccordionItem value={`${index}`}>
                <AccordionTrigger>
                  <div className="flex flex-col items-start">
                    <Image
                      alt=""
                      src={`${partner.headshot.url}`}
                      width={200}
                      height={200}
                      className="mb-[20px]"
                    />
                    <h3 className="text-[18px] text-primary font-semibold">
                      {partner.name}
                    </h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col">
                    <div className="flex mb-[20px]">
                      <a
                        className="mr-[20px] text-[15px] text-primary"
                        href={`mailto:${partner.email}`}
                      >
                        {partner.email}
                      </a>
                      <p className="text-[15px] text-primary">
                        Extension: {partner.extension}
                      </p>
                    </div>
                    <p className="text-[15px] text-primary">{partner.bio}</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            )
          })}
        </Accordion>
      </div>

      <div className="mb-[40px]">
        <h1 className="text-[45px] font-bold text-primary tracking-tight">
          Associates
        </h1>
        <Accordion type="single" collapsible className="w-full">
          {associates?.map((associate: TeamMember, index: number) => {
            return (
              <AccordionItem value={`${index}`}>
                <AccordionTrigger>
                  <div className="flex flex-col items-start">
                    <Image
                      alt=""
                      src={`${associate.headshot.url}`}
                      width={200}
                      height={200}
                      className="mb-[20px]"
                    />
                    <h3 className="text-[18px] text-primary font-semibold">
                      {associate.name}
                    </h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col">
                    <div className="flex mb-[20px]">
                      <a
                        className="mr-[20px] text-[15px] text-primary"
                        href={`mailto:${associate.email}`}
                      >
                        {associate.email}
                      </a>
                      <p className="text-[15px] text-primary">
                        Extension: {associate.extension}
                      </p>
                    </div>
                    <p className="text-[15px] text-primary">{associate.bio}</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            )
          })}
        </Accordion>
      </div>

      <div className="mb-[40px]">
        <h1 className="text-[45px] font-bold text-primary tracking-tight">
          Of Counsel
        </h1>
        <Accordion type="single" collapsible className="w-full">
          {ofCounsel?.map((counsel: TeamMember, index: number) => {
            return (
              <AccordionItem value={`${index}`}>
                <AccordionTrigger>
                  <div className="flex flex-col items-start">
                    <Image
                      alt=""
                      src={`${counsel.headshot.url}`}
                      width={200}
                      height={200}
                      className="mb-[20px]"
                    />
                    <h3 className="text-[18px] text-primary font-semibold">
                      {counsel.name}
                    </h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col">
                    <div className="flex mb-[20px]">
                      <a
                        className="mr-[20px] text-[15px] text-primary"
                        href={`mailto:${counsel.email}`}
                      >
                        {counsel.email}
                      </a>
                      <p className="text-[15px] text-primary">
                        Extension: {counsel.extension}
                      </p>
                    </div>
                    <p className="text-[15px] text-primary">{counsel.bio}</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            )
          })}
        </Accordion>
      </div>

      <div className="mb-[40px]">
        <h1 className="text-[45px] font-bold text-primary tracking-tight">
          Of Counsel
        </h1>
        <Accordion type="single" collapsible className="w-full">
          {caseByCase?.map((case_: TeamMember, index: number) => {
            return (
              <AccordionItem value={`${index}`}>
                <AccordionTrigger>
                  <div className="flex flex-col items-start">
                    <Image
                      alt=""
                      src={`${case_.headshot.url}`}
                      width={200}
                      height={200}
                      className="mb-[20px]"
                    />
                    <h3 className="text-[18px] text-primary font-semibold">
                      {case_.name}
                    </h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col">
                    <div className="flex mb-[20px]">
                      <a
                        className="mr-[20px] text-[15px] text-primary"
                        href={`${case_.email}`}
                      >
                        {case_.email}
                      </a>
                      {case_.extension ? (
                        <p className="text-[15px] text-primary">
                          Extension: {case_.extension}
                        </p>
                      ) : (
                        ""
                      )}
                    </div>
                    <p className="text-[15px] text-primary">{case_.bio}</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            )
          })}
        </Accordion>
      </div>
      <h1>Case by Case Associations</h1>
    </div>
  )
}

export default page
