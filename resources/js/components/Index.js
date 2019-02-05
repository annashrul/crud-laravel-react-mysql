import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
export default class Index extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Footer/>
            </div>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<Router><Index /></Router>, document.getElementById('app'));
}
