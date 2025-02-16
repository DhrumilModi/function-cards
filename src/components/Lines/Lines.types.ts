import { RefObject } from "react"

export interface CurvedLineProps {
  input?: HTMLElement | undefined | null
  output?: HTMLElement | undefined | null
  p?: number
  strokeColor?: string
  strokeWidth?: number
  strokeOpacity?: number
  id?: string
}
