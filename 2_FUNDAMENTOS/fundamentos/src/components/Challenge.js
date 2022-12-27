const Challenge = () => {
    var num1 = 10
    var num2 = 20
    const handleSoma = () => {
        console.log(num1 + num2)
        console.log('Challenge 2 concluído!')
    }
    return (
        <div>
            <h1>Número 1 = {num1} | Número 2 = {num2}</h1>
            <button onClick={handleSoma}>Clique para ver a SOMA no console</button>
        </div>
    )

}

export default Challenge