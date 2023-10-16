import React from 'react';
import { useNavigate } from 'react-router-dom';

function ListaEventos() {
  const navigate = useNavigate();
  // Recupera os eventos do LocalStorage
  const eventos = JSON.parse(localStorage.getItem('eventos')) || [];

  const handleDetalhes = (id) => {
    navigate(`/detalhes/${id}`);
  };

  const handleAlteracao = (id) => {
    navigate(`/alteracao/${id}`);
  };

  const handleExclusao = (id) => {
    // Filtra os eventos para excluir o evento com o ID informado
    const eventosAtualizados = eventos.filter((evento, index) => index !== id);

    // Atualiza o LocalStorage com a lista de eventos atualizada
    localStorage.setItem('eventos', JSON.stringify(eventosAtualizados));

    alert('Evento excluído com sucesso!');
    // Recarrega a página para exibir a lista atualizada
    window.location.reload();
  };

  return (
    <div>
      <h1>Listagem de Eventos</h1>
      <ul>
        {eventos.map((evento, index) => (
          <li key={index}>
            <strong>{evento.titulo}</strong>
            <p>{evento.descricao}</p>
            <p>Data: {evento.data}</p>
            <p>Local: {evento.local}</p>
            <button onClick={() => handleDetalhes(index)}>Detalhes</button>
            <button onClick={() => handleAlteracao(index)}>Alterar</button>
            <button onClick={() => handleExclusao(index)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaEventos;
