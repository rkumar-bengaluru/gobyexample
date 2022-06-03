import React, { Component } from 'react';

import Header2 from './header';
import Footer2 from './footer';
import './index.css';
import ScrollToTop from './top.js';
import autoBind from 'react-autobind';


export default class AppLayout2 extends Component {
   
    constructor(props) {
        super(props)
        this.state = {
            showSideBar: false,
            showSubscribeButton : true
        }

        autoBind(this, 'subscribe','post');
    }
    render() {
        return (
            <React.Fragment>
                <div class="container-fluid">
                    <ScrollToTop />
                    <Header2 />
                    {this.props.children}
                    <Footer2 />
                </div>
            </React.Fragment>
        );
    }
}