import { ConfigTypes } from "./config.types"

export const equationMap = {
  1: "x^2",
  2: "2x+4",
  3: "x^2+20",
  4: "x-2",
  5: "x/2"
}

const config: ConfigTypes = {
  functions: [
    { id: 1, target: 2, type: "INPUT" },
    { id: 2, target: 4 },
    { id: 3, target: "OUTPUT", type: "OUTPUT" },
    { id: 4, target: 5 },
    { id: 5, target: 3 }
  ]
}

export const initialValueCalculator = 2
export default config
