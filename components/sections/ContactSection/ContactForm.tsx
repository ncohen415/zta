"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

type Props = {}

const ContactForm = (props: Props) => {
  const [name, setName] = useState<string>("")
  const [subject, setSubject] = useState<string>("")
  const [message, setMessage] = useState<string>("")

  return (
    <div>
      <Input
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Full Name"
        className="py-[25px]"
      />
      <Input
        onChange={(e) => setSubject(e.target.value)}
        type="text"
        placeholder="Subject"
        className="py-[25px]"
      />
      <Textarea
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Message"
        className="py-[25px]"
      />
      <a
        href={`${
          name.length < 1 || subject.length < 1 || message.length < 1
            ? ""
            : `mailto:info@ztalaw.com?subject=${subject}%20(${name})&body=${message}`
        }`}
        className={"block h-fit w-fit"}
      >
        <Button
          disabled={name.length < 1 || subject.length < 1 || message.length < 1}
          onClick={() => console.log("send")}
          size={"huge"}
        >
          Send
        </Button>
      </a>
    </div>
  )
}

export default ContactForm
