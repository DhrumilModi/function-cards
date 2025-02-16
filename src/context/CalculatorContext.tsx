import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useMemo,
  useCallback,
  useEffect
} from "react"
import defaultConfig from "@/config"
import useCalculator from "@/hooks/useCalculator"
import { equationMap, initialValueCalculator } from "@/config/config"
import FunctionCard from "@/components/Card"
import { CalculatorContextType, LineData } from "./Calculator.Types"
import CurvedLineBetweenElements from "@/components/Lines/CurvedLineBetweenElements"

const CalculatorContext = createContext<CalculatorContextType | undefined>(
  undefined
)

export const CalculatorProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [lines, setLines] = useState<Record<string, LineData>>({})
  const [equation, setEquation] = useState(equationMap)
  const [inputValue, setInputValue] = useState(initialValueCalculator)

  const updateLines = useCallback(
    (id: string | number, data: HTMLLabelElement, type, target) => {
      setLines((prev) =>
        Object.assign(
          {},
          {
            ...prev,
            [id]: { ...prev[id], [type]: data, target }
          }
        )
      )
    },
    []
  )

  useEffect(() => {
    console.log("lines", lines)
  }, [lines])

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
      defaultConfig.functions.map((func) => (
        <FunctionCard key={func.id} func={func} />
      )),
    []
  )

  const linesArray = useMemo(() => {
    if (!cards) {
      return null
    }

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

  console.log("initialTarget", initialTarget)

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
    initialTarget
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
