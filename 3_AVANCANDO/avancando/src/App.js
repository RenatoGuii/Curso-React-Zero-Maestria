import './App.css';

// Importar iumagem do asset
import Paisagem2 from "./assets/image2.webp"

// Components
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragments from './components/Fragments';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';

function App () {

  const name = "Renato"
  const cars = [
    {id: 1, Marca: 'Ford', KM: 0, Ano: '2005', newCar: true},
    {id: 2, Marca: 'Jeep', KM: 210, Ano: '2008', newCar: false},
    {id: 3, Marca: 'Celta', KM: 376, Ano: '2016', newCar: false}
  ]
  function showMessage () {
    console.log ("Função ativada no elemento pai!")
  }

  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/* Imagem com public */}
      <div>
        <img src="/image1.webp" alt="Paisagem1" />
      </div>
      {/* Imagem com Assets */}
      <div>
        <img src={Paisagem2} alt="Paisagem2" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/* Props */}
      <ShowUserName name={name}/>
      {/* Destructuring */}
      <CarDetails Marca="Jeep" KM={15782} Ano="2007" newCar={false}/>
      {/* Reaproveitamento */}
      <CarDetails Marca="Ford" KM={0} Ano="2023" newCar={true}/>
      <CarDetails Marca="Fiat" KM={6800} Ano="2018" newCar={false}/> 
      {/* Loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails key={car.id} Marca={car.Marca} KM={car.KM} Ano={car.Ano} newCar={car.newCar} />
      ))}
      {/* Fragments */}
      <Fragments propFragment="Teste" />
      {/* Children */}
      <Container myValue='testing' > 
        <p>Este é o conteúdo do container</p>
      </Container>
      {/* Executar Função */}
      <ExecuteFunction myFunction={showMessage}/>
    </div>

  );
}

export default App;
