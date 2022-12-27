const CarDetails = ({Marca, KM, Ano, newCar}) => {

  return (
    <div>
        <h2>Detalhes do Carro</h2>
        {newCar && <p>Este carro é NOVO!</p>}
        {!newCar && <p>Este carro é USADO!</p>}
        <ul>
            <li>Marca: {Marca}</li>
            <li>KM Rodados: {KM}</li>
            <li>Ano: {Ano}</li>
        </ul>
    </div>
  )

}

export default CarDetails