package main

import (
	"fmt"
	"log"
	"net/http"
)

func main() {
	http.Handle("/", http.FileServer(http.Dir("./data/")))

	fmt.Println("Server is running at port 8090 :")
	log.Fatal(http.ListenAndServe(":8090", nil))
}
