import React from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';

const ReplicaSearch = () => {
    const [model, setModel] = React.useState(
        `#main.go
var (
    Web          = fakeSearch("Web")
    WebReplica   = fakeSearch("Web Replica")
    Image        = fakeSearch("Image")
    ImageReplica = fakeSearch("Image Replica")
    Video        = fakeSearch("Video")
    VideoReplica = fakeSearch("Video Replica")
)
func GetFromFirstReplica(query string, replicas ...FakeSearch) string {
    c := make(chan string)
    searchReplica := func(i int) { c <- replicas[i](query) }
    for i := range replicas {
        go searchReplica(i)
    }
    return <-c
}

` );
const [service, setService] = React.useState(
    `#main.go
func SearchEngine(query string) (results []string) {
    resultChannel := make(chan string)
    quit := time.After(80 * time.Millisecond)
    go func() { resultChannel <- GetFromFirstReplica(query, Web, WebReplica, Web) }()
    go func() { resultChannel <- GetFromFirstReplica(query, Image, ImageReplica, ImageReplica) }()
    go func() { resultChannel <- GetFromFirstReplica(query, Video, VideoReplica, VideoReplica) }()
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
    return (
        <div classNamae="container">
            <h6>Many replica Implementation</h6>
            <div className="row">
                <div className='col border'>
                    Get first from replica
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
                    Search with multiple replicas
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
export default ReplicaSearch