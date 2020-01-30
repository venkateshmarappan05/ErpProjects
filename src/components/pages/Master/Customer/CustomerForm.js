import React, { Component } from 'react'
import Validator from "validator";
import { MSG } from 'config/languages/english';
export default class CustomerForm extends Component {
    state = {
        data:{
            customerId:'cust'+Date.now(),
            customerName:'',
            customerType:'',
            address:'',
            location:'',
            mobile:'',
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
            this.props.createCustomer(this.state.data)
        }
    }
    validate = data => {
        const errors = {};
        if (Validator.isEmpty(data.customerName)) {
            errors.customerName = MSG["customer_name"];
        }
        if (Validator.isEmpty(data.customerType)) {
            errors.customerType = MSG["customer_type"];
        }
        if (Validator.isEmpty(data.address)) {
            errors.address = MSG["address"];
        }
        if (Validator.isEmpty(data.location)) {
            errors.location = MSG["location"];
        }
        if (Validator.isEmpty(data.mobile)) {
            errors.mobile = MSG["mobile"];
        }
        else if(data.mobile.length < 10) {
          errors.mobile = MSG['mobile_length'];
        } 
        else if (!Validator.matches(data.mobile, /^(\+[\d]{1,3}|0)?[6-9]\d{9}$/)){
          errors.mobile = MSG['invalid_mobile']
        }
          return errors
    }
    handleKeyPress = (event) =>{
        let regex = new RegExp("^[0-9+]*$"); 
        let key = String.fromCharCode(event.charCode ? event.which : event.charCode); 
        if (!regex.test(key)) { 
         event.preventDefault();
         this.setState({
           data: { ...this.state.data, [event.target.name]: event.target.value }
         });
          return false; 
        } 
    }


    render() {
        const {errors , data} = this.state
        return (
            <form onSubmit = {this.handleSumbit}>
                <div className="form-group">
                <label className="form-label">Customer Id</label>
                <input type="text" value={data.customerId} className="form-control" name="customerId" readOnly placeholder="Category Id" />
                </div>
                <div className="form-group">
                <label className="form-label">Customer Name</label>
                <input type="text" className="form-control" name="customerName" onChange={this.handleChange} placeholder="customer Name" />
                 {errors.customerName && <span className="messages">{errors.customerName}</span>}
                </div>
                <div className="form-group">
                <label className="form-label">Customer Type</label>
                <select id="inputState" name="customerType" class="form-control" onChange={this.handleChange}>
                    <option selected="">Choose...</option>
                    <option value="retails" >Retails</option>
                    <option value="wholesale" >Wholesale</option>
                </select>
                 {errors.customerType && <span className="messages">{errors.customerType}</span>}
                </div>
                <div className="form-group">
                <label className="form-label">Address</label>
                <textarea  className="form-control" name="address" onChange={this.handleChange} placeholder="address" />
                 {errors.address && <span className="messages">{errors.address}</span>}
                </div>
               <div className="form-group">
                <label className="form-label">Mobile</label>
                <input type="phone" className="form-control" name="mobile" onKeyPress={this.handleKeyPress} onChange={this.handleChange} placeholder="mobile" />
                 {errors.mobile && <span className="messages">{errors.mobile}</span>}
                </div>
                <div className="form-group">
                <label className="form-label">Location</label>
                <input type="text" className="form-control" name="location" onChange={this.handleChange} placeholder="location" />
                 {errors.location && <span className="messages">{errors.location}</span>}
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}
