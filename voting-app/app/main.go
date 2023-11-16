// app/main.go
package main

import (
	"html/template"
	"log"
	"net/http"
)

var (
	votes = map[string]int{
		"Option 1": 0,
		"Option 2": 0,
	}

	tmplInput  = template.Must(template.ParseFiles("templates/index.html"))
	tmplOutput = template.Must(template.ParseFiles("templates/results.html"))
)

func indexHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method == http.MethodPost {
		option := r.FormValue("option")
		votes[option]++
	}

	err := tmplInput.Execute(w, votes)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
}

func resultsHandler(w http.ResponseWriter, r *http.Request) {
	err := tmplOutput.Execute(w, votes)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
}

func main() {
	http.HandleFunc("/", indexHandler)
	http.HandleFunc("/results", resultsHandler)

	portInput := "8080"
	portOutput := "8081"

	go func() {
		log.Fatal(http.ListenAndServe(":"+portInput, nil))
	}()

	log.Fatal(http.ListenAndServe(":"+portOutput, nil))
}
