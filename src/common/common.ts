interface FunctionConfig {
  id: number
  equation: string
  target: number | null
  type?: "INPUT" | "OUTPUT" // Optional because only some functions have it
}

interface Config {
  initialValue: number
  functions: FunctionConfig[]
}

export const config: Config = {
  initialValue: 2,
  functions: [
    { id: 1, equation: "x^2", target: 2, type: "INPUT" },
    { id: 2, equation: "2x+4", target: 4 },
    { id: 3, equation: "x^2+20", target: null, type: "OUTPUT" },
    { id: 4, equation: "x-2", target: 5 },
    { id: 5, equation: "x/2", target: 3 }
  ]
}
