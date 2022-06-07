import React from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';

const ParallelWithTimeout = () => {
    const [model, setModel] = React.useState(
        `#main.go
// parallel search with timeout
func SearchEngine(query string) (results []string) {
	resultChannel := make(chan string)
	quit := time.After(80 * time.Millisecond)
	go func() { resultChannel <- Web(query) }()
	go func() { resultChannel <- Image(query) }()
	go func() { resultChannel <- Video(query) }()
	for i := 0; i < 3; i++ {
		select {
		case result := <-resultChannel:
			results = append(results, result)
		case <-quit:
			fmt.Println("timeout on search")
			return
		}
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
            <h6>Implementation Of Parallel Search With Timeout</h6>
            <div className="row">
                <div className='col border'>
                    With Timout using select
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
export default ParallelWithTimeout