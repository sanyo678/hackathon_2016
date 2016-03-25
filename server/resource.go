package main

import (
	"database/sql"

	_ "github.com/go-sql-driver/mysql"
	"gopkg.in/gorp.v1"
)

type Resource struct {
	Map *gorp.DbMap
}

func openConnection() *Resource {
	db, _ := sql.Open("mysql", "hackathon:hackathon@/api");
	dbmap := &gorp.DbMap{Db: db, Dialect: gorp.MySQLDialect{Engine: "InnoDB", Encoding: "UTF8"}}
	return &Resource{Map: dbmap}
}
