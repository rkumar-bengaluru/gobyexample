import React, { useState } from 'react';

const Header2 = (props) => {

    const [showSideBar, setShowSideBar] = useState(false);
    

    function handleShowSideBar() {
        setShowSideBar(true);
        console.log('button clicked.' + showSideBar)
    }

    function handleHideSideBar() {
        setShowSideBar(false);
        console.log('button clicked.' + showSideBar)
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
                                        <a class="dropdown-item" href="/category/badminton/yonex"> <i ><img src="/icons/yonex.svg" alt='yonex'/> Yonex</i></a>
                                    </li>
                                    <li class="list-group-item list-group-item-action list-group-item-primary border-bottom">
                                        <a class="dropdown-item" href="/category/badminton/apacs"> <i ><img src="/icons/apacs.svg" alt='Apacs'/> Apacs</i></a>
                                    </li>
                                    <li class="list-group-item list-group-item-action list-group-item-primary border-bottom">
                                        <a class="dropdown-item" href="/category/badminton/lining"> <i ><img src="/icons/lining.svg" alt='Li-Ning'/> Li-Ning</i></a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li class="active  list-group-item list-group-item-action list-group-item-primary">
                        <i><a href="#cricketMenu" data-toggle="collapse" aria-expanded="false"
                            class="dropdown-toggle">
                            <i ><img src="/icons/cricket.svg" alt='cricket'/> Cricket</i>
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
            <div className="row justify-content-between border-bottom m-1 bg-primary">
                <div className="d-flex flex-wrap align-content-center">
                    <div className="col-md-auto">
                        {!showSideBar &&
                            <button type="button" className="btn btn-primary" onClick={() => handleShowSideBar()}>
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
               
                <div className="col-md-auto">
                    <a href="/blog/marketplace.html" target="_blank">
                        <img src='/gobyexample/icons/mp.svg' alt="LocalShop"></img>
                    </a>
                </div>
            </div>
            
        </div>
    );
}
export default Header2;