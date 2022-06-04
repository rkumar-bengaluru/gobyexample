import React from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';

const RestRoutes = () => {
    const [dep, setDep] = React.useState(
        `#app.go
import (
    "database/sql"
    "encoding/json"
    "fmt"
    "net/http" // core go http package
    "strconv"
    "github.com/gorilla/mux" // gorilla package
    _ "github.com/lib/pq" // postgres driver
    "github.com/rkumar-bengaluru/go/logger" // from previous article
    "github.com/rkumar-bengaluru/go/rest/model" // model we just defined
)`);
    const [app, setApp] = React.useState(
        `#app.go
type App struct {
    Router *mux.Router // gorilla router - github.com/gorilla/mux
    DB     *sql.DB
}\n
func (a *App) initRoutes() {
    a.Router.HandleFunc("/product/{id:[0-9]+}", a.getProduct).Methods("GET")
}`);
const [over, setOver] = React.useState(
    `#app.go
func (a *App) getProduct(w http.ResponseWriter, r *http.Request) {
    vars := mux.Vars(r)
    id, err := strconv.Atoi(vars["id"])
    alog.Info(fmt.Sprintf("getProduct::product to fetch ", id))
    if err != nil {
        respondWithError(w, http.StatusBadRequest, "Invalid Product id")
        return
    }
    p := model.Product{ID: id}
    // GetProduct is what we defined in model aove.
    if err = p.GetProduct(a.DB); err != nil {
        fmt.Println(err)
        switch err {
            case sql.ErrNoRows:
                respondWithError(w, http.StatusNotFound, "Product not found")
                return
            default:
                respondWithError(w, http.StatusInternalServerError, err.Error())
                return
        }
    }
    respondWithJson(w, http.StatusOK, p)
}`);
const [rerr, setRErr] = React.useState(
    `#app.go
func respondWithError(w http.ResponseWriter, code int, message string) {
    respondWithJson(w, code, map[string]string{"error": message})
}\n
func respondWithJson(w http.ResponseWriter, code int, payload interface{}) {
    response, _ := json.Marshal(payload)
    alog.Info(fmt.Sprintf("returing ->", string(response)))
    w.Header().Set("Content-Type", "application/json")
    w.WriteHeader(code)
    w.Write(response)
}`);
const [cmd, setCmd] = React.useState(
`#app.go
// initiazlize the App
func (a *App) Initialize(user, pwd, dbname string) {
	connectionString := fmt.Sprintf("port=49154 user=%v password=%v dbname=%v sslmode=disable",
		user, pwd, dbname)
	alog.Info(connectionString)
	var err error
	a.DB, err = sql.Open("postgres", connectionString)
	if err != nil {
		fmt.Println(err)
	}

	alog.Info(fmt.Sprintf("DB Initialized %v", a.DB))
	a.Router = mux.NewRouter()
	alog.Info(fmt.Sprintf("Router %v\n", a.Router))
	a.initRoutes()
}`);

const [run, setRun] = React.useState(
    `#app.go
func (app App) Run(add string) {
    http.ListenAndServe(add, app.Router)
}`);


    return (
        <div className='container'>
            <h3>Configure Routes Of the Rest API's</h3>
            <div className='row'>
                    <p>
                        Routes are nothing but endpoint URL's which needs to be configured
                        using the Go http module. We will discuss just of the API's being
                        configured. For the complete API list please refer to the code 
                        repository <a target="_blank" href='https://github.com/rkumar-bengaluru/go/tree/main/rest/routes'>here.</a>
                    </p>
            </div>
            <div className='row'>
                <div className="col-6 border">
                Step 01 - Define the Dependencies
                        <Editor
                            value={dep}
                            onValueChange={dep => setDep(dep)}
                            highlight={dep => highlight(dep, languages.js)}
                            padding={10}
                            style={{
                                fontFamily: '"Fira code", "Fira Mono", monospace',
                                fontSize: 12,
                            }} />
                </div>
                <div className="col-6 border">
                Step 02 - Define App structure and initialize route
                        <Editor
                            value={app}
                            onValueChange={app => setApp(app)}
                            highlight={app => highlight(app, languages.js)}
                            padding={10}
                            style={{
                                fontFamily: '"Fira code", "Fira Mono", monospace',
                                fontSize: 12,
                            }} />
                </div>
            </div>
            <div className='row'>
                <div className="col-6 border">
                Step 03 - Overload App with getProduct function
                        <Editor
                            value={over}
                            onValueChange={over => setOver(over)}
                            highlight={over => highlight(over, languages.js)}
                            padding={10}
                            style={{
                                fontFamily: '"Fira code", "Fira Mono", monospace',
                                fontSize: 12,
                            }} />
                </div>
                <div className="col-6 border">
                Step 04 - Implement respondWithError and respondWithJson
                        <Editor
                            value={rerr}
                            onValueChange={rerr => setRErr(rerr)}
                            highlight={rerr => highlight(rerr, languages.js)}
                            padding={10}
                            style={{
                                fontFamily: '"Fira code", "Fira Mono", monospace',
                                fontSize: 12,
                            }} />
                </div>
            </div>
            <div className='row'>
                <div className="col-6 border">
                Step 05 - Initialize the App
                        <Editor
                            value={cmd}
                            onValueChange={over => setCmd(cmd)}
                            highlight={cmd => highlight(cmd, languages.js)}
                            padding={10}
                            style={{
                                fontFamily: '"Fira code", "Fira Mono", monospace',
                                fontSize: 12,
                            }} />
                </div>
                <div className="col-6 border">
                Step 06 - Run the App
                        <Editor
                            value={run}
                            onValueChange={rerr => setRun(run)}
                            highlight={run => highlight(run, languages.js)}
                            padding={10}
                            style={{
                                fontFamily: '"Fira code", "Fira Mono", monospace',
                                fontSize: 12,
                            }} />
                </div>
            </div>
            <p>
                Run the necessary commands to build the model module. 
            </p>
            <div className='row border'>
                        <Editor
                            value="
                            go mod init github.com/rkumar-bengaluru/go/rest/routes
                            go mod tidy
                            "
                            highlight={code => highlight(code, languages.js)}
                            padding={10}
                            style={{
                                fontFamily: '"Fira code", "Fira Mono", monospace',
                                fontSize: 12,
                            }} />
            </div>
        </div>
    )
}

export default RestRoutes;