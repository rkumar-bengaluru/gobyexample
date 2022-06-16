import React from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';

const RemainderSorting = () => {
    const [model, setModel] = React.useState(
        `#remsort.go
type RemObj struct {
    idx int
    mod int
    str string
}

type RemList struct {
    list []RemObj
}
// implement Sort interface on RemList
func (r *RemList) Len() int {
    return len(r.list)
}
func (r *RemList) Less(i,j int) bool {
    if r.list[i].mod == r.list[j].mod {
        // sort by str
        return r.list[i].str < r.list[j].str
    }
    // else sort by mod
    return r.list[i].mod < r.list[j].mod
}
func (r *RemList) Swap(i,j int) {
    r.list[i],r.list[j] = r.list[j],r.list[i]
}
func (r *RemList) Add(l RemObj) {
    r.list = append(r.list, l)
}
func RemainderSorting(s []string, k int) []string {
    r := RemList{}
    for i := 0; i < len(s);i++ {
        m := len(s[i]) % k
        r.Add(RemObj{idx : i, mod : m , str : s[i]})
    }
    sort.Sort(r)
    res := []string
    for i :=0; i < r.Len();i++ {
        res = res.append(res,r.list[i].str)
    }
    return res
}
` );
const [test, setTest] = React.useState(
    `#remsort_test.go
import (
"testing"
"reflect"
)
func TestCheckIfPlaindrom(t *testing.T)  {
    test := {"Colarado","Utah","Wisconsin","Oregon"}
    want := {"Oregon","Wisconsin","Utah","Colarado"}
    got  := RemainderSorting(test,3)
    r := reflect.DeepEqual(want,got)
    if !r {
        t.Errorf("want %v got %v\n",want,got)
    }
}
` );
    return (
        <div classNamae="container">
            <h4>Remainder Sorting</h4>
            <p>
                Provided a array of strings sort the strings based on following logic
                <li>
                    Sort the strings based on the lengths of each string and modula of k
                </li>
                <li>
                    If the modula is same then sort by string in that index.
                </li>
            </p>
            <p>
                Example Input := &#123;"Colarado","Utah","Wisconsin","Oregon"&#125;<br/>
                The lengths of string as follows := &#123;8,4,9,6&#125;<br/>
                If the value of k is 3 then the modula as follows :- &#123;2,1,0,0&#125;<br/>
                Since the modula of 3rd and 4th element is same sort them by string and hence
                the below response.<br/>
                &#123;"Oregon","Wisconsin","Utah","Colarado"&#125;
            </p>
            <div className="row">
                <div className='col-6 border'>
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
                <div className='col-6 border'>
                    <Editor
                                value={test}
                                onValueChange={test => setModel(test)}
                                highlight={test => highlight(test, languages.js)}
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
export default RemainderSorting