// Define a tipagem para os dados de temperatura e umidade
export interface MainData {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
}

// Define a tipagem para as informações do clima (ex: "nublado")
export interface WeatherData {
    id: number;
    main: string;
    description: string;
    icon: string;
}

// Define a tipagem para o objeto de resposta completo da API
export interface WeatherApiResponse {
    coord: {
        lon: number;
        lat: number;
    };
    weather: WeatherData[]; // A API retorna um array de objetos de clima
    main: MainData;
    visibility: number;
    wind: {
        speed: number;
        deg: number;
    };
    clouds: {
        all: number;
    };
    dt: number;
    sys: {
        type: number;
        id: number;
        country: string;
        sunrise: number;
        sunset: number;
    };
    timezone: number;
    id: number;
    name: string;
    cod: number;
}