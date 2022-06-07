
import React from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';

const Model = () => {
    const [model, setModel] = React.useState(
        `#model.go
package model
import "errors"
type Product struct {
    ID int \u0060json:"id"\u0060
    Name string \u0060json:"name"\u0060
    Price float64 \u0060json:"price"\u0060
}
// In mem list of products
var all := map[int]Product {
    1 : Product{1, "apple", 8.88},
    2 : Product{2, "banana:, 4.44}
}
// method to fetch product
func (p *Product) GetProduct() error {
    for key,val := range all {
        if key == p.ID {
            p.Name = val.Name
            p.Price = val.Price
            return nil
        }
    }
    return errors.New("could not find product")
}
// run the following command
// #go mod init github.com/rkumar-bengaluru/go/restgin/model
// #go mod tidy
` );

const [modelt, setModelt] = React.useState(
    `#model_test.go
package model_test
import (
    "github.com/rkumar-bengaluru/go/restgin/model"
    "testing"
)

func TestGetProduct(t *testing.T) {
    p := model.Product(ID : 1)
    p.GetProduct()
    if p.Name != "apple"{
        t.Errorf("was expecting name as apple however got %v, ", p.Name)
    }
    if p.Price != 8.88 {
        t.Errorf("was expecting price as 8.88 but got %v",p.Price)
    }
}
// run the following command to test.
// #go test .
    `
);
    return (
        <div className="container">
            <h4>Model Definition.</h4>
            <div className="row">
                <div className='col border'>
                    Step 01 - Define the model
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
                    Step 02 - Write Unit Test for model
                    <Editor
                                value={modelt}
                                onValueChange={modelt => setModelt(modelt)}
                                highlight={modelt => highlight(modelt, languages.js)}
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

export default Model;