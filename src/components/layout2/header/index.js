import React, {  } from 'react';

const Header2 = (props) => {

    return (
        <div>
            <div className="row justify-content-between border-bottom m-1 bg-primary">
                <div className="d-flex flex-wrap align-content-center">
                    <div className="col-md-auto">
                        {/* {!showSideBar &&
                            <button type="button" className="btn btn-primary" onClick={() => handleShowSideBar()}>
                                <i class="fas fa-bars"></i>
                            </button>
                        } */}
                        {/* Side Bar Navigation Starts Here */}
                        {/*showSideBar && renderNavigationBar()*/}
                        {/* Side Bar Navigation Ends Here */}
                        <a href="/">
                            <img src='/gobyexample/go/logo.jpg' alt="LocalShop"></img>
                        </a>
                    </div>
                </div>
                <div className="col-md-auto"><h2 class="text-white"><span class="footer-h3 text-white" >Learn Go By Example</span></h2></div>
                <div className="col-md-auto">
                    {
                        <>
                        <a className="nav-link ml-2 mr-2 text-white"
                                        href="/gobyexample"
                                        rel="noopener noreferrer">Home
                                        <span className="sr-only">(current)</span>
                                    </a>
                        
                        </>
                    }
                </div>
            </div>
            
        </div>
    );
}
export default Header2;