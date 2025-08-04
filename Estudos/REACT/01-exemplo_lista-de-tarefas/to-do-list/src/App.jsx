import React, { useState } from 'react';
import './App.css'; // Vamos usar um pouco de CSS para estilizar

// Componente principal da aplicação
function App() {
  // useState para armazenar a lista de tarefas.
  // Cada tarefa é um objeto com id, texto e status de conclusão.
  const [tarefas, setTarefas] = useState([]);
  
  // useState para o valor do campo de input, onde o usuário digita a nova tarefa.
  const [novaTarefa, setNovaTarefa] = useState('');

  // Função para adicionar uma nova tarefa à lista
  const adicionarTarefa = (e) => {
    // Evita que a página recarregue ao enviar o formulário
    e.preventDefault(); 
    if (novaTarefa.trim() === '') return; // Não adiciona tarefas vazias

    // Cria um novo objeto de tarefa
    const novaTarefaObj = {
      id: Date.now(), // ID único baseado na data e hora
      texto: novaTarefa,
      concluida: false,
    };

    // Adiciona a nova tarefa ao array de tarefas
    setTarefas([...tarefas, novaTarefaObj]);
    
    // Limpa o campo de input após adicionar a tarefa
    setNovaTarefa('');
  };

  // Função para alternar o status 'concluida' de uma tarefa
  const alternarConclusao = (id) => {
    // Mapeia o array de tarefas para encontrar a tarefa com o ID certo e inverter o status
    setTarefas(
      tarefas.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
      )
    );
  };

  return (
    <div className="container">
      <h1>Lista de Tarefas</h1>
      
      {/* Formulário para adicionar novas tarefas */}
      <form onSubmit={adicionarTarefa}>
        <input
          type="text"
          placeholder="Adicionar nova tarefa..."
          value={novaTarefa}
          // A cada mudança no input, atualiza o estado `novaTarefa`
          onChange={(e) => setNovaTarefa(e.target.value)}
        />
        <button type="submit">Adicionar</button>
      </form>
      
      {/* Lista de tarefas renderizada */}
      <ul>
        {/* Mapeia o array `tarefas` para renderizar um <li> para cada item */}
        {tarefas.map((tarefa) => (
          // A prop `key` é essencial para o React identificar cada item da lista
          <li
            key={tarefa.id}
            // Adiciona uma classe CSS 'concluida' se a tarefa estiver concluída
            className={tarefa.concluida ? 'concluida' : ''}
          >
            {/* O texto da tarefa */}
            <span>{tarefa.texto}</span>
            {/* Botão para alternar o status de conclusão */}
            <button onClick={() => alternarConclusao(tarefa.id)}>
              {tarefa.concluida ? 'Desfazer' : 'Concluir'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;