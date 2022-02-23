import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CountryInfo, WeatherResponse } from '../../model/model';
import FetchCountry from '../fetch/fetchCountry';

const Country = () => {
   
    
    interface ID {
        country : string;
    }

    const {country}  = useParams<ID>();
    const [info, setInfo] = useState<CountryInfo[]>([]);
    const [weather, setWeather] = useState<WeatherResponse>()

    useEffect(()=> {
        fetchAllCountry();
    },[])

    const fetchAllCountry = async () => {
        const res = await FetchCountry.getCountry(country);
        // console.log(res.data)
        setInfo(res.data);
    }

    const getWeather = async (countryName : string)=> {
        const res = await FetchCountry.fetchWeather(countryName);
        console.log(res)
        setWeather(res.data);

    }


    return (
        <div data-testid='country'>
            {/* <p> i am the new {country}</p> */}
          
            <div style={{textAlign:'center'}}>
            {
                info.map(ele => <div key={ele.latlng[0] + ele.latlng[1]}>
                    <p>population :{ele.population}</p>
                    <p>Lat:{ele.latlng[0]}</p>
                    <p>Long:{ele.latlng[1]}</p>
                    <p>Capital :{ele.capital[0]}</p>
                    <img src={ele.flags?.png} alt="" />

                </div>)
            }


            </div>
            <div style={{textAlign:'center'}}>
            <Button variant='contained'  onClick={()=> getWeather(info[0].capital[0])} > Get Weather</Button>

            </div>
           
            <div style={{textAlign:'center'}}>
                {
                    weather ? (
                        <div>
                            <div>
                                <img src={weather.current.weather_icons[0]} alt="" />
                            </div>
                            <p>Temprature :{weather.current.temperature}</p>
                            <p>Wind Speed :{weather.current.wind_speed}</p>
                            <p>Precip :{weather.current.precip}</p>
                            
                        </div>
                    )  : null

                }
            </div>
           
        </div>
    );
};

export default Country;