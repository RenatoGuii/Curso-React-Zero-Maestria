import { useState } from "react"

const ConditionalRender = () => {
  
    const [x] = useState(true)
 
    const [name, setName] = useState("João")

    return (
    <div>
        <h1>Isso será exibido?</h1>
        {/*Condicional Simples (TRUE/FALSE)*/}
        {x && <p>Se x for TRUE, sim!</p>}
        {!x && <p>Agora x é FALSO!</p>}

        <h1>IF Ternário</h1>
        {/*Condicional IF/ELSE*/} 
        {name === "Renato" ? (<p>Seu nome é Renato!</p>) : (<p>Seu nome não é Renato!</p>)}
        <button onClick={() => setName("Renato")}>Clique Aqui!</button> 
    </div>
  )

}

export default ConditionalRender