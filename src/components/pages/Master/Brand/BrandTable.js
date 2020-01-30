import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Edit2,Trash} from 'react-feather';

export default class BrandTable extends Component {

    onEditChange =(data)=>{
        console.log(data)
    } 

    onDeleteChange=(data)=>{
       this.props.deleteBrand(data)
    }

    render() {
        const {brandList} = this.props
        return (
            <table id="datatables-buttons" className="table table-striped" style={{width: '100%'}}>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                       ( brandList.length > 0)? brandList.map((item, key)=> {
                            return(
                                <tr key={key}>
                                    <td>{item.brandName}</td>
                                    <td className="table-action">
                                        <Link to="#" > <Edit2 size={18} onClick={()=>{ this.onEditChange(item)}}/></Link>
                                        <Link to="#" > <Trash size={18} onClick={()=>{this.onDeleteChange(item)}}/></Link>
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
