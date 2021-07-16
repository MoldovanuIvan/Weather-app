import {combineReducers, createStore} from "redux";
import formReducer from "./form-reducer";


const reducers = combineReducers({
    formReducer:formReducer
})

const store = createStore(reducers)

export default store