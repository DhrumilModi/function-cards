interface FunctionConfigTypes {
  id: number
  target: number | null | "OUTPUT"
  type?: "INPUT" | "OUTPUT" // Optional because only some functions have it
  number?: number
}

export interface ConfigTypes {
  functions: FunctionConfigTypes[]
}
