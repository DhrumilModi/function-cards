import { RefObject } from "react"

export interface CurvedLineProps {
  input?: RefObject<HTMLElement>
  output?: RefObject<HTMLElement>
  p?: number
  strokeColor?: string
  strokeWidth?: number
  strokeOpacity?: number
  id?: string
}
