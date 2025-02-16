import { useEffect, useState, useMemo } from "react"
import { EquationMap } from "@/types/calculator.types"
import { ConfigTypes } from "@/config/config.types"

interface UseCalculatorProps {
  config: ConfigTypes
  equation: EquationMap
  inputValue: number | string
}

interface UseCalculatorReturn {
  outputValue: number
  initialTarget?: number
}

const evaluateEquation = (equation: string, x: number): number => {
  if (!equation) {
    return x
  }

  const jsEquation: string = equation
    .replace(/\^/g, "**")
    .replace(/(\d)(x)/gi, "$1*$2")
  const evalString = jsEquation.replace(/x/g, x.toString())

  try {
    return eval(evalString)
  } catch (error) {
    console.error("Error evaluating equation:", equation, x, error)
    return x
  }
}

const useCalculator = ({
  config,
  equation,
  inputValue
}: UseCalculatorProps): UseCalculatorReturn => {
  const [answer, setAnswer] = useState<number>(Number(inputValue) || 0)

  const initialTarget = useMemo<number | undefined>(() => {
    const foundFunc = config?.functions.find((func) => func.type === "INPUT")
    return foundFunc ? foundFunc.id : undefined
  }, [config])

  useEffect(() => {
    if (inputValue && initialTarget !== undefined) {
      let currentVal = Number(inputValue)
      const newValues: Record<number, number> = { [initialTarget]: currentVal }

      const processFunction = (funcId: number | string): void => {
        const func = config.functions.find((f) => f.id === funcId)
        if (!func) return

        currentVal = evaluateEquation(equation[funcId] || "", currentVal)
        newValues[funcId] = currentVal

        if (func.target) {
          processFunction(func.target)
        }
      }

      processFunction(initialTarget)
      setAnswer(currentVal)
    } else {
      setAnswer(0)
    }
  }, [equation, inputValue, initialTarget, config.functions])

  return { outputValue: answer, initialTarget }
}

export default useCalculator
