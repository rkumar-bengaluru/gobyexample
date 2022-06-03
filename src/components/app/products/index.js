import React, { useReducer, useRef } from 'react';

import { useFetch, useInfiniteScroll, useLazyLoading } from './hooks'
import './index.css';
import loading from './rotate-pulsating-loading-animation.gif';
import { Link } from 'react-router-dom';

const Products = (props) => {

    const imgReducer = (state, action) => {
        switch (action.type) {
            case 'STACK_IMAGES':
                return { ...state, images: state.images.concat(action.images) }
            case 'FETCHING_IMAGES':
                return { ...state, fetching: action.fetching }
            default:
                return state;
        }
    }

    const pageReducer = (state, action) => {
        switch (action.type) {
            case 'ADVANCE_PAGE':
                return { ...state, page: state.page + 1 }
            case 'STOP_FETCHING':
                return { ...state, search: 1 }
            default:
                return state;
        }
    }

    const [pager, pagerDispatch] = useReducer(pageReducer, { page: 0, search: 0, productListUrl: props.productListUrl, productListSearchUrl: props.productListSearchUrl })
    const [imgData, imgDispatch] = useReducer(imgReducer, { images: [], fetching: true, })

    let bottomBoundaryRef = useRef(null);
    useFetch(pager, imgDispatch);
    useLazyLoading('.card-img-top', imgData.images)
    useInfiniteScroll(bottomBoundaryRef, pagerDispatch);

    return (
        <div className="">
            {imgData.fetching && (
                <div className="text-center bg-secondary m-auto p-3">
                    <p className="m-0 text-white"></p>
                </div>
            )}

            <div id='images' className="products-container">
                <div className="row">
                    {imgData.images.map((image, index) => {
                        const { Title, IMAGE, PID, Price } = image
                        const url = '/product/' + PID
                        return (
                            <div key={index} className="card">
                                <div className="card-body ">
                                    <Link to={url} target="_blank">
                                        <img
                                            alt={Title}
                                            data-src={IMAGE}
                                            className="card-img-top"
                                            src={loading}
                                        /></Link>
                                </div>
                                <Link to={url} target="_blank">
                                    <div className="card-footer">
                                        <p className="card-text text-center text-capitalize text-primary">{Title}</p>
                                        <p className="card-text text-center text-capitalize text-primary">{Price}</p>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>


            <div id='page-bottom-boundary' style={{ border: '1px solid red' }} ref={bottomBoundaryRef}></div>
        </div>
    );
}

export default Products;