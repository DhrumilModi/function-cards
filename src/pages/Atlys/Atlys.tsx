import React from "react"
import FunctionCards from "@/components/Card/FunctionCards"
import CurvedLines from "@/components/Lines/CurvedLines"

const Atlys: React.FC = () => {
  return (
    <div className="xl:w-[75%] ml-auto mr-auto  ">
      <div>
        <div className="w-full text-center flex flex-row flex-wrap items-center justify-center">
          <FunctionCards />
          <CurvedLines />
        </div>
      </div>
    </div>
  )
}

export default Atlys
