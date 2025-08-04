import { useState, useEffect } from 'react';
import './App.css';
import type { WeatherApiResponse } from './types';

function App() {
  // O estado para armazenar os dados do tempo, tipado como `WeatherApiResponse` ou `null`
  const [clima, setClima] = useState<WeatherApiResponse | null>(null);
  
  // O estado para o nome da cidade que o usuário digita
  const [cidade, setCidade] = useState<string>('Ribeirão Preto');
  
  // O estado para controlar o carregamento
  const [carregando, setCarregando] = useState<boolean>(true);
  
  // O estado para exibir mensagens de erro
  const [erro, setErro] = useState<string | null>(null);

  // useEffect para buscar os dados do tempo quando a cidade muda
  useEffect(() => {
    // A chave da API é acessada a partir da variável de ambiente
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`;

    const buscarClima = async () => {
      try {
        setCarregando(true);
        setErro(null); // Limpa qualquer erro anterior
        
        const resposta = await fetch(url);

        // Se a resposta não for ok, lança um erro com a mensagem da API
        if (!resposta.ok) {
          const erroData = await resposta.json();
          throw new Error(erroData.message || 'Cidade não encontrada!');
        }

        const dados: WeatherApiResponse = await resposta.json();
        setClima(dados);
      } catch (error: any) {
        setErro(error.message);
        setClima(null);
      } finally {
        setCarregando(false);
      }
    };

    buscarClima();
  }, [cidade]); // O efeito é executado sempre que a variável `cidade` mudar

  // Função para lidar com o envio do formulário de busca
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const novaCidade = (e.currentTarget.elements[0] as HTMLInputElement).value;
    if (novaCidade.trim() !== '') {
      setCidade(novaCidade);
    }
  };

  return (
    <div className="container">
      <h1>Previsão do Tempo</h1>
      
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Digite uma cidade" />
        <button type="submit">Buscar</button>
      </form>
      
      {carregando && <p>Carregando dados do tempo...</p>}
      {erro && <p className="error-message">Erro: {erro}</p>}
      
      {/* Renderiza o card do tempo apenas se houver dados e não houver erro */}
      {!carregando && !erro && clima && (
        <div className="weather-card">
          <h2>{clima.name}, {clima.sys.country}</h2>
          <img 
            src={`https://openweathermap.org/img/wn/${clima.weather[0].icon}@2x.png`} 
            alt={clima.weather[0].description} 
          />
          <p className="description">{clima.weather[0].description}</p>
          <div className="temperatures">
            <p className="temp">{Math.round(clima.main.temp)}°C</p>
            <p className="feels-like">Sensação térmica: {Math.round(clima.main.feels_like)}°C</p>
          </div>
          <div className="info">
            <p>Umidade: {clima.main.humidity}%</p>
            <p>Velocidade do vento: {clima.wind.speed} m/s</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;