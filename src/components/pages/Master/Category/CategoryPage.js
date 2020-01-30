import React, { Component } from 'react'
import CategoryTable from './CategoryTable'
import CategoryForm from './CategoryForm'
import { connect } from "react-redux";
import {createCategory, getCategoryList} from 'action/master';
import {NotificationContainer, NotificationManager} from 'react-notifications';

class CategoryPage extends Component {
    state = {
        table: true
    }
    componentDidMount(){
        this.props.getCategoryList()
    }
    createCategory = data => {
        this.props.createCategory(data)
        .then(res => {
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
        const {categoryList} = this.props
        const { table } = this.state
        return (
            <main className="content">
                <NotificationContainer/>
            <div className="container-fluid p-0">
                <h1 className="h3 mb-3">Category</h1>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                            <h5 className="card-title">{table ? "Category List" : "Category Form"}</h5>
                            <button className ="btn btn-primary right" onClick ={() => this.setState({table:!this.state.table})}>{table ? "Add Category" : "View Categorys"}</button>
                            </div>
                            <div className="card-body">
                                {table ? <CategoryTable categoryList ={categoryList}/> : <CategoryForm createCategory = {this.createCategory}/>} 
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
        categoryList: state.master.categoryList !== undefined ?  state.master.categoryList: []
    }
    // let customerLists = (state.inventory.customerList !== undefined) ? state.inventory.customerList:[]
    // return {
    //   customerLists
    // }
  }
  const mapDispatchToProps = (dispatch) => {
      return {
          getCategoryList: () => dispatch(getCategoryList()),
          createCategory: (data) => dispatch(createCategory(data)),
         // fetchEditCustomer: (data) => dispatch(fetchEditCustomer(data)),
          //editCustomer: (data) => dispatch(editCustomer(data)),
      }
  }

  export default connect (mapStateToProps, mapDispatchToProps)(CategoryPage)