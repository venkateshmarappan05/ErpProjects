import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class CustomerTable extends Component {
    render() {
        const {customerList} =this.props
        return (
            <table id="datatables-buttons" className="table table-striped" style={{width: '100%'}}>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Mobile</th>
                    <th>type</th>
                    <th>location</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                       ( customerList.length > 0)? customerList.map((item, key)=> {
                            return(
                                <tr key={key}>
                                    <td>{item.customer_name}</td>
                                    <td>{item.mobile}</td>
                                    <td>{item.customer_type}</td>
                                    <td>{item.location}</td>
                                    <td className="table-action">
                                         <i className="align-middle" data-feather="edit-2"></i>
                                       <i className="align-middle" data-feather="trash"></i>
                                    </td>
                                </tr> 
                            )
                        })
                        
                        : <span>No Data Found</span>
                    }
                </tbody>
            </table>
        )
    }
}
