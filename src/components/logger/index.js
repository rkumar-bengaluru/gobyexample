
import React from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';

const GoLogger = (props) => {
    const [code, setCode] = React.useState(
        `function add(a, b) {\n  return a + b;\n}`
      );
    return (
        <div className="container">
            <h2>Logging in Go</h2>
            <p>
                As a experienced developer the first thing that comes in mind for a project is
                logging even for basic hello world in any programming language you start with is
                printing the hello message. However it would be great if we start with logging the
                hello message as any project you will end up there.
            </p>
            <h3>Limitation of Default Go Logger</h3>
            <p>I have spent most of time in Java and first thing i would like to see is what to log and 
                and what is the level of the log example debug, info, warning, error. This default
                levelled based logging is missing in default log in Go. Not sure why they designed 
                it that way probably they left it for open source developers to jump in and create
                that for Go :)
            </p>
            <h4>Let's build a Custom Go Logger</h4>
            <p>So this is my first go lang project, build a logger with different levels of logging.</p>
            <h4>Project Structure</h4>
            <div className="row">
                <div className="col">
                   <p>Go to your project root directory and run the following commands:</p>
                    <Editor
                            value="# go work init"
                                onValueChange={code => setCode(code)}
                            highlight={code => highlight(code, languages.js)}
                            padding={10}
                            style={{
                                fontFamily: '"Fira code", "Fira Mono", monospace',
                                fontSize: 12,
                            }} />
                    <p>
                        This will create your project workspace go.work. Inside the project 
                        root directory create 2 folders, cmd :- Keep your main.go source file, 
                        go runtime uses this and logger :- Keep your logger.go source code.
                    </p>
                </div>
                
                <div className="col">
                   <p>Will use Zap logger in the background and will provide abstraction of a 
                       custom logger for this project</p>
                       <Editor
                            value="
                            #logger.go
                            // first struct in go
                            type Logger struct {
                                log *zap.Logger
                            }
                            // define a function for Logger.
                            func (logger *Logger) Info(msg string) {
                                logger.log.Info(msg)
                            }
                            "
                                onValueChange={code => setCode(code)}
                            highlight={code => highlight(code, languages.js)}
                            padding={10}
                            style={{
                                fontFamily: '"Fira code", "Fira Mono", monospace',
                                fontSize: 12,
                            }} />
                </div>
            </div>
            <div className="row">
                <div className="col">
                   
                </div>
                <div className="col">
                    <Editor
                        value={code}
                            onValueChange={code => setCode(code)}
                        highlight={code => highlight(code, languages.js)}
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

export default GoLogger;