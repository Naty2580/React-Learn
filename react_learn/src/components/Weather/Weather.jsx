import { useState } from "react";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [country, setCountry] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchWeatherData = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m,relative_humidity_2m,cloudcover,windspeed_10m,pressure_msl&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum,sunrise,sunset,&timezone=auto`
      );

      if (!response.ok) {
        throw new Error(`Weather API error: ${response.status}`);
      }

      const data = await response.json();
      setWeatherData(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Get latitude & longitude of the city
      const response = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${country}&count=1`
      );
      const data = await response.json();

      if (!data || !data.results || data.results.length === 0) {
        throw new Error("City not found. Try another name.");
      }

      const latitude = data.results[0].latitude;
      const longitude = data.results[0].longitude;

      // Fetch weather using correct lat & lon
      await fetchWeatherData(latitude, longitude);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        width: "82vw",
        height: "95vh",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          height: "10%",
          fontWeight: "900",
          fontFamily: "cursive",
          backgroundColor: "#2a2a2a",
          fontSize: "2rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "cyan",
        }}
      >
        Weather App
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "90%",
          backgroundColor: "#2a2a2a",
          color: "cyan",
          fontWeight: "900",
          fontFamily: "cursive",
          cursor: "pointer",
        }}
      >
        <div
          style={{
            width: "80%",
            height: "80%",
            backgroundColor: "cyan",
            fontFamily: "cursive",
            cursor: "pointer",
            borderRadius: "7px",
            border: " 5px solid black",
          }}
        >
          {/* search areas */}

          <form
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "95%",
              height: "10%",
              padding: "0.5rem",
              color: "cyan",
              fontWeight: "900",
              fontFamily: "cursive",
              cursor: "pointer",
            }}
            onSubmit={(e) => handleSearch(e)}
          >
            <input
              value={country}
              placeholder="Enter city name"
              onChange={(e) => setCountry(e.target.value)}
              style={{
                width: "85%",
                height: "80%",
                outline: "none",
                color: "black",
                border: "3px solid black",
                borderRadius: "7px",
                backgroundColor: "rgba(255, 255, 255)",
              }}
            />
            <button
              style={{
                width: "40px",
                height: "40px",
                outline: "none",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "cyan",
                borderRadius: "50%",
                border: "3px solid black",
                float: "right",
                backgroundColor: "white",
              }}
              type="submit"
            >
              🔎
            </button>
          </form>

          {/* result area */}
          {loading ? (
            <div
              style={{
                fontWeight: "900",
                zIndex: 2,
                color: "black",
                fontSize: "2rem",
                width: "90%",
                margin: "0 auto",
                height: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Loading...
            </div>
          ) : (
            <div
              style={{
                width: "99%",
                height: "85%",
                fontWeight: "900",
                fontFamily: "cursive",
                cursor: "pointer",
                color: "black",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  fontWeight: "600",
                  fontSize: "1.5rem",
                  width: "100%",
                  height: "15%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {country.toLocaleUpperCase()}
              </div>

              <div
                style={{
                  fontWeight: "400",
                  fontSize: "1rem",
                  width: "100%",
                  height: "5%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {new Date().toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  height: "50%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    fontWeight: "800",
                    fontSize: "3rem",
                    fontFamily: "cursive",
                    cursor: "pointer",
                    width: "100%",
                    marginBottom: "0.5rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  🌡{" "}
                  {weatherData
                    ? weatherData.current_weather.temperature + "°C"
                    : "no data"}
                </div>
                <div
                  style={{
                    fontWeight: "800",
                    fontSize: "3rem",
                    width: "100%",
                    fontFamily: "cursive",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  🌧
                  {weatherData
                    ? weatherData.daily.precipitation_sum[0]
                    : "no data"}
                </div>
              </div>

              <div
                style={{
                  fontWeight: "700",
                  fontSize: "1rem",
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  height: "10%",
                }}
              >
                <div
                  style={{
                    width: "50%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <div>
                    {weatherData
                      ? weatherData.hourly.relative_humidity_2m?.[0] + "%"
                      : "no data"}
                  </div>
                  <div>humidity</div>
                </div>
                <div
                  style={{
                    width: "50%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <div>
                    {weatherData
                      ? weatherData.current_weather.windspeed + "km/h"
                      : "no data"}
                  </div>

                  <div>windspeed </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Weather;
