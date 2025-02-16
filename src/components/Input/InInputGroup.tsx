import React from "react"
import { InputProps } from "./Input.types"
import CardRadio from "../CardRadio"
import Input from "./Input"

const InInputGroup: React.FC<InputProps> = ({
  value,
  label,
  disabled = false,
  onChange = () => {},
  className = "",
  id,
  target
}: InputProps) => {
  return (
    <div className={className}>
      {label && (
        <div className="text-[#252525] text-xs font-medium mb-1">{label}</div>
      )}
      <div
        className={`border-[2px]  ${
          id === "OUTPUT" ? "border-[#2DD179]" : "border-[#FFC267]"
        } bg-white rounded-[15px] focus:shadow-md  focus:shadow-[#FFC267] ${
          disabled ? `text-[rgba(211, 211, 211, 1)}` : ""
        }`}
      >
        <div className="flex items-center space-x-1 w-[115px] ">
          {id === "OUTPUT" && (
            <div className="px-3 pr-4 border-r-1 border-[#C5F2DA] self-stretch flex">
              <CardRadio id={id} type={"IN"} target={target} />
            </div>
          )}

          <Input
            type="IN"
            // className="w-full h-[50px] rounded-[15px] border-none  bg-white px-3 text-black outline-none"
            placeholder="Enter text"
            value={value}
            onChange={onChange}
            classNameInput="w-full h-[50px] rounded-[15px] border-none   bg-white px-3 pl-4 text-black outline-none"
            formatter={(value) => {
              if (/^-?\d*$/.test(value)) {
                return true
              } else {
                return false
              }
            }}
          />

          {id === "INPUT" && (
            <div className="px-3 pl-4 border-l-1 border-[#FFEED5] self-stretch flex">
              <CardRadio id={id} type={"OUT"} target={target} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default InInputGroup
