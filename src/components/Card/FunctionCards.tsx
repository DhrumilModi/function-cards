import { useCalculatorContext } from "@/context/CalculatorContext"

const FunctionCards = () => {
  const { cards } = useCalculatorContext()

  return (
    <div className="flex flex-wrap justify-center items-start gap-32 gap-y-26.5 xl:w-[62%] p-5">
      {cards}
    </div>
  )
}

export default FunctionCards
