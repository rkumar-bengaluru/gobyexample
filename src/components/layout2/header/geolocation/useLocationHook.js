import { useEffect } from 'react';

// make API calls and pass the returned data via dispatch
export const useFetch = (data, dispatch) => {
	
    useEffect(async () => {
    	var url = data.locationUrl + '?lat=' + data.location.latitude + '&lag=' + data.location.longitude       
        await fetch(url)
            .then(data => data.json())
            .then(response => {
            	console.log(response);
            	if(response.status === 'success') {
            		data.srcPin = response.srcPin;
            		data.srcMsg = response.srcMsg;
            		data.destMsg = response.destMsg;
            		data.destPin = response.destPin;
            		data.isSupportedPin = response.isSupportedPin;
            		data.address = response.address;
            		dispatch({ type: 'STACK_HEADER', response })
	                dispatch({ type: 'FETCHING_HEADER', fetching: false }) 
            	}else {
            		data.errorMsg = 'Server Error';
	            	dispatch({ type: 'STACK_HEADER', response })
	                dispatch({ type: 'FETCHING_HEADER', fetching: false })      
            	}
            })
            .catch(e => {
                // handle error
                dispatch({ type: 'FETCHING_HEADER', fetching: false })
                return e;
            })
        url = data.distanceUrl  +'?destPin=' + data.destPin;
        await fetch(url)
        .then(data => data.json())
        .then(response => {
        	console.log(response);
        	if(response.status === 'success') {
        		data.distance = response.distance;
        		data.duration = response.duration;
        		dispatch({ type: 'STACK_HEADER', response })
                dispatch({ type: 'FETCHING_HEADER', fetching: false }) 
        	}else {
        		data.errorMsg = 'Server Error';
				data.isSupportedPin = false;
				data.distance = '.';
				data.duration = '.';
            	dispatch({ type: 'STACK_HEADER', response })
                dispatch({ type: 'FETCHING_HEADER', fetching: false })      
        	}
        })
        .catch(e => {
            // handle error
            dispatch({ type: 'FETCHING_HEADER', fetching: false })
            return e;
        })        
    }, [dispatch, data.page])
}
