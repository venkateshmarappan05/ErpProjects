import React, { Component } from 'react'
import Validator from "validator";
import { MSG } from 'config/languages/english';

export default class BrandForm extends Component {
    state = {
        data: {
            brandId: 'brand' + Date.now(),
            brandName: '',
            createdBy: 1,
        },
        errors: {}
    }
    handleChange = e => {
        this.setState({
            data: { ...this.state.data, [e.target.name]: e.target.value }
        });
    }

    handleSumbit = e => {
        e.preventDefault();
        const errors = this.validate(this.state.data);
        this.setState({ errors });
        if (Object.keys(errors).length === 0) {
            this.props.createBrand(this.state.data)
        }
    }
    
    validate = data => {
        const errors = {};
        if (Validator.isEmpty(data.brandName)) {
            errors.brandName = MSG["brand_name"];
        }
        return errors
    }

    render() {
        const { errors, data } = this.state
        return (
            <form onSubmit={this.handleSumbit}>
                <div className="form-group">
                    <label className="form-label">Brand Id</label>
                    <input type="text" value={data.brandId} className="form-control" name="brandId" readOnly placeholder="brand Id" />
                </div>
                <div className="form-group">
                    <label className="form-label">Brand Name</label>
                    <input type="text" className="form-control" name="brandName" onChange={this.handleChange} placeholder="brand Name" />
                    {errors.brandName && <span className="messages">{errors.brandName}</span>}
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}
