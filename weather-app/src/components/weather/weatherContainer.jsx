import React from "react";
import "weather-icons/css/weather-icons.css"
import "bootstrap/dist/css/bootstrap.min.css"
import {connect} from "react-redux";
import Weather from "./weather";


const WeatherContainer = ({city,country}) => {
    debugger
    return <Weather cityAPI={city} countryAPI={country}/>

}

let mapStateToProps = (state) => {
    return {
        city: state.formReducer.city,
        country:state.formReducer.country
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(WeatherContainer)

