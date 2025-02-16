export interface CardProps {
  title?: string
  children?: React.ReactNode
  id: string
  target: string | undefined | null
}

export interface FunctionData {
  id: number | "INPUT" | "OUTPUT"
  type: "INPUT" | "OUTPUT"
  target: number | null | undefined | "OUTPUT"
  equation: string | null
}

export interface FunctionCardProps {
  func: FunctionData
}
