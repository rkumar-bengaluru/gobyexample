// Dependencies
import React from 'react';
//Internals

import './index.css';

import Carousel from '../carousel';
import Products from './products'

const App = props => {
	const {
		productVariation
	} = props;
	return (
		<div className="content">
			{/*  
			<div className="carousel-slider">
				<Carousel />
			</div>
			*/}
			<div className="products">
				<Products productListUrl={process.env.REACT_APP_catalogListUrl} productListSearchUrl={process.env.REACT_APP_catalogListHasMore} />
			</div>
		</div>
	);
};

App.defaultProps = {
	productVariation: {
		doesContainVar: false,
		label: 'String Color',
		images:
			[
				'http://localhost:3000/B08FCKQ6DS/01.jpg',
				'http://localhost:3000/B08FCKQ6DS/02.jpg',
				'http://localhost:3000/B08FCKQ6DS/03.jpg',
				'http://localhost:3000/B08FCKQ6DS/04.jpg',
				'http://localhost:3000/B08FCKQ6DS/05.jpg',
				'http://localhost:3000/B08FCKQ6DS/06.jpg',
				'http://localhost:3000/B08FCKQ6DS/07.jpg',
			],
		variations:
			[
				{
					label: "Red",
					doesVarContainImages: true,
					images: [
						'http://localhost:3000/B08FCKQ6DS/red/01.jpg',
						'http://localhost:3000/B08FCKQ6DS/red/02.jpg',
						'http://localhost:3000/B08FCKQ6DS/red/03.jpg',
						'http://localhost:3000/B08FCKQ6DS/red/04.jpg'
					]
				},
				{ label: "Black" },
				{ label: "White" },
				{ label: "Pink" },
				{ label: "Yellow" },
				{ label: "Orange" }
			]
	}

};

export default App;
