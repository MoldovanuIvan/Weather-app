import React from "react";
import {useFormik} from "formik";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import s from './weather-form.module.css'

const WeatherForm = ({getWeatherOfCity}) => {

    const {handleSubmit, handleChange, values} = useFormik({
        initialValues: {
            city: '',
            country: ''
        },
        onSubmit: ({city, country}) => {
            getWeatherOfCity(city, country)
        }
    })
    return (
        <form onSubmit={handleSubmit} className={s.forma}>
            <TextField style={{marginRight: '10px'}} error label="City" type="text" name="city" id="city" onChange={handleChange} value={values.city}/>
            <TextField  tyle={{marginRight: '10px'}} error label="Country" type="text" name="country" id="country" onChange={handleChange} value={values.country}/>
            <Button style={{background:"#f4511e",marginTop:'-25px',marginLeft:'20px'}} type="submit" variant="contained">Get Weather</Button>
        </form>

    )
}

export default WeatherForm