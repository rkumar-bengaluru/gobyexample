import React from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';

const RestCmd = () => {
    const [app, setApp] = React.useState(
        `#main.go
package main

import (
    "github.com/rkumar-bengaluru/go/rest/routes"
)
        
func main() {
    var a = routes.App{}
    a.Initialize(
        "postgres",
        "postgrespw",
        "sampledb",
    )
    a.Run(":8080")
}`);
    return (
        <div className='container'>
            <h3>Running the Rest API's</h3>
            <div className='row'>
                <div className='col'>
                    <p>
                        In Go for running any module you would need a main package with 
                        main() function. For simplicity we will refer Cmd package as main
                        which the go runtime will use to start the application.
                    </p>
                </div>
            </div>
            <div className='row'>
                <div className="col-6 border">
                Step 01 - Write the main program
                    <Editor
                            value={app}
                            highlight={app => highlight(app, languages.js)}
                            padding={10}
                            style={{
                                fontFamily: '"Fira code", "Fira Mono", monospace',
                                fontSize: 12,
                            }} />
                </div>
                <div className="col-6 border">
                Step 02 - Run the below commands and run the rest server
                    <Editor
                            value="
                            go mod init github.com/rkumar-bengaluru/go/rest/cmd
                            go mod tidy
                            go run github.com/rkumar-bengaluru/go/rest/cmd
                            "
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

export default RestCmd;