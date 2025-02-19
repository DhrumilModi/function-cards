import "@fontsource/inter"
import Atlys from "./pages/Atlys/Atlys"
import { CalculatorProvider } from "./context/CalculatorContext"

function App() {
  return (
    <CalculatorProvider>
      <main className="relative bg-[#F8F8F8] font-inter overflow-hidden  before:bg-[url('/background.png')] before:opacity-4 before:content-['*'] before:inline before:absolute before:inset-0 before:bg-fixed before:bg-center before:bg-cover before:bg-no-repeat before:min-h-ful z-0 before:-z-1 min-h-screen">
        <Atlys />
      </main>
    </CalculatorProvider>
  )
}

export default App
