export interface LineData {
  IN?: HTMLElement | null
  OUT?: HTMLElement | null
  target?: number
}

export interface CalculatorContextType {
  lines: Record<string, LineData>
  updateLines: (
    id: string | number,
    data: LineData,
    type: "IN" | "OUT",
    target?: string
  ) => void
  equation: Record<string, string>
  inputValue: number | string
  updateInitialValue: (value: string) => void
  outputValue: number | string
  cards: React.ReactNode[]
  updateEquation: (id: number | string, value: string) => void
  linesDraw: React.ReactNode[] | null
  initialTarget: string
}
