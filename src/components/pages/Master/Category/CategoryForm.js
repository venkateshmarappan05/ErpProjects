import React, { Component } from 'react'
import Validator from "validator";
import { MSG } from 'config/languages/english';

export default class CategoryForm extends Component {
    state = {
        data:{
            categoryId:'cate'+Date.now(),
            categoryName:'',
            createdBy:1,
        },
        errors:{}
    }
    handleChange = e => {
        this.setState({
         data : {...this.state.data,  [e.target.name]: e.target.value }
        });
    }

    handleSumbit = e => {
        e.preventDefault();
        const errors = this.validate(this.state.data);
        this.setState({errors});
        if(Object.keys(errors).length === 0) {
            this.props.createCategory(this.state.data)
        }
    }
    validate = data => {
        const errors = {};
        if (Validator.isEmpty(data.categoryName)) {
            errors.categoryName = MSG["category_name"];
        }
          return errors
    }

    render() {
        const {errors , data} = this.state
        return (
            <form onSubmit = {this.handleSumbit}>
                <div className="form-group">
                <label className="form-label">Category Id</label>
                <input type="text" value={data.categoryId} className="form-control" name="categoryId" readOnly placeholder="Category Id" />
                </div>
                <div className="form-group">
                <label className="form-label">Category Name</label>
                <input type="text" className="form-control" name="categoryName" onChange={this.handleChange} placeholder="Category Name" />
                 {errors.categoryName && <span className="messages">{errors.categoryName}</span>}
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}
