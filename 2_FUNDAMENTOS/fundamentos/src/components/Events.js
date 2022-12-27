const Events = () => {

    const handleMyEvent = (e) => {
        console.log(e)
        console.log('Ativou o evento!')
    }

    const renderSomething = (x) => {
        if (x) {
            return <h1>Renderizando isso!</h1>
        } else {
            return <h1>Também posso renderizar isso!</h1>
        }
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique Aqui!</button>
                </div>
            <div>
                {/* Função no JSX(HTML) */}
                {/* Inline (Recomendado) */}
                <button onClick={() => console.log('Clicou!')}>Clique aqui 2!</button>

                {/* Com corpo (Não Recomendado) */}
                <button onClick={() => {
                    if (true) {
                        console.log('Clicou!')
                    }
                }}>Clique aqui 3!</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )

}

export default Events