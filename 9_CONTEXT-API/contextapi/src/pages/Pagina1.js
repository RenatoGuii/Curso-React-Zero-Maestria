
import { useContext } from "react"

import { CounterContext } from "../context/CounterContext"

import ChangeCounter from "../components/ChangeCounter"

const Pagina1 = () => {
const { counter } = useContext(CounterContext) // Mesmo NOME

  return (
    <div>
        <h1>Home</h1>
        {/* Alterando Context */}
        <ChangeCounter />
        <p>O valor do contador é: {counter}</p>
    </div>
  )
}

export default Pagina1