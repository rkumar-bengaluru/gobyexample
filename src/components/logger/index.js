
import React from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';

const GoLogger = (props) => {
   
      const [main, setMain] = React.useState(
        `\t#cmd/main.go
        package main

        import (
            "github.com/rkumar-bengaluru/go/logger"
        )
        
        func main() {
            \tlogger.New().Info("default logger")
        }\n`
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
            
            <div className="row">
                <div className="col">
                    <h5>Step 01</h5>
                   <p>Go to your project root directory and run the following commands:</p>
                    <Editor
                            value="# go work init"
                                
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
                <h5>Step 02</h5>
                   <p>Will use Zap logger in the background and will provide abstraction of a 
                       custom logger for this project</p>
                       <Editor
                            value='
                            #logger.go
                            // first struct in go
                            type Logger struct {
                                log *zap.Logger
                            }
                            // define a function for Logger.
                            func (logger *Logger) Info(msg string) {
                                logger.log.Info(msg)
                            }'
                            
                                
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
                   <h5>Step 03 - Create a New function to initialize logger</h5>
                   <Editor
                        value="func New() *Logger {
                            l, _ := zap.NewProduction()
                            defer l.Sync()
                            return &Logger{l}
                        }"
                           
                        highlight={code => highlight(code, languages.js)}
                        padding={10}
                        style={{
                            fontFamily: '"Fira code", "Fira Mono", monospace',
                            fontSize: 12,
                        }} />
                </div>
                <div className="col">
                    <h5>Step 04 - import zapper packages</h5>
                    <Editor
                        value='import (
                            "go.uber.org/zap"
                            "go.uber.org/zap/zapcore"
                            "gopkg.in/natefinch/lumberjack.v2"
                        )'
                           
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
                   <h5>Step 05 - Create Module files</h5>
                   <Editor
                        value="go mod init github.com/rkumar-bengaluru/go/logger"
                           
                        highlight={code => highlight(code, languages.js)}
                        padding={10}
                        style={{
                            fontFamily: '"Fira code", "Fira Mono", monospace',
                            fontSize: 12,
                        }} />
                    <p>This will create go.mod file</p>
                </div>
                <div className="col">
                    <h5>Step 06 - Install third party packages and resolve dependencies</h5>
                    <Editor
                        value='go mod tidy'
                          
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
                   <h5>Step 07 - Final Go.mod as below</h5>
                   <Editor
                        value="module github.com/rkumar-bengaluru/go/logger

                        go 1.18
                        
                        require (
                            go.uber.org/zap v1.21.0
                            gopkg.in/natefinch/lumberjack.v2 v2.0.0
                        )
                        
                        require (
                            github.com/BurntSushi/toml v1.1.0 // indirect
                            go.uber.org/atomic v1.7.0 // indirect
                            go.uber.org/multierr v1.6.0 // indirect
                        )"
                           
                        highlight={code => highlight(code, languages.js)}
                        padding={10}
                        style={{
                            fontFamily: '"Fira code", "Fira Mono", monospace',
                            fontSize: 12,
                        }} />
                    <p>This will create go.mod file</p>
                </div>
                <div className="col">
                    <h5>Step 08 - Let's use this logger module we build in cmd module</h5>
                    <Editor
                        value={main}                        
                        onValueChange={code => setMain(code)}
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
                   <h5>Step 09 - Create main module</h5>
                   <Editor
                        value="go mod init github.com/rkumar-bengaluru/go"
                           
                        highlight={code => highlight(code, languages.js)}
                        padding={10}
                        style={{
                            fontFamily: '"Fira code", "Fira Mono", monospace',
                            fontSize: 12,
                        }} />
                    <p>followed by install package dependencies</p>
                    <Editor
                        value="go mod tidy"
                           
                        highlight={code => highlight(code, languages.js)}
                        padding={10}
                        style={{
                            fontFamily: '"Fira code", "Fira Mono", monospace',
                            fontSize: 12,
                        }} />
                </div>
                <div className="col">
                    <h5>Step 10 - Use local workspace and Run the main module</h5>
                    <p>In the project root directory, run the following commands</p>
                    <Editor
                        value="
                        go work use ./cmd
                        go work use ./logger
                        go run github.com/rkumar-bengaluru/go
                        "                     
                          
                        highlight={code => highlight(code, languages.js)}
                        padding={10}
                        style={{
                            fontFamily: '"Fira code", "Fira Mono", monospace',
                            fontSize: 12,
                        }} />
                </div>
                
            </div>
            <p>
                You can find the complete source code 
                 <a href='https://github.com/rkumar-bengaluru/go' target="_blank"  rel="noreferrer"> here</a>
            </p>
        </div>
    )
}

export default GoLogger;