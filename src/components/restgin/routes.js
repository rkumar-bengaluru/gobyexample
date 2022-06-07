
import React from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';

const Routes = () => {
    const [model, setModel] = React.useState(
        `#routes.go
package routes
import (
    "github.com/gin-gonic/gin"
    "github.com/rkumar-bengaluru/go/restgin/model"
    "strconv"
    "http"
)
type App struct {
    router *gin.Engine
}
// let's write the route
func getProduct(c *gin.Context) {
    id := c.Param("id")
    idint := strconv.Atoi(id)
    p := model.Product{ID : idint}
    p.GetProduct()
    if p.Name == "" {
        c.IndentedJSON(http.StatusNotFound, gin.H("{ "msg" : "could not found product"}"))
        return
    }
    c.IndentedJSON(http.StatusOK, p)
}
// initialize the app with routes.
func (app *App) Initialize() {
    app.router = gin.Default()
    app.router.GET("/product/:id", getProduct)
}
// run the following command
// #go mod init github.com/rkumar-bengaluru/go/restgin/routes
// #go mod tidy
` );

const [modelt, setModelt] = React.useState(
    `#routes_test.go
package routes_test
import (
    "github.com/rkumar-bengaluru/go/restgin/routes"
    "testing"
    "net/http"
    "net/http/httptest"
)

func TestGetProduct(t *testing.T) {
   app := routes.App{}
   app.Initialize()
   req,_ := http.NewRequest("/product/1", "GET", nil)
   rec := httptest.NewRecorder()
   app.router.ServeHTTP(rec,req)
   if rec.Code != http.StatusOK {
       t.Errorf("was expecting 200 but got %v",rec.Code)
   }
}
// run the following command to test.
// #go test .
    `
);
    return (
        <div className="container">
            <h4>Routes Definition.</h4>
            <div className="row">
                <div className='col border'>
                    Step 03 - Let's Define the Routes
                    <Editor
                                value={model}
                                onValueChange={model => setModel(model)}
                                highlight={model => highlight(model, languages.js)}
                                padding={10}
                                style={{
                                    fontFamily: '"Fira code", "Fira Mono", monospace',
                                    fontSize: 12,
                                }} />
                </div>
                <div className='col border'>
                    Step 04 - Write Unit Test for routes
                    <Editor
                                value={modelt}
                                onValueChange={modelt => setModelt(modelt)}
                                highlight={modelt => highlight(modelt, languages.js)}
                                padding={10}
                                style={{
                                    fontFamily: '"Fira code", "Fira Mono", monospace',
                                    fontSize: 12,
                                }} />
                </div>  
            </div>
        </div>
    )
}

export default Routes;