import React from "react"
import { InputProps } from "./Input.types"

const Input: React.FC<InputProps> = ({
  value,
  label,
  disabled = false,
  onChange = () => {},
  className = "",
  classNameInput = "",
  formatter = (value) => {
    if (/^[0-9+\-*/^().\sx]*$/.test(value)) return true
    else return false
  }
}: InputProps) => {
  // Regular expression to allow only numbers, spaces, and the allowed operators

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value?.toString()
    if (formatter(newValue)) {
      onChange(newValue)
    }
  }

  return (
    <div className={className}>
      {label && (
        <div className="text-[#252525] text-xs font-medium mb-1">{label}</div>
      )}
      <div
        className={
          classNameInput
            ? ""
            : `bg-white border border-[#D3D3D3] rounded-[8px] overflow-hidden ${
                disabled ? `text-[rgba(211, 211, 211, 1)}` : ""
              }`
        }
      >
        <input
          value={value}
          onChange={handleChange}
          className={
            classNameInput
              ? classNameInput
              : `w-full h-[32px] bg-white border-none 
             px-3 text-[#252525] text-xs font-medium outline-none disabled:border-[#D3D3D3]
             disabled:bg-[rgba(211,211,211,0.3)] disabled:text-[rgba(245, 245, 245, 1)] disabled:opacity-45 `
          }
          placeholder="Enter equation..."
          disabled={disabled}
        />
      </div>
    </div>
  )
}

export default Input
