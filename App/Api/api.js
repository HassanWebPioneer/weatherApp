import axios from 'axios';

const API_KEY = '213cf98d77msh54f0023a8bacf23p1e8a3ajsnb03b52afd966';
const Host_key = 'open-weather13.p.rapidapi.com';
const baseURL = 'https://open-weather13.p.rapidapi.com';

const api = axios.create({
  baseURL: baseURL,
  headers: {
    'X-RapidAPI-Key': API_KEY,
    'X-RapidAPI-Host': Host_key,
  },
});

const getWeatherData = async city => {
  try {
    const response = await api.get(`/city/${city}`);
    console.log('Response', response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export {getWeatherData};
