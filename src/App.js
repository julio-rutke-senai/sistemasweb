import logo from './logo.svg';
import './App.css';

import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import CadastroEvento from './pages/CadastroEvento';
import ListaEventos from './pages/ListaEventos';
import DetalhesEvento from './pages/DetalhesEvento';
import AlteracaoEvento from './pages/AlteracaoEvento';
import InscricaoEvento from './pages/InscricaoEvento';

function App() {
  return (
    <div className="app">
      <Header />

      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/cadastro" element={<CadastroEvento />} /> 
          <Route path="/lista" element={<ListaEventos />} /> 
          <Route path="/detalhes/:id" element={<DetalhesEvento />} />
          <Route path="/alteracao/:id" element={<AlteracaoEvento />} />
          <Route path="/inscricao/:id" element={<InscricaoEvento />} />

        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
