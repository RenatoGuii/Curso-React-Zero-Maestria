import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div>
      <h2>Forms</h2>
      <MyForm user={{
        name: 'Renato Guimarães', 
        email: 'renatoguimaraesquirino@gmail.com',
        bio: 'Estou estudando react!',
        role: 'admin'
        }} />
    </div>
  );
}

export default App;
