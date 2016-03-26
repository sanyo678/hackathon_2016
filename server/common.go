package main

import (
	"github.com/gin-gonic/gin"
	"fmt"
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
	Salary		byte	`db:"salary" json:"salary"`
	Religion	byte	`db:"religion" json:"religion"`
	SexAge		byte	`db:"sex_age" json:"sex_age"`
}

func (db *Resource) cities(context *gin.Context) {
	context.Header("Access-Control-Allow-Headers", "Content-Type")
	context.Header("Access-Control-Allow-Methods", "GET")
	context.Header("Access-Control-Allow-Origin", "*")
	var cities []City
	if _, err := db.Map.Select(&cities, "select * from cities"); err == nil {
		context.JSON(200, gin.H{"code": 0, "response": cities})
	} else {
		context.JSON(200, gin.H{"code": 1, "error": err})
	}
}

func (db *Resource) countries(context *gin.Context) {
	context.Header("Access-Control-Allow-Headers", "Content-Type")
	context.Header("Access-Control-Allow-Methods", "GET")
	context.Header("Access-Control-Allow-Origin", "*")
	var countries []Country
	if _, err := db.Map.Select(&countries, "select * from countries"); err == nil {
		context.JSON(200, gin.H{"code": 0, "response": countries})
	} else {
		context.JSON(200, gin.H{"code": 1, "error": err})
	}
}

func (db *Resource) dbsrv(context *gin.Context) {
	var cities []City

	req_body := "select * from cities order by 1=1"
	primary_sort := ""
	range_sort := ""

	if color := context.Query("color"); color != "" {
		primary_sort += " and color=" +color
	}

	if height := context.Query("height"); height != "" {
			primary_sort += " and height=" +height
			range_sort += ", height in (" +height+ "-20, " +height+ "+20) desc"
		}

	if boobies := context.Query("boobies"); boobies != "" {
			primary_sort += " and boobies=" +boobies
			range_sort += ", boobies in (" +boobies+ "-2, " +boobies+ "+2) desc"
		}

	if waist := context.Query("waist"); waist != "" {
			primary_sort += " and waist=" +waist
			range_sort += ", waist in (" +waist+ "-40, " +waist+ "+40) desc"
		}

	if butt := context.Query("butt"); butt != "" {
			primary_sort += " and butt=" +butt
			range_sort += ", butt in (" +butt+ "-1, " +butt+ "+1) desc"
		}

	if salary := context.Query("salary"); salary != "" {
			primary_sort += " and salary=" +salary
			range_sort += ", salary in (" +salary+ "-1, " +salary+ "+1) desc"
		}

	if religion := context.Query("religion"); religion != "" {
			primary_sort += " and religion=" +religion
		}

	if sex_age := context.Query("sex_age"); sex_age != "" {
			primary_sort += " and sex_age=" +sex_age
			range_sort += ", sex_age in (" +sex_age+ "-3, " +sex_age+ "+3) desc"
		}
	fmt.Printf("SQL: " + req_body + primary_sort + " desc " + range_sort)

	if _, err := db.Map.Select(&cities, req_body + primary_sort + " desc " + range_sort); err == nil {
		context.JSON(200, gin.H{"code": 0, "response": cities})
	} else {
		context.JSON(200, gin.H{"code": 1, "error": err})
	}
}
