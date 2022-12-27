const TemplateExpressions = () => {
    const name = 'Renato'
    const renato = {
        age: 19,
        job: 'programmer'
    }

    return (
        <div>
            <h1>Olá {name}!</h1>
            <p>Você atua como: {renato.job}</p>
            <p>{4 + 4}</p>
            <p>{console.log('JSX React')}</p>
        </div>
    )
}

export default TemplateExpressions