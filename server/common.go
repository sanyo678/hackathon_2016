package main

import (
	"strconv"
	"github.com/gin-gonic/gin"
)

type Country struct {
	ID		uint32	`db:"id" json:"id"`
	Name	string	`db:"name" json:"name"`
}

type City struct {
	CountryId	uint32	`db:"countryId" json:"countryId"`
	ID			uint32	`db:"id" json:"id"`
	Latitude	float32	`db:"latitude" json:"latitude"`
	Longitude	float32	`db:"longitude" json:"longitude"`
	Name		string	`db:"name" json:"name"`

	Color		byte	`db:"color" json:"color"`
	Height		byte	`db:"height" json:"height"`
	Boobies		byte	`db:"boobies" json:"boobies"`
	Waist		byte	`db:"waist" json:"waist"`
	Butt		byte	`db:"butt" json:"butt"`
	Country		string	`db:"cname" json:"country"`
}

func (db *Resource) cities(context *gin.Context) {
	context.Header("Access-Control-Allow-Headers", "Content-Type")
	context.Header("Access-Control-Allow-Methods", "GET")
	context.Header("Access-Control-Allow-Origin", "*")

	color, _ := strconv.Atoi(context.Query("color"));
	height, _ := strconv.Atoi(context.Query("height"));
	boobies, _ := strconv.Atoi(context.Query("boobies"));
	waist, _ := strconv.Atoi(context.Query("waist"));
	butt, _ := strconv.Atoi(context.Query("butt"));

	var cities []City

	if _, err := db.Map.Select(
		&cities,
		"select countryId, cities.id, height, latitude, longitude, cities.name, color, boobies, waist, butt, countries.name as cname from cities join countries on cities.countryId = countries.id where color = ? and boobies = ? and butt = ? and waist = ? and height >= ? and height <= ?",
		color, boobies, butt, waist , height - 10, height + 10); err == nil {
		context.JSON(200, gin.H{"code": 0, "response": cities})
	} else {
		context.JSON(200, gin.H{"code": 1, "error": err})
	}
}
