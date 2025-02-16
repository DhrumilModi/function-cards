import { useCalculatorContext } from "@/context/CalculatorContext"
import { useMemo } from "react"
import CurvedLineBetweenElements from "."

const CurvedLines = () => {
  const { linesDraw } = useCalculatorContext()

  return linesDraw
}

export default CurvedLines
