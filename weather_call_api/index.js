const address = document.getElementById("address");
const weather_search = document.getElementById("btn-weather__search");
const get_weather_key = "4c91705ee6beeefc569d6ec9b89d163b";
const coordinate_address = (address) => {
  return axios({
    method: "get",
    url: `https://api.opencagedata.com/geocode/v1/json?q=${address}&key=2648cf5965ec47788ae13013666fd52a`,
  });
};
const weather_status = (lat, lng, key) => {
  return axios({
    method: "get",
    url: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${key}&units=metric`,
  });
};
weather_search.addEventListener("click", () => {
  coordinate_address(address.value)
    .then((res) => {
      const lat = res.data.results[0].geometry.lat;
      const lng = res.data.results[0].geometry.lng;
      const location = res.data.results[0].components.county;
      const weather_title = document.getElementById("weather-display__title");
      weather_title.innerText = location;
      return weather_status(lat, lng, get_weather_key);
    })
    .then((res) => {
      console.log(res);
      const class_weather_icon = document.getElementsByClassName(
        "weather-display__icon"
      );
      const weather_condition = document.getElementById(
        "weather-display__condition"
      );
      const weather_detail = document.getElementById("weather-display__detail");
      //   const icon_code = res.data.weather[0].icon;
      //   const temperature = res.data.main.temp;
      const src_icon = `http://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`;
      class_weather_icon[0].innerHTML = `<img src="${src_icon}" alt="weather icon">
                                        <h5>${res.data.main.temp}<sup>o</sup>C</h5>`;
      weather_condition.innerHTML = `Feels like ${res.data.main.feels_like}<sup>o</sup>C. ${res.data.weather[0].main}. ${res.data.weather[0].description}`;
      weather_detail.style.borderLeft = '2px solid orange';
      weather_detail.innerHTML = `
        <span><i class="fas fa-location-arrow"></i>${res.data.wind.speed}m/s</span>
        <span><i class="fas fa-tachometer-alt"></i>${res.data.main.pressure}hPA</span>
        <p>Humidity: ${res.data.main.humidity}%</p>
        <p>Visibility: ${(res.data.visibility)/1000}km</p>`
    })
    .catch((err) => {
      console.log(err);
    });
})