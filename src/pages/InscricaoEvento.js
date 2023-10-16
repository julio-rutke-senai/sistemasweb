import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function InscricaoEvento() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

  const handleInscricao = (event) => {
    event.preventDefault();
    // Validação dos campos para evitar o envio de dados inválidos
    if (!nome || !email || !telefone) {
      alert('Preencha todos os campos!');
      return;
    }
    // Recupera os eventos cadastrados no LocalStorage
    const eventosCadastrados = JSON.parse(localStorage.getItem('eventos')) || [];
    const eventoEncontrado = eventosCadastrados.find((evento, index) => index === Number(id));

    if (eventoEncontrado) {
      // Verifica se já existe uma lista de participantes no evento
      if (!eventoEncontrado.participantes) {
        eventoEncontrado.participantes = [];
      }

      // Adiciona a inscrição na lista de participantes do evento
      eventoEncontrado.participantes.push({
        nome,
        email,
        telefone
      });

      // Atualiza o LocalStorage com o evento atualizado
      localStorage.setItem('eventos', JSON.stringify(eventosCadastrados));

      alert('Inscrição realizada com sucesso!');
      navigate(`/detalhes/${id}`);
    } else {
      alert('Evento não encontrado!');
      navigate('/lista');
    }
  };

  return (
    <div>
      <h1>Inscrição em Evento</h1>
      <form onSubmit={handleInscricao}>
        <label>Nome:</label>
        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />

        <label>E-mail:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Telefone:</label>
        <input type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)} />

        <button type="submit">Realizar Inscrição</button>
      </form>
    </div>
  );
}

export default InscricaoEvento;
