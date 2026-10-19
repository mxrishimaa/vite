import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import './App.css'
import { Header } from './components/Header.jsx'
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';

function App() {
  return (
    <BrowserRouter>
      <Header
        brand='Geração Tech'
        description='Sede Bezerra de Menezes'>
        <a href="#equipe">Equipe</a>
        <NavLink to="/contato">Contato</NavLink>
        <a href="#login">Login</a>
      </Header>

      <main className='container'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contato' element={<Contact/>}/>
          <Route path='*' element={<h2>Página não encontrada</h2>}/>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;