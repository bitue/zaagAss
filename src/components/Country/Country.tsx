import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CountryInfo, WeatherResponse } from '../../model/model';

const Country = () => {
    const apiKey ="f2475ac6db433e8c8a282083b81fef6d"
    
    interface ID {
        country : string;
    }

    const {country} : ID  = useParams();
    const [info, setInfo] = useState<CountryInfo[]>([]);
    const [weather, setWeather] = useState<WeatherResponse>()

    useEffect(()=> {
        fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setInfo(data)
        })
    },[])

    const getWeather =(countryName : string)=> {
        fetch(`http://api.weatherstack.com/current?access_key=${apiKey}&query=${countryName}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setWeather(data)
        })

    }

    console.log(info,'infoo')

   

    return (
        <div>
            <p> i am the new {country}</p>
          
            <div style={{textAlign:'center'}}>
            {
                info.map(ele => <div>
                    <p>{ele.population}</p>
                    <p>{ele.latlng[0]}</p>
                    <p>{ele.latlng[1]}</p>
                    <p>{ele.capital[0]}</p>
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
                            <p>{weather.current.temperature}</p>
                            <p>{weather.current.wind_speed}</p>
                            <p>{weather.current.precip}</p>
                            
                        </div>
                    ) : <p>i am now</p>

                }
            </div>
           
        </div>
    );
};

export default Country;