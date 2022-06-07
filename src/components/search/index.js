import React, {useReducer} from 'react';
import ParallelSearch from "./parallel"
import ParallelSearchWithTimeOut from "./parallelwithtimeout"
import ReplicaSearch from "./replicas"
import SerialSearch from "./serial"
import Home from "./home"
const SearchEngine = () => {
    

    function reducer(state, action) {
        switch (action.type) {
            case '0':
                return { prev: state.current, current: <SerialSearch/> };
            case '1':
                return { prev: state.current, current: <ParallelSearch/> };
            case '2':
                return { prev: state.current, current: <ParallelSearchWithTimeOut/> };
            case '3':
                return { prev: state.current, current: <ReplicaSearch/> };
            default:
                return { prev: state.current, current: Home };
        }
    }

    const initial = { current: <Home />, prev: '' };
    const [state, dispatch] = useReducer(reducer, initial);
    
    

    return (
        <div class="container">
            {state.current}
        </div>
    )
}
export default SearchEngine