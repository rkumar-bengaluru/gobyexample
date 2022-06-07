
import React from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';

const Main = () => {
    const [model, setModel] = React.useState(
        `#main.go
package main
import (
    "github.com/rkumar-bengaluru/go/restgin/routes"
)
func main() {
    app := routes.App{}
    app.Intialize()
    app.router.Run("localhost:8080")
}

// run the following command
// #go mod init github.com/rkumar-bengaluru/go/restgin/main
// #go run github.com/rkumar-bengaluru/go/restgin/main
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
            <h4>Main Definition.</h4>
            <div className="row">
                <div className='col border'>
                    Step 05 - Write the main function
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
            </div>
        </div>
    )
}

export default Main;