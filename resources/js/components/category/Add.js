// import React, { Component } from 'react';
import React, { Fragment,Component } from "react";
import axios from 'axios';
import { MDBInput ,MDBBtn } from "mdbreact";
export default class Add extends Component {
    constructor(){
        super();
        this.onChangeCategoryName = this.onChangeCategoryName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state={
            category_name : ""
        }
    }
    onChangeCategoryName(e){
        this.setState({
            category_name : e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();
        const category = {
            category_name : this.state.category_name
        }
        axios.post("http://127.0.0.1:8000/api/category/store",category)
        .then(res=>alert("Data Berhasil Disimpan")).catch(error=>alert("data gagal disimpan"));
    }


    render() {
        return (
            <Fragment>
                <form onSubmit={this.onSubmit}>
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
                    <MDBBtn type="submit" rounded outline color="secondary">Submit</MDBBtn>
                </form>
            </Fragment>
        );
    }
}
