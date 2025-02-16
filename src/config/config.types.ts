interface FunctionConfigTypes {
  id: number
  target: number | null
  type?: "INPUT" | "OUTPUT" // Optional because only some functions have it
  number?: number
}

export interface ConfigTypes {
  initialValue: number
  functions: FunctionConfigTypes[]
  currentVal: number
}
