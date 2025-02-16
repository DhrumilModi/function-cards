interface FunctionConfigTypes {
  id: number
  target: number | null | "OUTPUT"
  type: "INPUT" | "OUTPUT"  // Made type required
  equation?: string
}

export interface ConfigTypes {
  functions: FunctionConfigTypes[]
}

export type { FunctionConfigTypes }
