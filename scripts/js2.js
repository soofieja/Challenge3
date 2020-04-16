/* AANTEKENINGEN
if (!respons.ok) gaat voor wanneer er iets fout gaat

- catch krijgt de info van throw bij een fout.
- temperatuur wordt altijd weergeven in Kelvin, vandaar dat je -273.15 moet doen om op  op celsius te komen.
- &#176;C code voor celsius graden 
- 
*/



//het weer//

/*----------------------------------------------------------------- WEATHER API --------------------------------------------------------------------------*/

function getWeather(){

	var url = "https://api.openweathermap.org/data/2.5/weather";
	var apiKey ="b0c8dafa512a0134e90df6ece3c2b7a2";
	var city = "Huntsville";

	var request = url + "?" + "appid=" + apiKey + "&" + "q=" + city;
	
	fetch(request)
	
	.then(function(response) {
		if(!response.ok) throw Error(response.statusText);
		return response.json();
	})

	
	.then(function(response) {
		onWeatherSucces(response);	
	})
	
	.catch(function (error) {
		onWeathererror(error);
	});
}
function onWeatherSucces(response) {

	var cityName = response.name;

	// get type of weather in string format
	var type = response.weather[0].description;

	// get temperature in Celcius ( )
	var degC = Math.floor(response.main.temp - 273.15);

	// render weather in DOM
	var weatherBox = document.getElementById('weather');
	weatherBox.innerHTML =  cityName + ' <br>'  + degC + "&#176;C <br>" + type;
}


function onWeatherError(error) {
	console.error('Request failed', error);
	var weatherBox = document.getElementById('weather');
	weatherBox.className = 'hidden'; 
}

// init data stream
getWeather();








/*----------------------------------------------------------------- BREWERY API ----------------------------------------------------------------------------------------*/


function getAPIdata() {

	var url = "https://api.openbrewerydb.org/breweries";
	// var apiKey ="135fecb5d831028d0763875152ecc158"; // heeft geen api key
	var name = "Yellowhammer_Brewery";
	
	var request = url + "?" + "by_name=" + name;
	
	fetch(request)
	
	
	.then( function(response) {
		if(!response.ok) throw Error(response.statusText);
		return response.json();
	})
	

	.then(function(response) {
		onAPISucces(response);
	})
	
	.catch(function (error) {
		onAPIError(error);
	});
}


function onAPISucces(response) {
	var brewery = response[0];
	console.log( brewery );

	var breweryName = brewery.name;
	console.log( name );

	var breweryStreet = brewery.street;
	console.log(breweryStreet);

	var breweryCity = brewery.city;
	console.log(breweryCity);

	var breweryState = brewery.state;
	console.log(breweryState);

	var breweryZip = brewery.postal_code;
	console.log(breweryZip);

	var breweryWeb = brewery.website_url;
	console.log(breweryWeb);



	var breweryBox= document.getElementById('brewery');
	breweryBox.innerHTML = breweryName + '<br>' + breweryStreet + '<br>' + breweryCity + '<br>' + breweryZip + ' <br><a href=' + breweryWeb + '>' + breweryWeb + '</a>';
}


function onAPIError(error) {
	console.error('Request failed', error);
	var breweryBox = document.getElementById('brewery');
	breweryBox.className = 'hidden'; 
}


getAPIdata();



/*function onAPISucces(response) {
	console.log( response );

	var cityName = response.name;

	// get type of weather in string format
	var type = response.weather[0].description;

	// get temperature in Celcius ( )
	var degC = Math.floor(response.main.temp - 273.15);

	// render weather in DOM
	var weatherBox = document.getElementById('weather');
	weatherBox.innerHTML =  cityName + ' <br>'  + degC + "&#176;C <br>" + type;
}
*/
