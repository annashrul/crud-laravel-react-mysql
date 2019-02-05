import React,{ Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Category from './category/Index';
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink, } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';

const NavStyle = {
    background:'#212121'
  }
  const textNavStyle = {
    color:'white',
    fontWeight:'bold'
  }
  const toogleNavStyle = {
    border:'1px solid white',
    background:'white',
    borderRadius:'0px'
  }
  const logoStyle = {
    width:70,
    height:50
  }
export default class header extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state={time:new Date()}
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
    render() {
        return (
                <div>
                    <Navbar expand="md" fixed="top" style={NavStyle}>
                        <NavbarBrand tag={Link} to="/" style={textNavStyle}>
                            <img 
                            src="https://cdn.pixabay.com/photo/2014/04/03/09/58/camping-309472_960_720.png" 
                            className="img-logo" style={logoStyle}
                            />
                            Anasrulysf
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggle} style={toogleNavStyle}/>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                             
                            <NavItem>
                                <NavLink style={textNavStyle}
                                activeClassName='active' 
                                tag={RRNavLink} 
                                exact to='/' 
                                activeStyle={
                                    {color:'#00e676'}
                                }
                                >Home</NavLink>
                            </NavItem>
                            <NavLink style={textNavStyle}
                                activeClassName='active'
                                tag={RRNavLink}
                                exact to='/category' 
                                activeStyle={
                                {color:'#00e676'}
                                }
                            >Category</NavLink>
                            <NavItem>
                            <NavLink style={textNavStyle}
                                activeClassName='active'
                                tag={RRNavLink}
                                exact to='/about' 
                                activeStyle={
                                {color:'#00e676'}
                                }
                            >About</NavLink> 
                            
                            </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                    
                    {/* <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/category">Category</Link>
                                </li>
                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </div>
                    </nav> */}

                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/about" component={About}></Route>
                    <Route exact path="/category" component={Category}></Route>
                    <Route exact path="/category/Add" component={Category}/>
                    <Route exact path="/category/Edit/:id" component={Category}/>
                </div>
           
        );
    }
}
