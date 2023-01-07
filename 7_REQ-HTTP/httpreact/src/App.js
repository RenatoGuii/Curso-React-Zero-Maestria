import './App.css';

import { useState, useEffect } from 'react'

const url = "http://localhost:3000/products"

function App() {
  const [products, setProducts] = useState([])

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  // 1° Resgatando dados
useEffect(() => {
  async function fetchData() {
  const res = await fetch(url)

  const data = await res.json()

  setProducts(data)
  }

  fetchData()
}, [])


// 2° Add de produtos
const handleSubmit = async (e) => {
  e.preventDefault()

  const product = {
    name, 
    price
  }
  
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(product),
  })
}

  return (
    <div className="App">
     <h2>Lista de produtos</h2>
     <ul>
      {products.map((product) => (
        <li key={product.id}>{product.name}: R${product.price}</li>
      ))}
     </ul>
     <div className="add-product">
      <h2>Adicionar produto</h2>
       <form onSubmit={handleSubmit}>
        <label>
          Nome do produto:
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Valor do produto:
          <input
            type="text"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <input type="submit" value="Criar" />
       </form>
     </div>
    </div>
  );
}

export default App;