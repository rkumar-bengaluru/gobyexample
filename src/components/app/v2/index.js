import React from 'react';
import Products from './products'


const App2 = props => {

    return (
        <div class="row justify-content-around border-bottom">
            <Products productListUrl={process.env.REACT_APP_catalogListUrl} productListSearchUrl={process.env.REACT_APP_catalogListHasMore} />
        </div>
    );
}

export default App2;