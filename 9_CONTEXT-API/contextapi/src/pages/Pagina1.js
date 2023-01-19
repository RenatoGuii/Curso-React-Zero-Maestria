// import { useContext } from "react"

// import { CounterContext } from "../context/CounterContext"

import ChangeCounter from "../components/ChangeCounter";

// 4° Refatorando com hook
import { useCounterContext } from "../hooks/useCounterContext";

// 5° Context mais complexo
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const Pagina1 = () => {
  // const { counter } = useContext(CounterContext) // Mesmo NOME
  const { counter } = useCounterContext();

  // 5° Context mais complexo
  const { color, dispatch } = useTitleColorContext();

  // 6° Alterando State Complexo
  const setTitleColor = (color) => {
    dispatch({ type: color });
  };

  return (
    <div>
      <h1 style={{ color: color }}>Home</h1>
      {/* 3° Alterando Context */}
      <ChangeCounter />
      <p>O valor do contador é: {counter}</p>
      <div>
        <button onClick={() => setTitleColor('RED')} >Vermelho</button>
        <button onClick={() => setTitleColor('BLACK')} >Preto</button>
      </div>
    </div>
  );
};

export default Pagina1;
