
const UserDetails = ( {nome, idade, profissao} ) => {


    return (
    <div>
        <h2>{nome}</h2>
        <ul>
            <li>Idade: {idade}</li>
            <li>Profissão: {profissao}</li>
        </ul>
            {idade >= 18 ? (<p>Você PODE ser habilitado(a)!</p>) : (<p>Você NÃO PODE ser habilitado(a)!</p>)}
    </div>
  )

}

export default UserDetails