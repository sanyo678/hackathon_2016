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
}

func (db *Resource) cities(context *gin.Context) {
	response := make([]City, 10);
	response[0].CountryId = 0
	response[1].CountryId = 0
	response[2].CountryId = 0
	response[3].CountryId = 0
	response[4].CountryId = 0
	response[5].CountryId = 0
	response[6].CountryId = 239
	response[7].CountryId = 239
	response[8].CountryId = 239
	response[9].CountryId = 239
	response[0].ID = 0
	response[1].ID = 1
	response[2].ID = 2
	response[3].ID = 3
	response[4].ID = 4
	response[5].ID = 5
	response[6].ID = 6
	response[7].ID = 7
	response[8].ID = 8
	response[9].ID = 9
	response[0].Latitude = -6.081689
	response[1].Latitude = -5.207083
	response[2].Latitude = -5.826789
	response[3].Latitude = -6.569828
	response[4].Latitude = -9.443383
	response[5].Latitude = -3.583828
	response[6].Latitude = 61.16052
	response[7].Latitude = 64.190926
	response[8].Latitude = 67.01697
	response[9].Latitude = 76.531204
	response[0].Longitude = 145.39188
	response[1].Longitude = 145.7887
	response[2].Longitude = 144.29587
	response[3].Longitude = 146.72624
	response[4].Longitude = 147.22005
	response[5].Longitude = 143.66919
	response[6].Longitude = -45.42598
	response[7].Longitude = -51.678062
	response[8].Longitude = -50.689323
	response[9].Longitude = -68.70316
	response[0].Name = "Goroka"
	response[1].Name = "Madang"
	response[2].Name = "Mount Hagen"
	response[3].Name = "Nadzab"
	response[4].Name = "Port Moresby"
	response[5].Name = "Wewak"
	response[6].Name = "Narssarssuaq"
	response[7].Name = "Godthaab"
	response[8].Name = "Sondrestrom"
	response[9].Name = "Thule"
	context.JSON(200, gin.H{"code": "0", "response": response})
}

func (db *Resource) countries(context *gin.Context) {
	response := make([]Country, 10);
	response[0].ID = 0
	response[1].ID = 1
	response[2].ID = 2
	response[3].ID = 3
	response[4].ID = 4
	response[5].ID = 5
	response[6].ID = 6
	response[7].ID = 7
	response[8].ID = 8
	response[9].ID = 9
	response[0].Name = "Papua New Guinea"
	response[1].Name = "Cambodia"
	response[2].Name = "Paraguay"
	response[3].Name = "Kazakhstan"
	response[4].Name = "Syria"
	response[5].Name = "Bahamas"
	response[6].Name = "Solomon Islands"
	response[7].Name = "Montserrat"
	response[8].Name = "Mali"
	response[9].Name = "Marshall Islands"
	context.JSON(200, gin.H{"code": "0", "response": response})
}
