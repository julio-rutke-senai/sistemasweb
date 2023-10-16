import React, {useState} from 'react';
import './CadastroEvento.css';

function CadastroEvento() {
    const [evento, setEvento] = useState({
      titulo: '',
      descricao: '',
      data: '',
      local: ''
    });
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setEvento({ ...evento, [name]: value });
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Validação dos campos para evitar o envio de dados inválidos
      if (!evento.titulo || !evento.descricao || !evento.data || !evento.local) {
        alert('Preencha todos os campos!');
        return;
      }
  
      // Recupera os eventos já cadastrados no LocalStorage
      const eventosCadastrados = JSON.parse(localStorage.getItem('eventos')) || [];
  
          // Adiciona o novo evento à lista de eventos
          eventosCadastrados.push(evento);
  
          // Atualiza o LocalStorage com a lista de eventos atualizada
          localStorage.setItem('eventos', JSON.stringify(eventosCadastrados));
      
          // Limpa os campos após o cadastro
          setEvento({
            titulo: '',
            descricao: '',
            data: '',
            local: ''
          });
      
          alert('Evento cadastrado com sucesso!');
        };
      
        return (
          <div>
            <h1>Cadastro de Evento</h1>
            <form onSubmit={handleSubmit}>
              <label>Título:</label>
              <input type="text" name="titulo" value={evento.titulo} onChange={handleInputChange} />
      
              <label>Descrição:</label>
              <textarea name="descricao" value={evento.descricao} onChange={handleInputChange} />
      
              <label>Data:</label>
              <input type="date" name="data" value={evento.data} onChange={handleInputChange} />
      
              <label>Local:</label>
              <input type="text" name="local" value={evento.local} onChange={handleInputChange} />
              <button type="submit">Cadastrar</button>
        </form>
      </div>
    );
  }

export default CadastroEvento;
