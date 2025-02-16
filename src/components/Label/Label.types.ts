import * as React from "react"
import { labelMap } from "./utils"

export interface LabelProps {
  children?: React.ReactNode
  type?: keyof typeof labelMap
  className?: string
}
