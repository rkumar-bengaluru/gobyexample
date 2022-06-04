import React, {useReducer} from 'react';

import GoLogger from '../logger';
import RestInGo from '../rest';

const App = () => {
    const Home = <div class="row">
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

    const initial = { current: Home, prev: '' };
    const [state, dispatch] = useReducer(reducer, initial);

    

    function reducer(state, action) {
        switch (action.type) {
            case '0':
                return { prev: state.current, current: <GoLogger/> };
                case '1':
            return { prev: state.current, current: <RestInGo/> };
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