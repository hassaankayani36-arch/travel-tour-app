import { useEffect, useState } from 'react';
import weatherDescriptions from '../data/weatherDescriptions';

function useWeather(locationName) {
    const [weather, setWeather] = useState(null);
    const [status, setStatus] = useState('idle');

    useEffect(() => {
        if (!locationName) {
            return undefined;
        }

        const controller = new AbortController();
        const encodedLocation = encodeURIComponent(locationName);

        async function fetchWeather() {
            setStatus('loading');
            setWeather(null);

            try {
                const geocodingResponse = await fetch(
                    `https://geocoding-api.open-meteo.com/v1/search?name=${encodedLocation}&count=1&language=en&format=json&countryCode=PK`,
                    { signal: controller.signal },
                );
                const geocodingData = await geocodingResponse.json();
                const location = geocodingData.results?.[0];

                if (!geocodingResponse.ok || !location) {
                    throw new Error('Location not found');
                }

                const coordinates = [location.latitude, location.longitude];
                const forecastResponse = await fetch(
                    `https://api.open-meteo.com/v1/forecast?latitude=${coordinates[0]}&longitude=${coordinates[1]}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m`,
                    { signal: controller.signal },
                );
                const forecastData = await forecastResponse.json();

                if (!forecastResponse.ok) {
                    throw new Error('Weather unavailable');
                }

                setWeather({
                    locationName: location.name,
                    temperature: forecastData.current.temperature_2m,
                    temperatureUnit: forecastData.current_units.temperature_2m,
                    apparentTemperature: forecastData.current.apparent_temperature,
                    humidity: forecastData.current.relative_humidity_2m,
                    windSpeed: forecastData.current.wind_speed_10m,
                    windUnit: forecastData.current_units.wind_speed_10m,
                    description: weatherDescriptions[forecastData.current.weather_code] || 'Weather update',
                });
                setStatus('success');
            } catch (error) {
                if (error.name !== 'AbortError') {
                    setStatus('error');
                }
            }
        }

        fetchWeather();

        return () => controller.abort();
    }, [locationName]);

    return { weather, status };
}

export default useWeather;
