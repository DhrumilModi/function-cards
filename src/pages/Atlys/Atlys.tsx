import React from "react"
import FunctionCards from "@/components/Card/FunctionCards"
import CurvedLines from "@/components/Lines/CurvedLines"

const Atlys: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-screen p-5 z-1">
      <FunctionCards />
      <CurvedLines />
    </div>
  )
}

export default Atlys
