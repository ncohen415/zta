"use client"
import React, { useState, useRef, useEffect } from "react"

type Props = {}

interface HighlightPositioning {
  index: number
  height: number | undefined
  width: number
  left: number
}

const OurSpecialtiesContent = (props: Props) => {
  const ownersRef = useRef<HTMLDivElement | null>(null)
  const housingRef = useRef<HTMLDivElement | null>(null)
  const detainerRef = useRef<HTMLDivElement | null>(null)
  const [highlight, setHighlight] = useState<HighlightPositioning>({
    index: 0,
    height: 0,
    width: 0,
    left: 0,
  })

  useEffect(() => {
    let _left: number
    let height: number
    let width: number
    if (ownersRef.current) {
      const { left } = ownersRef.current.getBoundingClientRect()
      _left = left
      height = ownersRef.current.offsetHeight
      width = ownersRef.current.offsetWidth
      setHighlight({
        index: 0,
        height: height,
        width: width,
        left: _left,
      })
    }
    // return () => {
    //   setHighlight({
    //     index: 0,
    //     height: height,
    //     width: width,
    //     left: _left,
    //   })
    // }
  }, [])

  console.log(highlight)
  const handleChangeMenuItem = (currentRef: HTMLDivElement) => {}

  return (
    <>
      <div className="relative flex pt-[50px] mb-[25px]">
        <div
          className={`absolute bg-secondary transition-all top-[50px] h-[${highlight.height}px] w-[${highlight.width}px]`}
        />
        <div
          ref={ownersRef}
          className="flex-auto flex justify-start border-b-2 border-secondary pb-[20px] pt-[20px]"
        >
          <h1 className="text-[30px] font-bold text-white">
            Owners & Managers
          </h1>
        </div>
        <div
          ref={housingRef}
          className="flex-auto flex justify-center border-b-2 border-secondary pb-[20px] pt-[20px]"
        >
          <h1 className="text-[30px] text-white font-bold">
            Affordable Housing
          </h1>
        </div>
        <div
          ref={detainerRef}
          className="flex-auto flex justify-end border-b-2 border-secondary pt-[20px] pb-[20px]"
        >
          <h1 className="text-[30px] font-bold text-white">
            Unlawful Detainer
          </h1>
        </div>
      </div>

      <div className="flex flex-auto pt-[50px]">
        <div className="flex-auto pr-[20px] min-w-[50%]">
          <p className="text-[20px] text-white font-semibold w-[100%] max-w-[675px]">
            Affordable housing remains one of our sub-specialties with our
            attorneys having substantial experience and knowledge of affordable
            housing programs. Our office takes a pragmatic and reasoned approach
            in consulting with our subsidized and non-profit housing provider
            clients and litigating on their behalf with due consideration given
            to their housing retention goals and policies.
          </p>
        </div>
        <div className="flex-auto pl-[20px]">
          <h1>
            Affordable housing remains one of our sub-specialties with our
            attorneys having substantial experience and knowledge of affordable
            housing programs. Our office takes a pragmatic and reasoned approach
            in consulting with our subsidized and non-profit housing provider
            clients and litigating on their behalf with due consideration given
            to their housing retention goals and policies.
          </h1>
        </div>
      </div>
    </>
  )
}

export default OurSpecialtiesContent
