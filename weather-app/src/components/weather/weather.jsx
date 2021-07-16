import React, {useEffect, useState} from "react";
import "weather-icons/css/weather-icons.css"
import "bootstrap/dist/css/bootstrap.min.css"
import s from './weather.module.css'

const ApiKey = '5a5c57e2b3b5d0b7a5e98492ffdb2eb7'


const Weather = ({cityAPI, countryAPI}) => {
    const [state, setState] = useState({
        city: undefined,
        country: undefined,
        temp: undefined,
        tempMin: undefined,
        tempMax: undefined,
        description: undefined,
        icon: undefined
    })

    const weatherIcon = {
        Thunderstorm: "wi-thunderstorm",
        Drizzle: "wi-sleet",
        Rain: "wi-storm-showers",
        Snow: "wi-snow",
        Atmosphere: "wi-fog",
        Clear: "wi-day-sunny",
        Clouds: "wi-day-fog"
    }

    useEffect(() => {

        getWeather()

    }, [cityAPI])

    let getWeatherIcon = (weatherId) => {
        switch (true) {
            case weatherId >= 200 && weatherId <= 232:
                return weatherIcon.Thunderstorm
            case weatherId >= 300 && weatherId <= 321:
                return weatherIcon.Drizzle
            case weatherId >= 500 && weatherId <= 531:
                return weatherIcon.Rain
            case weatherId >= 600 && weatherId <= 622:
                return weatherIcon.Snow
            case weatherId >= 701 && weatherId <= 781:
                return weatherIcon.Atmosphere
            case weatherId === 800:
                return weatherIcon.Clear
            case weatherId >= 801 && weatherId <= 804:
                return weatherIcon.Clouds
            default:
                return weatherIcon.Snow
        }
    }

    let getWeather = () => {

        let geo = cityAPI + ',' + countryAPI

        const apiCall = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${geo}&appid=${ApiKey}`);

        apiCall.then(response => {
            return response.json()
        }).then(response => {

                setState({
                    city: response.name,
                    country: response.sys.country,
                    temp: degreesInCel(response.main.temp),
                    tempMax: degreesInCel(response.main.temp_max),
                    tempMin: degreesInCel(response.main.temp_min),
                    description: response.weather[0].description,
                    icon: getWeatherIcon(response.weather[0].id)
                })


            }
        )

    }


    let degreesInCel = (kelvin) => {
        let cel = Math.floor(kelvin - 273.15)
        return cel
    }

    return (
        <div className="container text-light">
            {state.city},{state.country}
            <h5><i className={`wi ${state.icon} display-1`}/></h5>
            {state.temp}&deg;<br/>
            <span>{state.tempMin}&deg;</span>
            <span>{state.tempMax}&deg;</span><br/>
            {state.description}
        </div>
    )
}

export default Weather