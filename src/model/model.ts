export interface CountryInfo {
    capital:string[];
    latlng:number[]
    flags:{
        png: string
    };
    population:number;
    name:{
        official:string
    } ;

}

export interface WeatherResponse {
    current:{
        temperature: number;
        weather_icons: string[];
        precip:number;
        wind_speed: number
    }
}