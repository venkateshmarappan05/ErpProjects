import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class ProductTable extends Component {
    render() {
        const {categoryList} = this.props
        console.log(categoryList)
        return (
            <table className="table" >
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    {
                       ( categoryList.length > 0)? categoryList.map((item, key)=> {
                            return(
                                <tr key={key}>
                                    <td>{item.category_name}</td>
                                    <td className="table-action">
                                        <Link to="#" > <i className="align-middle" data-feather="edit-2"></i></Link>
                                        <Link to="#" > <i className="align-middle" data-feather="trash"></i></Link>
                                    </td>
                                </tr> 
                            )
                        })
                        
                        : <span>No Data Found</span>
                    }
                    {/* <tr>
                        <td>Tiger Nixon</td>
                        <td>System Architect</td>
                        <td>Edinburgh</td>
                        <td>61</td>
                        <td>2011/04/25</td>
                        <td>$320,800</td>
                    </tr> */}
                </tbody>
            </table>
        )
    }
}
