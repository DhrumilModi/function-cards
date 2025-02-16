import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useMemo,
  useCallback
} from "react"
import defaultConfig from "@/config"
import useCalculator from "@/hooks/useCalculator"
import { equationMap, initialValueCalculator } from "@/config/config"
import FunctionCard from "@/components/Card"
import { CalculatorContextType, LineData } from "./Calculator.Types"
import CurvedLineBetweenElements from "@/components/Lines/CurvedLineBetweenElements"
import { FunctionData } from "@/components/Card/Card.types"
import { FunctionConfigTypes } from "@/config/config.types"

const CalculatorContext = createContext<CalculatorContextType | undefined>(
  undefined
)

export const CalculatorProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [lines, setLines] = useState<Record<string, LineData>>({})
  const [equation, setEquation] = useState(equationMap)
  const [inputValue, setInputValue] = useState<number | string>(
    initialValueCalculator
  )

  const updateLines = useCallback(
    (
      id: string | number,
      data: HTMLElement,
      type: "IN" | "OUT",
      target?: number | string
    ) => {
      setLines((prev) => ({
        ...prev,
        [id]: { ...prev[id], [type]: data, target }
      }))
    },
    []
  )

  const { outputValue, initialTarget } = useCalculator({
    config: defaultConfig,
    equation,
    inputValue
  })

  const updateEquation = useCallback((id: number | string, value: string) => {
    setEquation((prev) => ({
      ...prev,
      [id]: value
    }))
  }, [])

  const updateInitialValue = useCallback((value: string) => {
    if (value && !value?.includes("-")) {
      setInputValue(Number(value))
    } else {
      setInputValue(value)
    }
  }, [])

  const cards = useMemo(
    () =>
      defaultConfig.functions.map((func: FunctionConfigTypes) => (
        <FunctionCard
          key={func.id}
          func={
            {
              ...func,
              type: func.type as "INPUT" | "OUTPUT" | undefined,
              equation: equation[func.id] || null
            } as FunctionData
          }
        />
      )),
    [equation]
  )

  const linesArray = useMemo(() => {
    if (!cards) {
      return null
    }

    console.log("lines", lines)
    return Object.entries(lines)
      .map(([key, ref]) =>
        (lines[key]?.IN && lines[key]?.OUT) ||
        lines[key]?.target ||
        key === "INPUT" ? (
          <CurvedLineBetweenElements
            key={key}
            input={lines[key].OUT}
            output={ref.target ? lines[ref.target].IN : lines["OUTPUT"].OUT}
            id={key}
          />
        ) : null
      )
      .filter((x) => x)
  }, [lines])

  const value = {
    lines,
    updateLines,
    equation,
    inputValue,
    updateInitialValue,
    outputValue,
    cards,
    updateEquation,
    linesDraw: linesArray,
    initialTarget: String(initialTarget)
  }

  return (
    <CalculatorContext.Provider value={value}>
      {children}
    </CalculatorContext.Provider>
  )
}

export const useCalculatorContext = () => {
  const context = useContext(CalculatorContext)
  if (context === undefined) {
    throw new Error(
      "useCalculatorContext must be used within a CalculatorProvider"
    )
  }
  return context
}
