import React, { Component } from 'react'
import BrandTable from "./BrandTable"
import BrandForm from "./BrandForm"
import { connect } from "react-redux";
import {createBrand, getBrandList,deleteBrand} from 'action/master';
import {NotificationContainer, NotificationManager} from 'react-notifications';

 class BrandPage extends Component {
    state ={
        table: true
    }
    componentDidMount(){
        this.props.getBrandList()
    }
    
    createBrand = data => {
        this.props.createBrand(data)
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
    deleteBrand = data => {
        this.props.deleteBrand(data)
    }

    render() {
        const { table } = this.state
        const { brandList } = this.props
        return (
            <main className="content">
                <NotificationContainer/>
            <div className="container-fluid p-0">
                <h1 className="h3 mb-3">Brand</h1>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                            <h5 className="card-title">{table ? "Brand List" : "Brand Form"}</h5>
                            <button className ="btn btn-primary right" onClick ={() => this.setState({table:!this.state.table})}>{table ? "Add Brand" : "View Brands"}</button>
                            </div>
                            <div className="card-body">
                                {table ? <BrandTable brandList ={brandList} deleteBrand ={this.deleteBrand}/> : <BrandForm createBrand = {this.createBrand}/>} 
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
        brandList: state.master.brandList !== undefined ?  state.master.brandList: []
    }
}
  const mapDispatchToProps = (dispatch) => {
      return {
          getBrandList: () => dispatch(getBrandList()),
          createBrand: (data) => dispatch(createBrand(data)),
          deleteBrand: (data) => dispatch(deleteBrand(data))
         // fetchEditCustomer: (data) => dispatch(fetchEditCustomer(data)),
          //editCustomer: (data) => dispatch(editCustomer(data)),
      }
  }
  export default connect (mapStateToProps, mapDispatchToProps)(BrandPage)