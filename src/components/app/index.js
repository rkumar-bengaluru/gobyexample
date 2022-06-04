import React, {useReducer} from 'react';

import GoLogger from '../logger';

const App = () => {
    const Home = <div class="row">
                    <div className='col'>
                        <a 
                         className='footer-h3' 
                         href="javascript:void(0)"
                         
                            onClick={() => dispatch({ type: '0' })}>
                            Custom Logger for Go
                        </a>
                    </div>
                </div>

    const initial = { current: Home, prev: '' };
    const [state, dispatch] = useReducer(reducer, initial);

    

    function reducer(state, action) {
        switch (action.type) {
            case '0':
                return { prev: state.current, current: <GoLogger/> };
            default:
                return { prev: state.current, current: Home };
        }
    }
    return (
        
        <div class="row justify-content-around border-bottom">
            {state.current}
        </div>
    );
}

export default App;