// import { useContext } from "react"

// import { CounterContext } from "../context/CounterContext"

import { useCounterContext } from "../hooks/useCounterContext"

const Pagina2 = () => {
// const { counter } = useContext(CounterContext) //  Mesmo NOME
   const { counter } = useCounterContext()

  return (
    <div>
      <h1>About</h1>
      <p>O valor do contador é: {counter}</p>
    </div>
  )
}

export default Pagina2