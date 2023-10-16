import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './DetalhesEvento.css'

function DetalhesEvento() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [evento, setEvento] = useState(null);

  useEffect(() => {
    // Recupera o evento pelo ID a partir do LocalStorage
    const eventosCadastrados = JSON.parse(localStorage.getItem('eventos')) || [];
    const eventoEncontrado = eventosCadastrados.find((evento, index) => index === Number(id));

    if (eventoEncontrado) {
      setEvento(eventoEncontrado);
    } else {
      alert('Evento não encontrado!');
      navigate('/lista');
    }
  }, [id, navigate]);

  const handleInscricao = () => {
    navigate(`/inscricao/${id}`);
  };

  return (
    <div>
      <h1>Detalhes do Evento</h1>
      {evento ? (
        <div>
          <h2>{evento.titulo}</h2>
          <p>{evento.descricao}</p>
          <p>Data: {evento.data}</p>
          <p>Local: {evento.local}</p>
        </div>
      ) : null}

      <button onClick={() => handleInscricao()}>Inscreva-se</button>
  
      <div className="participantes">
        <h3>Participantes:</h3>
        {evento && evento.participantes && evento.participantes.map((participante, index) => (
          <div key={index} className="participante">
            <p>Nome: {participante.nome}</p>
            <p>E-mail: {participante.email}</p>
            <p>Telefone: {participante.telefone}</p>
          </div>
        ))}
      </div>
      </div>
    );
  }
  
export default DetalhesEvento;
