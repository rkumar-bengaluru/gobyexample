import React from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';

const Palindrome = () => {
    const [model, setModel] = React.useState(
        `#palindrome.go
import (
    "strconv"
)
func CheckIfPlaindrom(n string) bool {
    toCheck := []rune(n)
    m := (len(toCheck) -1)/2
    for i,j := 0,len(toCheck) -1; i <= m; i,j = i+1, j -1 {
        if toCheck[i] != toCheck[j] {
            return false
        }
    }
    return true
}

func CheckIfIntPalindrome(n i) bool {
    str := strconv.Itoa(i)
    return CheckIfPlaindrom(n)
}
` );
const [test, setTest] = React.useState(
    `#palindrome_test.go
import (
"testing"
)
func TestCheckIfPlaindrom(t *testing.T)  {
    test := "madam"
    want := true
    got  := CheckIfPlaindrome(test)
    if got != want {
        t.Errorf("want %v got %v\n",want,got)
    }
}

func TestCheckIfIntPalindrome(t *testing.T)  {
    test := 10101
    want := true
    got := CheckIfIntPalindrome(test)
    if got != want {
        t.Errorf("want %v got %v\n",want,got)
    }
}
` );
    return (
        <div classNamae="container">
            <h4>Palindrome String and Integer</h4>
            <p>A palindrome string or integer is one which is same if you reverse the string or integer</p>
            <p>Example Of String Palindrome :- madam</p>
            <p>Example Of Integer Palindrome :- 10101</p>
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
export default Palindrome