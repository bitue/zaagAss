import axios from 'axios';

export default class FetchCountry {
    static fetchWeather = async (country: string) => {
        return await axios.get(`http://api.weatherstack.com/current?access_key=f2475ac6db433e8c8a282083b81fef6d&query=${country}`)
    }

    static getCountry = async (country : string) => {
        return await axios.get(`https://restcountries.com/v3.1/name/${country}`)
    }
}