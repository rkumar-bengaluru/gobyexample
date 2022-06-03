import React, { useReducer } from 'react';
import PropTypes from "prop-types";
import { useFetch } from './useLocationHook'
import DeliveryBar from './useLlocationSVG.js';

const Location = ({ location, error }) => {

	const headerReducer = (state, action) => {
		switch (action.type) {
			case 'STACK_HEADER':
				return { ...state, status: action.response.status, distance: action.response.distance, duration: action.response.duration }
			case 'FETCHING_HEADER':
				return { ...state, fetching: action.fetching }
			default:
				return state;
		}
	}

	const [headerData, headerDispatch] = useReducer(headerReducer, {
		srcPin: '560097',
		srcMsg: 'Shop Location',
		destMsg: 'Deliver To',
		destPin: '...',
		isSupportedPin: false,
		address: '',
		errorMsg: '',
		distance: '...',
		duration: '...',
		location: location,
		locationUrl: process.env.REACT_APP_getDestLocUrl,
		distanceUrl: process.env.REACT_APP_getDistanceUrl
	})

	useFetch(headerData, headerDispatch);

	return (
		<div>
			{location ? (
				<DeliveryBar
					srcLoc={headerData.srcPin}
					srcMsg={headerData.srcMsg}
					distance={headerData.distance}
					time={headerData.duration}
					destMsg={headerData.destMsg}
					destLoc={headerData.destPin} destAddress={headerData.address} />
			) : (
					<div class="spinner-border text-warning"></div>
				)
			}
			{error && <p className="errorMessage">Location Error: {error}</p>}
		</div>
	);
};

Location.propTypes = {
	location: PropTypes.object,
	error: PropTypes.string,
};

export default Location;