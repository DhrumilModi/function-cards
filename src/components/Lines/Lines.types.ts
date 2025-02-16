import { RefObject } from "react"

export interface CurvedLineProps {
  input?: RefObject<HTMLElement> | undefined | null
  output?: RefObject<HTMLElement> | undefined | null
  p?: number
  strokeColor?: string
  strokeWidth?: number
  strokeOpacity?: number
  id?: string
}
