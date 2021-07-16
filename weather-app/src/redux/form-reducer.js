const CHOOSE_CITY="CHOOSE_CITY"

let initialState={
    city:'new york',
    country:'usa'
}

const formReducer = (state=initialState,action) => {
    switch (action.type){
        case CHOOSE_CITY:{
            return {...state,city:action.city,country: action.country}
        }
        default: return state
    }
}

export const getWeatherOfCityAC = (city,country) => ({type:CHOOSE_CITY,city,country})

export default formReducer