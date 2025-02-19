import { useCalculatorContext } from "@/context/CalculatorContext"

const FunctionCards = () => {
  const { cards } = useCalculatorContext()

  return cards
}

export default FunctionCards
