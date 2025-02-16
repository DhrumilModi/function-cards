import React, { useEffect, useRef } from "react"
import { CardRadioProps } from "./CardRadio.types"
import { useCalculatorContext } from "@/context/CalculatorContext"

const CardRadio: React.FC<CardRadioProps> = ({ id, type, target }) => {
  const ref = useRef<HTMLLabelElement>(null)
  const { updateLines } = useCalculatorContext()

  useEffect(() => {
    if (ref.current) {
      updateLines(id, ref.current, type, String(target))
    }
  }, [id, type, target, updateLines]) // Ensure proper dependency updates

  const newId = `${type}_${id}`

  return (
    <div className="flex gap-10">
      <div className="inline-flex items-center">
        <label
          ref={ref}
          className="relative flex items-center cursor-pointer"
          htmlFor={newId}
        >
          {id === "OUTPUT" && (
            <span className="absolute bg-[#66A3FF] w-[7px] h-[7px] rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
          )}

          <input
            name={newId}
            type="radio"
            className="peer h-[15px] w-[15px] cursor-pointer appearance-none rounded-full border-2 border-[#DBDBDB] transition-all"
            id={newId}
            defaultChecked
          />

          <span className="absolute bg-[#66A3FF] w-[7px] h-[7px] rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
        </label>
      </div>
    </div>
  )
}

export default CardRadio
