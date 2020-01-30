import React, { Component } from 'react'
import UserTable from './UserTable'
import UserForm from './UserForm'

export default class UserPage extends Component {
    state ={
        table: true
    }
    render() {
        const { table } = this.state
        return (
            <main className="content">
            <div className="container-fluid p-0">
                <h1 className="h3 mb-3">User</h1>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                            <h5 className="card-title">{table ? "User List" : "User Form"}</h5>
                            <button className ="btn btn-primary right" onClick ={() => this.setState({table:!this.state.table})}>{table ? "Add User" : "View Users"}</button>
                            </div>
                            <div className="card-body">
                                {table ? <UserTable/> : <UserForm/>} 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        )
    }
}
