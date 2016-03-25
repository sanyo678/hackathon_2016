package main

import "github.com/gin-gonic/gin"

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
	Salary		byte	`db:"salary" json:"salary"`
	Religion	byte	`db:"religion" json:"religion"`
	SexAge		byte	`db:"sex_age" json:"sex_age"`
}

func (db *Resource) cities(context *gin.Context) {
	var cities []City
	if _, err := db.Map.Select(&cities, "select * from cities"); err == nil {
		context.JSON(200, gin.H{"code": 0, "response": cities})
	} else {
		context.JSON(200, gin.H{"code": 1, "error": err})
	}
}

func (db *Resource) countries(context *gin.Context) {
	var countries []Country
	if _, err := db.Map.Select(&countries, "select * from countries"); err == nil {
		context.JSON(200, gin.H{"code": 0, "response": countries})
	} else {
		context.JSON(200, gin.H{"code": 1, "error": err})
	}
}
