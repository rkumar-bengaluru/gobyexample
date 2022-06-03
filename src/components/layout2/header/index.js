import React, { useState, useEffect } from 'react';

import useCurrentLocation from "./geolocation/useCurrentLocation";
import useWatchLocation from "./geolocation/useWatchLocation";
import { geolocationOptions } from "./geolocation/geolocationOptions";
import Location from "./geolocation/useLocation";
import SearchBar from './searchbar';

const Header2 = (props) => {

    const [showSideBar, setShowSideBar] = useState(false);
    const [showSportsBar, setShowSportsBar] = useState(true);
    const { location: currentLocation, error: currentError } = useCurrentLocation(geolocationOptions);
    const { location, cancelLocationWatch, error } = useWatchLocation(geolocationOptions);
    const [isWatchinForLocation, setIsWatchForLocation] = useState(true);
    const [words, setWords] = useState([]);

    useEffect(() => {
        fetch(process.env.REACT_APP_disUrl)
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {                
                setWords(myJson);
                // check the window location
                var loc = window.location.href;
                if(loc.includes('mishka')) {
                    setShowSportsBar(false);
                }
            });
    }, [])

    useEffect(() => {
        if (!location) return;

        // Cancel location watch after 3sec
        setTimeout(() => {
            cancelLocationWatch();
            setIsWatchForLocation(false);
        }, 3000);
    }, [location, cancelLocationWatch]);

    function handleShowSideBar() {
        setShowSideBar(true);
        console.log('button clicked.' + showSideBar)
    }

    function handleHideSideBar() {
        setShowSideBar(false);
        console.log('button clicked.' + showSideBar)
    }

    function renderMenus() {
        return (
            <div class="row justify-content-around">
                <div class="card">
                    <a href="/category/badminton/apacs">
                        <img height="50px" width="50px" class="card-img-top" src="/icons/apacs.svg" alt="Local Shop App" />
                    </a>
                </div>
                <div class="card">
                    <a href="/category/badminton/yonex">
                        <img height="50px" width="50px" class="card-img-top" src="/icons/yonex.svg" alt="Local Shop App" />
                    </a>
                </div>
                <div class="card">
                    <a href="/category/badminton/lining">
                        <img height="50px" width="50px" class="card-img-top" src="/icons/lining.svg"
                            alt="Local Shop App" /></a>
                </div>
                <div class="card">
                    <a href="/category/badminton/"><img height="50px" width="50px" class="card-img-top"
                        src="/icons/badminton.svg" alt="Local Shop App" /></a>
                </div>
                <div class="card">
                    <a href="/category/badminton/racquet"><img height="50px" width="50px" class="card-img-top"
                        src="/icons/racquet.svg" alt="Local Shop App" /></a>
                </div>
                <div class="card">
                    <a href="/category/badminton/shuttle"><img height="50px" width="50px" class="card-img-top"
                        src="/icons/shuttle.svg" alt="Local Shop App" /></a>
                </div>
                <div class="card">
                    <a href="/category/badminton/strings"><img height="50px" width="50px" class="card-img-top"
                        src="/icons/string.svg" alt="Local Shop App" /></a>
                </div>
                <div class="card">
                    <a href="/category/badminton/bags"><img height="50px" width="50px" class="card-img-top"
                        src="/icons/bag.svg" alt="Local Shop App" /></a>
                </div>
                <div class="card">
                    <a href="/category/badminton/grips"><img height="50px" width="50px" class="card-img-top"
                        src="/icons/grips.svg" alt="Local Shop App" /></a>
                </div>
                <div class="card">
                    <a href="/category/badminton/nets"><img height="50px" width="50px" class="card-img-top"
                        src="/icons/nets.svg" alt="Local Shop App" /></a>
                </div>
                <div class="card">
                    <a href="/category/cricket/sg"><img height="50px" width="50px" class="card-img-top"
                        src="/icons/sg.svg" alt="Local Shop App" /></a>
                </div>
                <div class="card">
                    <a href="/category/cricket/mrf">
                        <img height="50px" width="50px" class="card-img-top" src="/icons/mrf.svg" alt="Local Shop App" />
                    </a>
                </div>
                <div class="card">
                    <a href="/category/cricket/sf"><img height="50px" width="50px" class="card-img-top"
                        src="/icons/sf.svg" alt="Local Shop App" /></a>
                </div>
                <div class="card">
                    <a href="/category/cricket/bat"><img height="50px" width="50px" class="card-img-top"
                        src="/icons/bat.svg" alt="Local Shop App" /></a>
                </div>
                <div class="card">
                    <a href="/category/cricket/balls"><img height="50px" width="50px" class="card-img-top"
                        src="/icons/ball.svg" alt="Local Shop App" /></a>
                </div>
                <div class="card">
                    <a href="/category/cricket/"><img height="50px" width="50px" class="card-img-top"
                        src="/icons/cricket.svg" alt="Local Shop App" /></a>
                </div>
                <div class="card">
                    <a href="/category/cricket/gloves"><img height="50px" width="50px" class="card-img-top"
                        src="/icons/gloves.svg" alt="Local Shop App" /></a>
                </div>
                <div class="card">
                    <a href="/category/cricket/helmet"><img height="50px" width="50px" class="card-img-top"
                        src="/icons/helmet.svg" alt="Local Shop App" /></a>
                </div>
                <div class="card">
                    <a href="/category/cricket/kitbag"><img height="50px" width="50px" class="card-img-top"
                        src="/icons/kitbag.svg" alt="Local Shop App" /></a>
                </div>
                <div class="card">
                    <a href="/category/cricket/legguard"><img height="50px" width="50px" class="card-img-top"
                        src="/icons/legguard.svg" alt="Local Shop App" /></a>
                </div>
                <div class="card">
                    <a href="/category/cricket/shoes"><img height="50px" width="50px" class="card-img-top"
                        src="/icons/shoes.svg" alt="Local Shop App" /></a>
                </div>
                <div class="card">
                    <a href="/category/cricket/wkgloves"><img height="50px" width="50px" class="card-img-top"
                        src="/icons/wkgloves.svg" alt="Local Shop App" /></a>
                </div>
            </div>
        );
    }

    function renderNavigationBar() {
        return (
            <div id="sitenavigation" style={{ "width": "400px;" }} class="sitenav">
                <button onClick={() => handleHideSideBar()} type="button" class="btn btn-primary m-2">
                    <i class="fas fa-times"></i>
                </button>

                <ul class="list-unstyled components">
                    <li class="list-group-item list-group-item-action list-group-item-primary">
                        <a class="dropdown-item" href="/">
                            <i class="fas fa-home">Home</i>
                        </a>
                    </li>
                    <li class="active  list-group-item list-group-item-action list-group-item-primary">
                        <a href="#badmintonsubMenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">

                            <i><img src="/icons/badminton.svg" alt="badminton"/> Badminton </i>
                        </a>
                        <ul class="collapse list-unstyled" id="badmintonsubMenu">
                            <li class="list-group-item list-group-item-action list-group-item-primary border-bottom">
                                <a class="dropdown-item" href="/category/badminton/racquet">
                                    <i><img src="/icons/racquet.svg" alt="racquet"/> Racquet </i>
                                </a>
                            </li>
                            <li class="list-group-item list-group-item-action list-group-item-primary border-bottom">
                                <a class="dropdown-item" href="/category/badminton/shuttle">
                                    <i ><img src="/icons/shuttle.svg" alt="shuttle"/> Shuttle </i>
                                </a>
                            </li>
                            <li class="list-group-item list-group-item-action list-group-item-primary border-bottom">
                                <a class="dropdown-item" href="/category/badminton/bags">
                                    <i ><img src="/icons/bag.svg" alt="badminton bag"/> Equipment
        Bag </i>
                                </a>
                            </li>
                            <li class="list-group-item list-group-item-action list-group-item-primary border-bottom">
                                <a class="dropdown-item" href="/category/badminton/cover">
                                    <i ><img src="/icons/cover.svg" alt="badminton cover"/> Racquet
        Cover </i>
                                </a>
                            </li>
                            <li class="list-group-item list-group-item-action list-group-item-primary border-bottom">
                                <a class="dropdown-item" href="/category/badminton/strings">
                                    <i ><img src="/icons/string.svg" alt="badminton string"/> String </i>
                                </a>
                            </li>
                            <li class="list-group-item list-group-item-action list-group-item-primary border-bottom">
                                <a class="dropdown-item" href="/category/badminton/grips">
                                    <i ><img src="/icons/grips.svg" alt="badminton grips"/> Grips </i>
                                </a>
                            </li>
                            <li class="list-group-item list-group-item-action list-group-item-primary border-bottom">
                                <a class="dropdown-item" href="/category/badminton/set">
                                    <i ><img src="/icons/set.svg" alt="badminton set"/> Complete
        Set </i>
                                </a>
                            </li>
                            <li class="list-group-item list-group-item-action list-group-item-primary border-bottom">
                                <a class="dropdown-item" href="/category/badminton/nets">
                                    <i ><img src="/icons/nets.svg" alt="badminton nets"/> Nets</i>
                                </a>
                            </li>
                            <li class="active  list-group-item list-group-item-action list-group-item-primary">
                                <i>
                                    <a href="#badmintonBrandSubMenu" data-toggle="collapse" aria-expanded="false"
                                        class="dropdown-toggle">Badminton By Brand</a>
                                </i>
                                <ul class="collapse list-unstyled" id="badmintonBrandSubMenu">
                                    <li class="list-group-item list-group-item-action list-group-item-primary border-bottom">
                                        <a class="dropdown-item" href="/category/badminton/yonex"> <i ><img src="/icons/yonex.svg" /> Yonex</i></a>
                                    </li>
                                    <li class="list-group-item list-group-item-action list-group-item-primary border-bottom">
                                        <a class="dropdown-item" href="/category/badminton/apacs"> <i ><img src="/icons/apacs.svg" /> Apacs</i></a>
                                    </li>
                                    <li class="list-group-item list-group-item-action list-group-item-primary border-bottom">
                                        <a class="dropdown-item" href="/category/badminton/lining"> <i ><img src="/icons/lining.svg" /> Li-Ning</i></a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li class="active  list-group-item list-group-item-action list-group-item-primary">
                        <i><a href="#cricketMenu" data-toggle="collapse" aria-expanded="false"
                            class="dropdown-toggle">
                            <i ><img src="/icons/cricket.svg" /> Cricket</i>
                        </a>
                        </i>
                        <ul class="collapse list-unstyled" id="cricketMenu">
                            <li class="list-group-item list-group-item-action list-group-item-primary border-bottom">
                                <a class="dropdown-item" href="/category/cricket/bat"><i ><img src="/icons/bat.svg" alt="cricket"/> Bat</i></a>
                            </li>
                            <li class="list-group-item list-group-item-action list-group-item-primary border-bottom">
                                <a class="dropdown-item" href="/category/cricket/balls"><i ><img src="/icons/ball.svg" alt="cricket ball"/> Balls</i></a>
                            </li>
                            <li class="list-group-item list-group-item-action list-group-item-primary border-bottom">
                                <a class="dropdown-item" href="/category/cricket/gloves"><i ><img src="/icons/gloves.svg" alt="cricket gloves"/> Gloves</i></a>
                            </li>
                            <li class="list-group-item list-group-item-action list-group-item-primary border-bottom">
                                <a class="dropdown-item" href="/category/cricket/legguard"><i ><img src="/icons/legguard.svg" alt="cricket legguard"/> Legguard</i></a>
                            </li>
                            <li class="list-group-item list-group-item-action list-group-item-primary border-bottom">
                                <a class="dropdown-item" href="/category/cricket/wkgloves"><i ><img src="/icons/wkgloves.svg" alt="cricket wicket keeping gloves"/> Wicket Keeping Gloves</i></a>
                            </li>
                            <li class="list-group-item list-group-item-action list-group-item-primary border-bottom">
                                <a class="dropdown-item" href="/category/cricket/kitbag"><i ><img src="/icons/kitbag.svg" alt="cricket kitbag"/> KitBag</i></a>
                            </li>
                            <li class="list-group-item list-group-item-action list-group-item-primary border-bottom">
                                <a class="dropdown-item" href="/category/cricket/helmet"><i ><img src="/icons/helmet.svg" alt="cricket helmet"/> Helmet</i></a>
                            </li>
                            <li class="list-group-item list-group-item-action list-group-item-primary border-bottom">
                                <a class="dropdown-item" href="/category/cricket/shoes"><i ><img src="/icons/shoes.svg" alt="cricket shoes"/> Shoes</i></a>
                            </li>
                            <li class="active  list-group-item list-group-item-action list-group-item-primary">
                                <i>
                                    <a href="#badmintonBrandSubMenu" data-toggle="collapse" aria-expanded="false"
                                        class="dropdown-toggle">Cricket By Brand</a>
                                </i>
                                <ul class="collapse list-unstyled" id="badmintonBrandSubMenu">
                                    <li class="list-group-item list-group-item-action list-group-item-primary border-bottom">
                                        <a class="dropdown-item" href="/category/cricket/sg"><i ><img src="/icons/sg.svg" alt="SG"/> SG</i></a>
                                    </li>
                                    <li class="list-group-item list-group-item-action list-group-item-primary border-bottom">
                                        <a class="dropdown-item" href="/category/cricket/sf"><i ><img src="/icons/sf.svg" alt="SF"/> SF</i></a>
                                    </li>
                                    <li class="list-group-item list-group-item-action list-group-item-primary border-bottom">
                                        <a class="dropdown-item" href="/category/cricket/mrf"><i ><img src="/icons/mrf.svg" alt="cricket ball"/> MRF</i></a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>

                    <li class="list-group-item list-group-item-action list-group-item-primary">
                        <a class="dropdown-item" href="/blog/techblogs.html">
                            <i class="fas fa-blog">Blog</i>
                        </a>
                    </li>

                </ul>

            </div>
        );
    }

    return (
        <div>
            <div class="row justify-content-between border-bottom m-1 bg-primary">
                <div class="d-flex flex-wrap align-content-center">
                    <div class="col-md-auto">
                        {!showSideBar &&
                            <button type="button" class="btn btn-primary" onClick={() => handleShowSideBar()}>
                                <i class="fas fa-bars"></i>
                            </button>
                        }
                        {/* Side Bar Navigation Starts Here */}
                        {showSideBar && renderNavigationBar()}
                        {/* Side Bar Navigation Ends Here */}
                        <a href="/">
                            <img src='/icons/logo.svg' alt="LocalShop"></img>
                        </a>
                    </div>
                </div>
               
                <div class="col-md-auto">
                    <a href="/blog/marketplace.html" target="_blank">
                        <img src='/icons/mp.svg' alt="LocalShop"></img>
                    </a>
                </div>
            </div>
            
        </div>
    );
}
export default Header2;