import React from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';

const ParallelSearch = () => {
    const [model, setModel] = React.useState(
        `#main.go
// parallel search with go routine
func SearchEngine(query string) (results []string) {
    resultChannel := make(chan string)
    go func() { resultChannel <- Web(query) }()
    go func() { resultChannel <- Image(query) }()
    go func() { resultChannel <- Video(query) }()
    // waiting for the slowest service...
    for i := 0; i < 3; i++ {
        results = append(results, <-resultChannel)
    }
    return
}
` );
const [service, setService] = React.useState(
    `#main.go
    func SearchEngine(query string) (results []string) {
        results = append(results, Web(query))
        results = append(results, Image(query))
        results = append(results, Video(query))
        return
    }
    func SearchMain(query string) {
        start := time.Now()
        results := SearchEngine("golang")
        elapsed := time.Since(start)
        fmt.Println(results)
        fmt.Println(elapsed)
    }
    func main() {
        SearchMain("Golang")
    }
` );
    return (
        <div classNamae="container">
            <h4>Implementation Of Parallel Search</h4>
            <div className="row">
                <div className='col border'>
                    Step 01 - Use Go With Channel for fakeSearch
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
export default ParallelSearch