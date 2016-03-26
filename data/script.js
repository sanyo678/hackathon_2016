'use strict'

 var fs = require("fs");
 var content = fs.readFileSync("original.json");
 var jsonContent =  JSON.parse(content);

function getRandomInt(min, max)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
//1 - white
//2 - black
//3 - asian
let newCities = jsonContent.cities.map( city => {
	city.properties = {
		color: getRandomInt(0, 2),
		height: getRandomInt(150, 190),
		boobies:  getRandomInt(0, 2), //размер груди
		waist:  getRandomInt(0, 2), //талии
		butt: getRandomInt(0, 2), //попа
	};
	return city;
})

fs.writeFileSync("faked.json", JSON.stringify(newCities, null, 2));

