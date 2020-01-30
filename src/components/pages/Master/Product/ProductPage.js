import React, { Component } from 'react'
import ProductTable from './ProductTable'
import ProductForm from './ProductForm'

export default class ProductPage extends Component {
    state ={
        table: true
    }
    render() {
        const { table } = this.state
        return (
            <main className="content">
            <div className="container-fluid p-0">
                <h1 className="h3 mb-3">Product</h1>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                            <h5 className="card-title">{table ? "Product List" : "Product Form"}</h5>
                            <button className ="btn btn-primary right" onClick ={() => this.setState({table:!this.state.table})}>{table ? "Add Product" : "View Products"}</button>
                            </div>
                            <div className="card-body">
                                {table ? <ProductTable/> : <ProductForm/>} 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        )
    }
}
