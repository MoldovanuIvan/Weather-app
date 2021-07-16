import React from "react";
import {connect} from "react-redux";
import WeatherForm from "./weather-form";
import {getWeatherOfCityAC} from "../../redux/form-reducer";

const WeatherFormContainer  = ({getWeatherOfCity}) => {

    return <WeatherForm getWeatherOfCity={getWeatherOfCity}/>
}

let mapDispatchToProps = (dispatch) => {
    return {
        getWeatherOfCity: (city,country) => {
            dispatch(getWeatherOfCityAC(city,country))
        }
    }

}


let mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(WeatherFormContainer)