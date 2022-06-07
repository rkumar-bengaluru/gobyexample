import React, {useReducer} from 'react';

import GoLogger from '../logger';
import RestInGo from '../rest';
import RestGin from '../restgin'
const App = () => {
    const Home = <div class="row">
                    <p>
                        Go By Example is set of small projects which will help beginner or
                        and experienced professional programmer to try and make their hands
                        dirty with real time projects. 
                    </p>
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
                    <div className='col-4'>
                        <a 
                         className='footer-h3' 
                         href="javascript:void(0)"
                         
                            onClick={() => dispatch({ type: '2' })}>
                            Rest API with Gin
                        </a>
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