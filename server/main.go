package main

import "github.com/gin-gonic/gin"

func main() {
	router := gin.Default()
	resource := openConnection()

	v1 := router.Group("api/v1/")
	{
		v1.GET("cities", resource.cities)
		v1.GET("countries", resource.countries)
	}

	router.Run(":2929")
}
