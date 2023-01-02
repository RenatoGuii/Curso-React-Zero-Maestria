import './App.css';
import MyComponent from './components/MyComponent';
import {useState} from 'react'
import Title from './components/Title';

function App() {

  const n = 15
  const [name] = useState('Renato')
  const redTitle = true

  return (
    <div>
        {/* CSS Global */}
        <h1>React com CSS</h1>
        {/* CSS de componente */}
        <MyComponent />
        <p>Este comentário é do App.js</p>
        {/* Inline CSS */}
        <p style={{color: 'blue', padding: '25px', borderTop: '2px solid red', backgroundColor: 'black'}}>
          Este elemento foi estilizado de maneira inline
        </p>
        {/* Inline CSS dinâmico */}
        <h2 style={n < 10 ? ({color: 'red', textAlign: 'center'}) : ({color: 'yellow', textAlign: 'center'})}>CSS Dinâmico</h2>

        <h2 style={n > 10 ? ({color: 'red', textAlign: 'center'}) : ({color: 'yellow', textAlign: 'center'})}>CSS Dinâmico</h2>

        <h2 style={name === "Renato" ? ({color: 'red', textAlign: 'center', backgroundColor: 'gray'}) : (null)}>Teste Nome</h2>
        
        {/* Classes Dinâmicas */}
        <h2 className={redTitle ? 'red-title' : 'title'}>Este título vai ter Classe Dinâmica</h2>

        {/* CSS Modules */}
        <Title />
    </div>
  );
}

export default App;
