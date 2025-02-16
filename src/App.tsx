import "@fontsource/inter"
import Atlys from "./pages/Atlys/Atlys"
import { CalculatorProvider } from "./context/CalculatorContext"

function App() {
  return (
    <CalculatorProvider>
      <div className="relative bg-[#F8F8F8] font-inter overflow-hidden">
        <div className="absolute inset-0 bg-[url('/background.png')] bg-fixed bg-center bg-cover bg-no-repeat opacity-4 min-h-full"></div>
        <Atlys />
      </div>
    </CalculatorProvider>
  )
}

export default App
