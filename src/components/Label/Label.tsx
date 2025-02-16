import React from "react"
import { LabelProps } from "./Label.types"
import { labelMap } from "./utils"

const Label: React.FC<LabelProps> = ({
  children,
  className = "",
  type = "warning"
}: LabelProps) => {
  const color = labelMap[type]

  return (
    <div
      className={`${color} rounded-[14px]  text-white font-medium px-3 py-0.75 text-xs min-w-[115px] ${
        className ? className : ""
      }`}
    >
      {children}
    </div>
  )
}

export default Label
