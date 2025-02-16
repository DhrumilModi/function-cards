export interface CardProps {
  title?: string
  children?: React.ReactNode
  id: string
  setLines: (lines: object) => void
  target: string
}

export interface FunctionData {
  id: number | "INPUT" | "OUTPUT"
  type: "INPUT" | "OUTPUT"
  target: number | null | undefined
  equation: string | null
}

export interface FunctionCardProps {
  func: FunctionData
}
