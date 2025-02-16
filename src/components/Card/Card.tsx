import React from "react"
import { CardProps } from "./Card.types"
import CardRadio from "../CardRadio"

const Card: React.FC<CardProps> = ({ title, children, id, target }) => {
  return (
    <div className=" bg-white rounded-[15px] overflow-hidden border border-[#DFDFDF] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.05)]">
      <div className="py-[13px] px-[20px] min-h-[251px] min-w-[235px] flex flex-col justify-between">
        <div>
          {title && (
            <div className="flex items-end text-sm mb-4.5">
              <img src="/dots.svg" className="mr-[7px] mb-[4px]" alt="dots" />
              <h2 className="font-bold text-[#A5A5A5] text mt-[1px]">
                {title}
              </h2>
            </div>
          )}
          {children}
        </div>

        <div className="flex justify-between mb-1 mt-auto">
          <div className="flex">
            <CardRadio id={id} type="IN" target={target} />
            <span className="text-[10px] ml-1 font-medium text-[#585757]">
              input
            </span>
          </div>
          <div className="flex">
            <span className="text-[10px] mr-1 font-medium text-[#585757]">
              output
            </span>
            <CardRadio id={id} type="OUT" target={target} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
