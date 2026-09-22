import useWeather from '../../hooks/useWeather';
import './WeatherCard.css';

function WeatherCard({ locationName }) {
    const { weather, status } = useWeather(locationName);

    return (
        <div className="weatherCard">
            <p className="eyebrow">Live weather</p>
            {status === 'loading' && <span className="weatherMessage">Checking {locationName}...</span>}
            {status === 'error' && <span className="weatherMessage">Weather is temporarily unavailable.</span>}
            {status === 'success' && weather && (
                <>
                    <div className="weatherMain">
                        <strong>{Math.round(weather.temperature)}{weather.temperatureUnit}</strong>
                        <div>
                            <h3>{weather.description}</h3>
                            <span>{weather.locationName}</span>
                        </div>
                    </div>
                    <div className="weatherDetails">
                        <span>Feels like {Math.round(weather.apparentTemperature)}{weather.temperatureUnit}</span>
                        <span>Humidity {weather.humidity}%</span>
                        <span>Wind {Math.round(weather.windSpeed)} {weather.windUnit}</span>
                    </div>
                </>
            )}
        </div>
    );
}

export default WeatherCard;
