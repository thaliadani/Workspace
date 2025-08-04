import React, { useState, useEffect } from 'react';
import './App.css';

// A URL base das imagens do TMDB
const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w500';

function App() {
  // useState para armazenar a lista de filmes
  const [filmes, setFilmes] = useState([]);
  
  // useState para o estado de carregamento, para mostrar uma mensagem enquanto a API responde
  const [carregando, setCarregando] = useState(true);

  // useState para lidar com possíveis erros da requisição
  const [erro, setErro] = useState(null);

  // useEffect para fazer a requisição à API quando o componente é montado
  useEffect(() => {
    // A chave da API é acessada a partir da variável de ambiente
    const apiKey = import.meta.env.VITE_TMDB_API_KEY;
    const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}&language=pt-BR`;

    // Função assíncrona para buscar os dados
    const buscarFilmes = async () => {
      try {
        // Define o estado de carregamento como true antes de iniciar a busca
        setCarregando(true);
        const resposta = await fetch(url);
        
        // Se a resposta não for bem-sucedida, lança um erro
        if (!resposta.ok) {
          throw new Error('Erro ao buscar filmes. Tente novamente mais tarde.');
        }

        const dados = await resposta.json();
        
        // Atualiza o estado com a lista de filmes
        setFilmes(dados.results);
      } catch (error) {
        // Se houver um erro, armazena a mensagem no estado de erro
        setErro(error.message);
      } finally {
        // Define o estado de carregamento como false, independentemente do sucesso ou erro
        setCarregando(false);
      }
    };

    buscarFilmes();
  }, []); // O array vazio [] garante que o efeito só execute uma vez, na montagem

  // Renderização condicional: mostra a mensagem de carregamento ou de erro
  if (carregando) {
    return <div className="container"><h2>Carregando filmes...</h2></div>;
  }

  if (erro) {
    return <div className="container error-message"><h2>{erro}</h2></div>;
  }

  return (
    <div className="container">
      <h1>Filmes em Alta</h1>
      <div className="filmes-lista">
        {filmes.map(filme => (
          // Componente para cada filme na lista. A prop `key` é fundamental.
          <div key={filme.id} className="filme-card">
            {/* O caminho da imagem do filme */}
            <img src={`${IMAGES_BASE_URL}${filme.poster_path}`} alt={filme.title} />
            {/* Título do filme */}
            <h3>{filme.title}</h3>
            {/* Avaliação do filme. .toFixed(1) formata para uma casa decimal */}
            <p>Avaliação: {filme.vote_average.toFixed(1)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;