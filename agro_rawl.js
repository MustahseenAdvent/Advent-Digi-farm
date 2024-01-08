// Replace YOUR_API_KEY with your actual API key
const apiKey = "3199961a1db6540d9bb6d68370f2cde6";
const userId = "642f15efff8d760007133151";
// const polyId = "64302d80176fe647b64424ce";
const polyId = "658efe5c6352a366372cd5e4"; //Entire Rawl Farm Bunnell FL
// const polyId = "656e02c193997d4983bfd6c7"; // Green Onion Rawl Farm

const openWeatherAPI = "e7fde31e6e2012175e3b4e0876edd709";

const lat = 29.418415599999996;
const lon =  -81.3980514;
const startDate = "1500336000";
const endDate = "1508976000";
const START_DATE = "2021-01-01";
const END_DATE = "2021-12-31";

const NDVI_start_date = "1702789200"; // Dec 17, 2023
const NDVI_end_date = "	1702962000"; // Aug 19, 2023


// Rawl Farm Polygon Data
const pgApiUrl = `https://api.agromonitoring.com/agro/1.0/polygons?user_id=${userId}&appid=${apiKey}`;

// Construct the URL for the AgroMonitoring API endpoint you want to access
const currentWeather_ApiUrl = `https://api.agromonitoring.com/agro/1.0/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

const forecastWeather_ApiUrl = `https://api.agromonitoring.com/agro/1.0/weather/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

// Onecall api
const oneCallApiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=${openWeatherAPI}&units=imperial`;

// Accumulated data by geo coordinates
const accuTemp_ApiUrl = `https://api.agromonitoring.com/agro/1.0/weather/history/accumulated_temperature?lat=${lat}&lon=${lon}&threshold=284&start=${startDate}&end=${endDate}&appid=${apiKey}&units=imperial`;
const accuPrecp_ApiUrl = `https://api.agromonitoring.com/agro/1.0/weather/history/accumulated_precipitation?lat=${lat}&lon=${lon}&start=${startDate}&end=${endDate}&appid=${apiKey}&units=imperial`;

// Sat Image Data
const satImageApiUrl = `https://api.agromonitoring.com/agro/1.0/image/search?start=1674039769&end=1676718169&&polyid=${polyId}&coords=${lon},${lat}&appid=${apiKey}`;

// Soil Data
const soil_ApiUrl = `https://api.agromonitoring.com/agro/1.0/soil?polyid=${polyId}&units=imperial&start=${startDate}&end=${endDate}&appid=${apiKey}&units=metric`;
const soilHist_ApiUrl = `http://api.agromonitoring.com/agro/1.0/soil/history?polyid=${polyId}&start=${startDate}&end=${endDate}&appid=${apiKey}`;

// NDVI Data
const ndvi_API = `https://api.agromonitoring.com/agro/1.0/ndvi/history?polyid=${polyId}&start=1674039769&end=1676718169&appid=${apiKey}&units=imperial`;

// UV Index
const uvIndex_ApiUrl = `http://api.agromonitoring.com/agro/1.0/uvi?polyid=${polyId}&appid=${apiKey}&units=imperial`;

/////////////////////////////////////////////////////////////
// Weather Fetching Data
function fetchWeatherData() {
  // Fetch the data from the API using the URL and API key
  fetch(currentWeather_ApiUrl)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      // Process the data and display it on your website
      const weatherSection = document.querySelector("#weather");

      // Temp, Humidity and Pressure
      const temperature = data.main.temp;
      const tempHtml = document.getElementById("weathercurrent");
      tempHtml.textContent = temperature;

      const temperatureFeelsLike = data.main.feels_like;
      const tempFeelsLikeHtml = document.getElementById("feelslikecurrent");
      tempFeelsLikeHtml.textContent = temperatureFeelsLike;

      const icon = data.weather[0].icon;
      const iconHTML = document.getElementById("icon");
      iconHTML.textContent = icon;

      const descriptionMain = data.weather[0].main;
      const descMainHTML = document.getElementById("weatherdescrmain");
      descMainHTML.textContent = descriptionMain;

      const temperatureMax = data.main.temp_max;
      const tempMaxHtml = document.getElementById("tempmaxcurrent");
      tempMaxHtml.textContent = temperatureMax;

      const temperatureMin = data.main.temp_min;
      const tempMinHtml = document.getElementById("tempmincurrent");
      tempMinHtml.textContent = temperatureMin;

      const humidity = data.main.humidity;
      const humidityHtml = document.getElementById("humiditycurrent");
      humidityHtml.textContent = humidity;

      const pressure = data.main.pressure;
      const pressureHtml = document.getElementById("pressurecurrent");
      pressureHtml.textContent = pressure;

      const description = data.weather[0].description;
      const descHTML = document.getElementById("weatherdescr");
      descHTML.textContent = description;

      // Levels

      const groundLevel = data.main.grnd_level;
      const groundLevelHtml = document.getElementById("groundlevelcurrent");
      groundLevelHtml.textContent = groundLevel;

      const seaLevel = data.main.sea_level;
      const seaLevelHtml = document.getElementById("sealevelcurrent");
      seaLevelHtml.textContent = seaLevel;

      // Wind

      // const windDeg = data.wind.deg;
      // const windDegHTML = document.getElementById("winddeg");
      // windDegHTML.textContent = windDeg;

      // const windGust = data.wind.gust;
      // const windGustHTML = document.getElementById("windgust");
      // windGustHTML.textContent = windGust;

      // const windSpeed = data.wind.speed;
      // const windSpeedHTML = document.getElementById("windspeed");
      // windSpeedHTML.textContent = windSpeed;

      // Cloud

      const cloud = data.clouds.all;
      const cloudHTML = document.getElementById("cloud");
      cloudHTML.textContent = cloud;

      //   const html = `
      //   <h2>Current Weather</h2>
      //   <p>Temperature: ${temperature}°C</p>
      //   <p>Weather: ${description}</p>
      //   <img src="https://openweathermap.org/img/w/${icon}.png" alt="${description}">
      // `;
      weatherSection.innerHTML = html;
    })
    .catch((error) => {
      // Handle any errors that occur during the API call
      console.error(error);
    });
}

fetchWeatherData();

function fetchWindData() {
  // Fetch the data from the API using the URL and API key
  fetch(currentWeather_ApiUrl)
    .then((response) => response.json())
    .then((winddata) => {
      // console.log(winddata);
      const windSection = document.querySelector("#wind");
      // Wind

      const windDeg = winddata.wind.deg;
      const windDegHTML = document.getElementById("winddeg");
      windDegHTML.textContent = windDeg;

      const windGust = winddata.wind.gust;
      const windGustHTML = document.getElementById("windgust");
      windGustHTML.textContent = windGust;

      const windSpeed = winddata.wind.speed;
      const windSpeedHTML = document.getElementById("windspeed");
      windSpeedHTML.textContent = windSpeed;

      windSection.innerHTML = html;
    })
    .catch((error) => {
      // Handle any errors that occur during the API call
      console.error(error);
    });
}

fetchWindData();

function fetchCloudData() {
  // Fetch the data from the API using the URL and API key
  fetch(currentWeather_ApiUrl)
    .then((response) => response.json())
    .then((winddata) => {
      // console.log(clouddata);
      const cloudSection = document.querySelector("#cloud");
      // Wind

      const cloud = data.clouds.all;
      const cloudHTML = document.getElementById("cloud");
      cloudHTML.textContent = cloud;

      cloudSection.innerHTML = html;
    })
    .catch((error) => {
      // Handle any errors that occur during the API call
      console.error(error);
    });
}

fetchCloudData();

//Weather Forecast data
function fetchWeatherForecast() {
  fetch(forecastWeather_ApiUrl)
    .then((response) => response.json())
    .then((data2) => {
      // console.log(data2);

      const forecastHourlyTemp = data2[0].main.temp;
      const forecastHourlyTempHtml = document.getElementById("weathercurrent");
      forecastHourlyTemp.textContent = forecastHourlyTemp;
    });
}
fetchWeatherForecast();

// Polygon Fetching data
function fetchPolygonsData() {
  fetch(pgApiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const mapSection = document.querySelector("#map");
      const coords = data[0].center;
      const centerMap = data[0].area;

      //   const html = `
      //   <h2>Current Area</h2>
      //   <p>Area of the lot 1 = ${centerMap}</p>
      //   <p>Coordinate of the lot = ${coords}</p>
      // `;
      mapSection.innerHTML = html;
    })
    .catch((error) => {
      console.error("Error fetching polygons data", error);
    });
}

fetchPolygonsData();

// Fetch Sat Image

function fetchSatImage() {
  fetch(satImageApiUrl)
    .then((response) => response.json())
    .then((data) => {
      // const imageSection = document.querySelector("#image");
      console.log(data);
      // const imageUrl = data[90].tile;
      // const dswiData = data[0].data.dswi;
      // const sunAzimuth = data[0].sun.azimuth;

      // const satelliteImage = document.getElementById("satellite-image");

      // satelliteImage.src = imageUrl;
      // satelliteImage.alt = "Satellite Image";

      // const html = `
      //   <h2>DSWI</h2>
      //   <p>${dswiData}</p>
      //   <p>${sunAzimuth}</p>
      // `;
      // imageSection.innerHTML = html;

      // console.log("Image URL:", imageUrl);

      const imageUrl = data[0].image.nri;
      const cloudCover = data[0].tile.nri;
      const acquisitionDate = data[0].type;
      const ndviImg = data[100].dc;

      const satelliteImage = document.getElementById("satellite-image");
      satelliteImage.textContent = imageUrl;
      // satelliteImage.src = imageUrl;
      // satelliteImage.src = ndviImg;
      // satelliteImage.alt = "Satellite Image";

      const cloudCoverElement = document.getElementById("cloud-cover");
      cloudCoverElement.textContent = cloudCover;

      const acquisitionDateElement =
        document.getElementById("acquisition-date");
      acquisitionDateElement.textContent = acquisitionDate;
    })
    .catch((error) => {
      console.error("Error fetching satellite imagery data", error);
    });
}

fetchSatImage();

function fetchSoilData() {
  fetch(soil_ApiUrl)
    .then((response) => response.json())
    .then((soildata) => {
      // Extract the DSWI values from the data
      // const dswiValues = data.map((entry) => entry.dswi);
      // console.log(soildata);

      // Process the data and display it on your website
      const soilSection = document.querySelector("#soil");

      // Temp, Humidity and Pressure
      const soilMoisture = soildata.moisture;
      const soilMoistureHtml = document.getElementById("soilmoisture");
      soilMoistureHtml.textContent = soilMoisture;

      const soilTemp = soildata.t0;
      const soilTempF = 1.8*(soilTemp-273.15)+32;                                   //Kelvin to Farenhite
      const soilTempHtml = document.getElementById("surfacetemp");
      soilTempHtml.textContent = (Math.round(soilTempF*100)/100).toFixed(2);

      const soilTemp0 = soildata.t10;
      const soilTemp0F = 1.8*(soilTemp0-273.15)+32;
      const soilTemp0Html = document.getElementById("belowsurfacetemp");
      soilTemp0Html.textContent = (Math.round(soilTemp0F*100)/100).toFixed(2);
      // Do something with the DSWI values, such as display them in a chart

      soilSection.innerHTML = html;
    })
    .catch((error) => {
      // Handle any errors that occur during the API call
      console.error(error);
    });
}

fetchSoilData();

function fetchUvIndex() {
  fetch(uvIndex_ApiUrl)
    .then((response) => response.json())
    .then((uvindexdata) => {
      // Extract the DSWI values from the data
      // const dswiValues = data.map((entry) => entry.dswi);
      // console.log(uvindexdata);

      const UVSection = document.querySelector("#uvindex");

      const uvindex = uvindexdata.uvi;
      const uvindexHTML = document.getElementById("uvindex");
      uvindexHTML.textContent = uvindex;

      UVSection.innerHTML = html;
    });
}

fetchUvIndex();

function fetchNDVI() {
  fetch(ndvi_API)
    .then((response) => response.json())
    .then((data) => {
      // Extract the DSWI values from the data
      // const dswiValues = data.map((entry) => entry.dswi);
      console.log(data);

      const ndviSection = document.querySelector("#vi");

      const ndviValue = data[0].data.max;
      const ndviValueHtml = document.getElementById("ndvi");
      ndviValueHtml.textContent = (Math.round(ndviValue*100)/100).toFixed(2);

      ndviSection.innerHTML = html;

      // Do something with the DSWI values, such as display them in a chart
    });
}

fetchNDVI();


function oneCall() {
  fetch(oneCallApiUrl)
    .then((response) => response.json())
    .then((data) => {
      const oneCallSection = document.querySelector("#oneCall");

      // console.log(data);
      
      const clouds = data.current.clouds;
      const cloudsHtml = document.getElementById("clouds");
      cloudsHtml.textContent = clouds;

      // Circular Bar Gauge for Cloud in %
      let cloudCircularProgress = document.querySelector(".cloud-circular-progress"),
          cloudProgressValue = document.querySelector(".cloud-progress-value");

      let cloudProgressStartValue = -1,
          cloudProgressEndValue = data.current.clouds,
          Cspeed = 25;
      let cloudProgress = setInterval(()=>{

          cloudProgressStartValue++;
    
          cloudProgressValue.textContent = `${cloudProgressStartValue}`
          cloudCircularProgress.style.background = `conic-gradient(#7d2ae8 ${cloudProgressStartValue*3.6}deg, #ededed 0deg)`
    
        if(cloudProgressStartValue==cloudProgressEndValue){
            clearInterval(cloudProgress)
        }
        // console.log(progressStartValue);
      }, Cspeed);


      const dewPoint = data.current.dew_point;
      const dewPointHtml = document.getElementById("dewPoint");
      dewPointHtml.textContent = dewPoint;

      const humidity = data.current.humidity;
      const humidityHtml = document.getElementById("humidity");
      humidityHtml.textContent = humidity;

      // Circular Bar Gauge for Humidity in %
      let HumCircularProgress = document.querySelector(".humidity-circular-progress"),
          HumProgressValue = document.querySelector(".humidity-progress-value");

      let HumProgressStartValue = -1,
          HumProgressEndValue = data.current.humidity,
          speed = 25;
      let HumProgress = setInterval(()=>{

          HumProgressStartValue++;
          // console.log(HumProgressStartValue)
    
          HumProgressValue.textContent = `${HumProgressStartValue}`
          HumCircularProgress.style.background = `conic-gradient(#7d2ae8 ${HumProgressStartValue*3.6}deg, #ededed ${HumProgressStartValue*3.6}deg)`
    
        if(HumProgressStartValue==HumProgressEndValue){
            clearInterval(HumProgress)
        }
        // console.log(progressStartValue);
      }, speed);

      const pressure = data.current.pressure;
      const pressureHtml = document.getElementById("pressure");
      pressureHtml.textContent = pressure;

      const uvi = data.current.uvi;
      const uviHtml = document.getElementById("uvi");
      uviHtml.textContent = uvi;

      const visibility = data.current.visibility;
      const visibilityHtml = document.getElementById("visibility");
      visibilityHtml.textContent = visibility;
      
    });
}

oneCall();


////////////////////////////////////////////////////////////////////
// Accumulated Temp by geo coordinates

// function fetchAccuTemp() 
//   fetch(accuTemp_ApiUrl)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//     });
// }

// fetchAccuTemp();

// Accumulated Precipitation by geo coordinates

// function fetchAccuPrecp() {
//   fetch(accuPrecp_ApiUrl)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//     });
// }

// fetchAccuPrecp();

// 7 day forecast
