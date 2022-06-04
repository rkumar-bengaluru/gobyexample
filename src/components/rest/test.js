import React from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';

const RestTest = () => {
    const [dep, setDep] = React.useState(
        `#routes_test.go
import (
    "github.com/rkumar-bengaluru/go/rest/routes"
    "log"
    "net/http"
    "net/http/httptest"
    "os"
    "testing"
)`);
    const [app, setApp] = React.useState(
        `#routes_test.go
var app = routes.App{}\n
func TestGetProduct(t *testing.T) {
    clearTable()
    req, _ := http.NewRequest("GET", "/product/1", nil)
    rec := httptest.NewRecorder()
    app.Router.ServeHTTP(rec, req)
    if rec.Code != http.StatusOK {
        t.Errorf("expected %v, recvd %v", http.StatusOK, rec.Code)
    }
}`);

const [m, setM] = React.useState(
    `#routes_test.go
func TestMain(m *testing.M) {
    app.Initialize(
        "postgres",
        "postgrespw",
        "sampledb",
    )
    ensureTableExist()
    code := m.Run()
    clearTable()
    os.Exit(code)
}`);
    return (
        <div className='container'>
            <h3>Go Unit Testing</h3>
            <div className='row'>
                
                    So far we have developed one of the rest api's. Here we will see how to 
                    use the inbuild testing capabilities in Go to test the rest API.
                
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
                Step 02 - Write the Main test. It is like setup and teardown for each test.
                        <Editor
                            value={m}
                            onValueChange={m => setM(m)}
                            highlight={m => highlight(m, languages.js)}
                            padding={10}
                            style={{
                                fontFamily: '"Fira code", "Fira Mono", monospace',
                                fontSize: 12,
                            }} />
                </div>
                
            </div>
            <div className='row'>
                <div className="col-6 border">
                Step 03 - Write the test for GetProduct
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
                <div className="col-6 border">
                Step 02 - Write the test for GetProduct
                        <Editor
                            value="go test -v github.com/rkumar-bengaluru/go/rest/routes"
                            onValueChange={app => setApp(app)}
                            highlight={app => highlight(app, languages.js)}
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
export default RestTest;