import React, {useReducer} from 'react';

import GoLogger from '../logger';
import RestInGo from '../rest';
import RestGin from '../restgin';
import SearchEngine from '../search';
import Palindrome from '../algorithms/palindrome';
import RemainderSorting from '../algorithms/remsort/remsort';
const App = () => {
    const Home = <div class="container">
                    <p>
                        Go By Example is set of small projects which will help beginner or
                        and experienced professional programmer to try and make their hands
                        dirty with real time projects. 
                    </p>
                    <div className='row'>
                        <div className='col-4'>
                            <a 
                            className='footer-h3' 
                            href="javascript:void(0)"
                                onClick={() => dispatch({ type: '3' })}>
                                Let's write a Search Engine...
                            </a>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-4'>
                            <a 
                            className='footer-h3' 
                            href="javascript:void(0)"
                            
                                onClick={() => dispatch({ type: '2' })}>
                                Rest API with Gin
                            </a>
                        </div>
                        <div className='col-4'>
                            <a 
                            className='footer-h3' 
                            href="javascript:void(0)"
                            
                                onClick={() => dispatch({ type: '0' })}>
                                Custom Logger for Go
                            </a>
                        </div>
                        <div className='col-4'>
                            <a 
                            className='footer-h3' 
                            href="javascript:void(0)"
                            
                                onClick={() => dispatch({ type: '1' })}>
                                Rest API with Gorilla
                            </a>
                        </div>
                    </div>
                   { /** algorithms... */}
                    <div className='row'>
                        <div className='col-4'>
                            <a 
                            className='footer-h3' 
                            href="javascript:void(0)"
                            
                                onClick={() => dispatch({ type: '4' })}>
                                Palindrome
                            </a>
                        </div>
                        <div className='col-4'>
                            <a 
                            className='footer-h3' 
                            href="javascript:void(0)"
                            
                                onClick={() => dispatch({ type: '5' })}>
                                Remainder Sorting
                            </a>
                        </div>
                    </div>
                </div>

    const initial = { current: Home, prev: '' };
    const [state, dispatch] = useReducer(reducer, initial);

    

    function reducer(state, action) {
        switch (action.type) {
            case '0':
                return { prev: state.current, current: <GoLogger/> };
            case '1':
                return { prev: state.current, current: <RestInGo/> };
            case '2':
                return { prev: state.current, current: <RestGin/> };
            case '3':
                return { prev: state.current, current: <SearchEngine/> };
            case '4':
                return { prev: state.current, current: <Palindrome/> };
            case '5':
                return { prev: state.current, current: <RemainderSorting/> };
            default:
                return { prev: state.current, current: Home };
        }
    }
    return (
        
        <div class="container">
            {state.current}
        </div>
    );
}

export default App;