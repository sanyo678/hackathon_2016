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
		color: getRandomInt(1, 3),
		height: getRandomInt(150, 190),
		boobies:  getRandomInt(1, 5), //размер груди
		waist:  getRandomInt(50, 130), //талии
		butt: getRandomInt(1, 5), //попа
		salary: getRandomInt(1, 5), //нищая_бедная
		religion: getRandomInt(1, 5), //религиозность
		sex_age: getRandomInt(14, 21) //возраст согласия
	};
	return city;
})

fs.writeFileSync("faked.json", JSON.stringify(newCities, null, 2));

