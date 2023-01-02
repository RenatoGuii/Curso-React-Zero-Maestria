import './App.css';
import CarDetails from './components/CarDetails';

function App() {

  const carros = [ 
  {id: 1, Marca: 'Fiat', Ano: '2017', Cor: 'Preto'}, 
  {id: 2, Marca: 'Ford', Ano: '2020', Cor: 'Vermelho'}, 
  {id: 3, Marca: 'Ferrari', Ano: '2010', Cor: 'Amarelo'} 
  ]

  return (
    <div>
      <h1 style={{padding: '5px', textDecoration: 'underline', backgroundColor: 'black', color: 'white', width: '300px', margin: 'auto', textAlign: 'center'}}>Challenge CSS</h1>

      <div style={{width: '400px', margin: 'auto', border: '2px solid black', marginTop: '15px'}}>

        <h2 style={{textAlign: 'center', borderBottom: '2px solid black', paddingBottom: '20px'}}>Detalhes de Carros</h2>

        {carros.map((carro => (
          <CarDetails key={carro.id} marca={carro.Marca} ano={carro.Ano} cor={carro.Cor} />
        )))}
      </div>
    </div>
  );
}

export default App;
