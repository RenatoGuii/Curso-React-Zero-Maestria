import {useState} from 'react'

const ManageData = () => {

    const [numero, setNumero] = useState(0)
    console.log(numero)
  return (
    <div>
        <p>Valor: {numero}</p>
        <button onClick={() => setNumero(30)}>
        Alterar Valor</button>
    </div>
  )

}

export default ManageData