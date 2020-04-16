/* AANTEKENINGEN
if (!respons.ok) gaat voor wanneer er iets fout gaat

- catch krijgt de info van throw bij een fout.
- temperatuur wordt altijd weergeven in Kelvin, vandaar dat je -273.15 moet doen om op  op celsius te komen.
- &#176;C code voor celsius graden 
- 
*/



//het weer//

function getAPIdata() {

	var url = "https://api.openweathermap.org/data/2.5/weather";
	var apiKey ="b0c8dafa512a0134e90df6ece3c2b7a2";
	var city = "Huntsville";


	// construct request
	var request = url + "?" + "appid=" + apiKey + "&" + "q=" + city;
	
	// get current weather
	fetch(request)
	
	// parse to JSON format
	.then(function(response) {
		if(!response.ok) throw Error(response.statusText);
		return response.json();
	})
	
	// render weather per day
	.then(function(response) {
		// render weatherCondition
		onAPISucces(response);	
	})
	
	// catch error
	.catch(function (error) {
		onAPIError(error);
	});
}


function onAPISucces(response) {

	var cityName = response.name;

	// get type of weather in string format
	var type = response.weather[0].description;

	// get temperature in Celcius ( )
	var degC = Math.floor(response.main.temp - 273.15);

	// render weather in DOM
	var weatherBox = document.getElementById('weather');
	weatherBox.innerHTML =  cityName + ' <br>'  + degC + "&#176;C <br>" + type;
}


function onAPIError(error) {
	console.error('Request failed', error);
	var weatherBox = document.getElementById('weather');
	weatherBox.className = 'hidden'; 
}

// init data stream
getAPIdata();





