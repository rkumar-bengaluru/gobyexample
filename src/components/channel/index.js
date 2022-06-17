import React from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';

const Channel = () => {
    const [model, setModel] = React.useState(
        `#channel.go
// function to wait to read from oddChannel & print
func printOddNumbers(oddChannel <-chan int, wg *sync.WaitGroup)  {
    wg.Add(1) // add a new go routine to wait group
    go func(){
        // wg.Done function decrement the go routine counter
        defer wg.Done()
        for oddNumber := range oddChannel {
            fmt.Printf("Recieved On OddChannel %d\n",oddNumber)
        }
    }()
}
` );
const [evenC, setEvenC] = React.useState(
    `#channel.go
// function to wait to read from evenChannel & print
func printEvenNumbers(evenChannel <-chan int, wg *sync.WaitGroup)  {
    wg.Add(1) // add a new go routine to wait group
    go func(){
        // wg.Done function decrement the go routine counter
        defer wg.Done()
        for evenNumber := range evenChannel {
            fmt.Printf("Recieved On EvenChannel %d\n",evenNumber)
        }        
    }()
}
` );
const [orch, setOrch] = React.useState(
    `#channel.go
// orchestration go routine
type input struct {
    number int
    oddChan chan int
    evenChan chan int
}
func doOrchestration(orchChannel <-chan input, wg *sync.WaitGroup)  {
    wg.Add(1) // add a new go routine to wait group
    go func(){
        defer wg.Done()
        var i input
        for i = range orchChannel {
            r := i.number % 2
            if r == 0 {
                i.evenChan <- i.number
            } else {
                i.oddChan <- i.number
            }
        }   
        // since done writing to channel, close the channel     
        defer close(i.oddChan)
        defer close(i.evenChan)
    }()
}
` );
const [main, setMain] = React.useState(
    `#channel.go
// main
func main()  {
    // make the channels
    evenChan := make(chan int)
    oddChan  := make(chan int)
    orchChan := make(chan input)
    var wg   := sync.WaitGroup
    data     := []int{5,4,3,2,1}
    // start the go routines.
    printEvenNumbers(evenChan <-chan int, wg *sync.WaitGroup)
    printEvenNumbers(evenChan <-chan int, wg *sync.WaitGroup)
    doOrchestration(orcChan <-chan input,wg *sync.WaitGroup)
    for i := 0; i < len(data); i++ {
		time.Sleep(time.Duration(rand.Intn(500)) * time.Millisecond)
		orchChan <- in{i: test[i], oddChan: oddChan, evenChan: evenChan}
	}
	close(orcChan)
	wg.Wait()
}
` );

    return (
        <div className="container">
            <h3>Go Routine With WaitGroup and Channel</h3>
            <p>
                We will write 3 go routines they are:-
                <li>
                    Go Routine which will await numbers to be written to 
                    EvenChannel, it will just print the recieved number.
                </li>
                <li>
                    Go Routine which will await numbers to be written to 
                    OddChannel, it will print the recieved number.
                </li>
                <li>
                    Go Routine which will await numbers to be written 
                    in an OrchestatorChannel. This will check if the recieved
                    number is even or odd. If the number is odd it will write to
                    EvenChannel or else write the number to OddChannel.
                </li>
            </p>
            <div className="row">
                <div className='col border'>
                    <h6>Step 01 - Write the Odd Go Routine Function</h6>
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
                    <h6>Step 02 - Write the even Go Routine Function</h6>
                    <Editor
                                value={evenC}
                                onValueChange={evenC => setEvenC(evenC)}
                                highlight={evenC => highlight(evenC, languages.js)}
                                padding={10}
                                style={{
                                    fontFamily: '"Fira code", "Fira Mono", monospace',
                                    fontSize: 12,
                                }} />
                </div>
            </div>
            <h6>Orchestator Go Routine</h6>
            <p>
                This Go Routine function will wait for data to be written 
                to Orchestator Channel
            </p>
            <div className="row">
                <div className='col border'>
                    <h6>Step 03 - Write the Orchestator Go Routine</h6>
                    <Editor
                                value={orch}
                                onValueChange={orch => setOrch(orch)}
                                highlight={orch => highlight(orch, languages.js)}
                                padding={10}
                                style={{
                                    fontFamily: '"Fira code", "Fira Mono", monospace',
                                    fontSize: 12,
                                }} />
                </div>
                <div className='col border'>
                    <h6>Step 04 - Write the main function</h6>
                    <Editor
                                value={main}
                                onValueChange={orch => setMain(main)}
                                highlight={orcmainh => highlight(main, languages.js)}
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

export default Channel