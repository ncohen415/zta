"use client"
import React from "react"
import { Button } from "./ui/button"

type Props = {
  text: string
  secondary?: boolean
}

const MeetTheTeamButton = (props: Props) => {
  const goToTeam = async () => {
    if (window !== undefined) {
      window.location.href = "/team"
    }
  }
  return (
    <Button
      onClick={() => goToTeam()}
      size={"huge"}
      variant={props.secondary ? "secondary" : "default"}
    >
      {props.text}
    </Button>
  )
}

export default MeetTheTeamButton
