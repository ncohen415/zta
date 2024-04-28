"use client"
import React from "react"
import { Button } from "./ui/button"

type Props = {
  text: string
  secondary?: boolean
}

const ContactButton = (props: Props) => {
  const sendEmail = async () => {
    if (window !== undefined) {
      window.location.href = "mailto:info@ztalaw.com"
    }
  }
  return (
    <Button
      onClick={() => sendEmail()}
      size={"huge"}
      variant={props.secondary ? "secondary" : "default"}
    >
      {props.text}
    </Button>
  )
}

export default ContactButton
