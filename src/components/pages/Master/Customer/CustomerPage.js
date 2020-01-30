import React, { Component } from 'react'
import CustomerTable from './CustomerTable'
import CustomerForm from './CustomerForm'
import { connect } from "react-redux";
import {createCustomer, getCustomerList} from 'action/master';
import {NotificationContainer, NotificationManager} from 'react-notifications';

 class CustomerPage extends Component {
    state ={
        table: true
    }
    componentDidMount(){
        this.props.getCustomerList()
    }
    createCustomer = data => {
        this.props.createCustomer(data)
        .then(res => {
            console.log(res)
            if(res.status === 200 && res.data.statusCode === 'success'){
                NotificationManager.success( res.data.msg);
            } else {
                NotificationManager.error('Already Exists');
            }
        }).catch(err => {
            NotificationManager.error('Something went to Wrong');
        })
    }
    render() {
        const { table } = this.state
        return (
            <main className="content">
                 <NotificationContainer/>
            <div className="container-fluid p-0">
                <h1 className="h3 mb-3">Customer</h1>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                            <h5 className="card-title">{table ? "Customer List" : "Customer Form"}</h5>
                            <button className ="btn btn-primary right" onClick ={() => this.setState({table:!this.state.table})}>{table ? "Add Customer" : "View Customers"}</button>
                            </div>
                            <div className="card-body">
                                {table ? <CustomerTable customerList ={this.props.customerList}/> : <CustomerForm createCustomer = {this.createCustomer}/>} 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        customerList: state.master.customerList !== undefined ?  state.master.customerList: []
    }
  }
  const mapDispatchToProps = (dispatch) => {
      return {
        getCustomerList: () => dispatch(getCustomerList()),
        createCustomer: (data) => dispatch(createCustomer(data)),
         // fetchEditCustomer: (data) => dispatch(fetchEditCustomer(data)),
          //editCustomer: (data) => dispatch(editCustomer(data)),
      }
  }

  export default connect (mapStateToProps, mapDispatchToProps)(CustomerPage)
