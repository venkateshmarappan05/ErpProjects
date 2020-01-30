import React, { Component } from 'react'
import { MSG } from 'config/languages/english';
import Validator from "validator";

export default class UserForm extends Component {
    state ={
       data:{
            user_id:'user'+Date.now(),
            userName:'',
            createdBy:1,
            password:'',
            confirm_password:''
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
        if (Validator.isEmpty(data.userName)) {
            errors.userName = MSG["user_name"];
        }
        if (Validator.isEmpty(data.password)) {
            errors.password = MSG["password"];
        }
       else if (Validator.isLength(data.password,{min: 8})) {
            errors.password = MSG["password_length"];
        }
        return errors
    }
    render() {
       const {data,errors} = this.state
        return (
            <form onSubmit = {this.handleSumbit}>
                <div className="form-group">
                <label className="form-label">User Id</label>
                <input type="text" value = {data.user_id} className="form-control" name="user_id" onChange={this.handleChange} readOnly placeholder="User Id" />
                </div>
                <div>
                    <label className="form-label">User Name</label>
                    <input type="text" value = {data.userName} className="form-control" name="userName"  onChange={this.handleChange} placeholder="User Name" />
                    {errors.userName && <span className="messages">{errors.userName}</span>}
                </div>
                <div className="form-group">
                    <label className="form-label">Password</label>
                    <input type="password"  value = {data.password} className="form-control" name ="password" onChange={this.handleChange} placeholder="Password" />
                    {errors.password && <span className="messages">{errors.password}</span>}
                </div>
                <div className="form-group">
                    <label className="form-label">Confirm Password</label>
                    <input type="password" value ={data.confirm_password} className="form-control" name="confirm_password" onChange={this.handleChange} placeholder="Password" />
                    {errors.confirm_password && <span className="messages">{errors.confirm_password}</span>}
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}
