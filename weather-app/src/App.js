import './App.css';
import WeatherFormContainer from "./components/form/weather-formContainer";
import WeatherContainer from "./components/weather/weatherContainer";

function App() {
    return (
        <div className="App">
            <WeatherFormContainer/>
            <WeatherContainer/>
        </div>
    );
}

export default App;
