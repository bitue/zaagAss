
 export   const getWeather =(countryName : string)=> {
        fetch(`http://api.weatherstack.com/current?access_key="f2475ac6db433e8c8a282083b81fef6d"&query=${countryName}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            return data
        })

    }