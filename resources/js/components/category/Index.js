import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import axios from 'axios';
import Add from "./Add";
import Edit from "./Edit";
import Listing from "./Listing";
import { Container, Button, Modal, ModalBody, ModalHeader, ModalFooter,MDBBtn,MDBInput} from 'mdbreact';
const jarak = {
    marginTop:'100px'
};
export default class Index extends Component {
    constructor(props) {
        super(props);
        this.onChangeCategoryName = this.onChangeCategoryName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
          modal14: false,
          category_name : ""
        };
      }
      onChangeCategoryName(e){
        this.setState({
            category_name : e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();
        const category ={
            category_name : this.state.category_name
        };
        axios.post("http://127.0.0.1:8000/api/category/store",category)
        .then(
            res=>alert("Data Berhasil Disimpan"),
            location.reload()

            // this.toggle(14)
        ).catch(error=>alert("data gagal disimpan"));
    }
    
      toggle(nr) {
        let modalNumber = 'modal' + nr
        this.setState({
          [modalNumber]: !this.state[modalNumber]
        });
      }
    render() {
        return (
            <div style={jarak}>
                    <div>
                        <hr/>
                        {/* <MDBBtn type="submit" rounded outline color="secondary">Submit</MDBBtn> */}
                        <Link className="btn btn-primary" to="/category">Listing</Link> &nbsp;
                        {/* <Link className="btn btn-success" to="/category/Add">Add</Link> */}
                        <Button color="primary" onClick={() => this.toggle(14)} >Add</Button>
                        
                        <Route exact path="/category" component={Listing}/>
                        <Route exact path="/category/Add" component={Add}/>
                        <Route exact path="/category/Edit/:id" component={Edit}/>
                        

                        <Modal isOpen={this.state.modal14} toggle={() => this.toggle(14)} centered>
                            <ModalHeader toggle={() => this.toggle(14)}>Modal title</ModalHeader>
                            <form onSubmit={this.onSubmit}>
                                <ModalBody>
                            
                                    <div className="form-group">
                                        <MDBInput
                                        label="Disabled input"
                                        hint="Enter Category Name"
                                        type="text"
                                        id="category_name"
                                        onChange={this.onChangeCategoryName}
                                        value={this.state.category_name}
                                        />
                                    </div>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="secondary" onClick={() => this.toggle(14)}>Close</Button>
                                    <MDBBtn type="submit" rounded outline color="secondary">Submit</MDBBtn>
                                </ModalFooter>
                            </form>
                        </Modal>

                    </div>
            </div>
        );
    }
}
