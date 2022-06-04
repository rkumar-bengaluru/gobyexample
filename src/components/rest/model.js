import React from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';

const RestModel = () => {
    const [model, setModel] = React.useState(
        `#model.js
type Product struct {
    ID    int \u0060json:"id,omitempty\u0060    
    Name  string  \u0060json:"name"\u0060
    Price float64 \u0060json:"price"\u0060
}`);
const [func, setFunc] = React.useState(
    `#model.js
func (p *Product) GetProduct(db *sql.DB) error {
    log.Info(fmt.Sprintf("product to fetch %v\n", p.ID))
    return db.QueryRow("SELECT name,price from products where id=$1", p.ID).Scan(&p.Name, &p.Price)
}`);
const [depencies, setDepencies] = React.useState(
    `#model.js
import (
    "database/sql"
    "fmt"
    "github.com/rkumar-bengaluru/go/logger"
)`);
const [all, setAll] = React.useState(
    `#model.js\nvar allproducts = map[int]Product{
        1: Product{1, "apple", 8.99},
        2: Product{2, "mango", 7.99},
        3: Product{3, "banana", 4.33},
}`);
const [inmem, setInMem] = React.useState(
    `#model.js\nfunc (p *Product) GetProductInMemory() error {
    for key, val := range allproducts {
        if key == p.ID {
             p.Name = val.Name
            p.Price = val.Price
            break
        }
    }
    return errors.New("product not found...")
}`);
    return (
        <div className="container">
            <h3>Model Of the Rest API</h3>
            <div className='row '>
                <div className='col'>
                    <p>
                        Let's say we are building a product catalog API to create,
                        update, delete and read products. For the sake of simplicity
                        we will discuss only of the API's. To check all of them please
                        look at the code repository link 
                        <a target="_blank" href='https://github.com/rkumar-bengaluru/go/tree/main/rest/model'> here.</a>
                    </p>
                </div>
                <div className='col border'>
                        Step01 - Define the model
                        <Editor
                            value={model}
                            onValueChange={model => setModel(model)}
                            highlight={code => highlight(code, languages.js)}
                            padding={10}
                            style={{
                                fontFamily: '"Fira code", "Fira Mono", monospace',
                                fontSize: 12,
                            }} />
                </div>
            </div>
            <div className='row '>
                <div className='col border'>
                        Step02 - Define the function on the model
                        <Editor
                            value={func}
                            onValueChange={func => setFunc(func)}
                            highlight={code => highlight(code, languages.js)}
                            padding={10}
                            style={{
                                fontFamily: '"Fira code", "Fira Mono", monospace',
                                fontSize: 12,
                            }} />
                   
                </div>
                <div className='col border'>
                Step03 - import necessary dependencies
                        <Editor
                            value={depencies}
                            onValueChange={depencies => setDepencies(depencies)}
                            highlight={code => highlight(code, languages.js)}
                            padding={10}
                            style={{
                                fontFamily: '"Fira code", "Fira Mono", monospace',
                                fontSize: 12,
                            }} />
                </div>
            </div>
            <p>
                You can choose to 
                to implement a in memory model as well instead of db.
            </p>
            <div className='row '>
                <div className='col border'>
                        Step 02.01 - Define in memory map of products.
                        <Editor
                            value={all}
                            onValueChange={all => setAll(all)}
                            highlight={code => highlight(code, languages.js)}
                            padding={10}
                            style={{
                                fontFamily: '"Fira code", "Fira Mono", monospace',
                                fontSize: 12,
                            }} />
                   
                </div>
                <div className='col border'>
                Step 02.02 - Define function with InMemory data
                        <Editor
                            value={inmem}
                            onValueChange={inmem => setInMem(inmem)}
                            highlight={inmem => highlight(inmem, languages.js)}
                            padding={10}
                            style={{
                                fontFamily: '"Fira code", "Fira Mono", monospace',
                                fontSize: 12,
                            }} />
                </div>
            </div>
            <p>
                Run the necessary commands to build the model module. 
            </p>
            <div className='row border'>
                        <Editor
                            value="
                            go mod init github.com/rkumar-bengaluru/go/rest/model
                            go mod tidy
                            "
                            onValueChange={depencies => setDepencies(depencies)}
                            highlight={code => highlight(code, languages.js)}
                            padding={10}
                            style={{
                                fontFamily: '"Fira code", "Fira Mono", monospace',
                                fontSize: 12,
                            }} />
            </div>
        </div>
    )
}

export default RestModel