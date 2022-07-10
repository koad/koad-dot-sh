import axios from 'axios';

export const getWeather = async (city) => {
  try {
    const { data } = await axios.get(`https://wttr.in/${city}?ATm`);
    return data;
  } catch (error) {
    return error;
  }
};

commands['weather'] = async function(args){
    const city = args.join('+');
    const url = `https://wttr.in/${city}?ATm`;

    if (!city) {
      return 'Usage: weather [city]. Example: weather casablanca';
    }

    const weather = await getWeather(city);
    return weather;
}
