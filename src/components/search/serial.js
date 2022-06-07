import React from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';

const SerialSearch = () => {
    const [model, setModel] = React.useState(
        `#main.go
// fake search implementation
var (
	Web   = fakeSearch("Web")
	Image = fakeSearch("Image")
	Video = fakeSearch("Video")
)
type FakeSearch func(query string) string
func fakeSearch(kind string) FakeSearch {
	return func(query string) string {
		time.Sleep(time.Duration(rand.Intn(100)) * time.Millisecond)
		return fmt.Sprintf("%v result for %q\n", kind, query)
	}
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
            <h4>Implementation Of Serial Search</h4>
            <div className="row">
                <div className='col border'>
                    Step 01 - Fake Search Implementation
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
                    Step 02 - Serial Search for all Service
                    <Editor
                                value={service}
                                onValueChange={service => setService(service)}
                                highlight={service => highlight(service, languages.js)}
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
export default SerialSearch