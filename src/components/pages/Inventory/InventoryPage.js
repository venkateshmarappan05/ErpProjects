import React, { Component } from 'react'

export default class InventoryPage extends Component {
    render() {
        return (
            <main className="content">
                <div className="container-fluid p-0">
                    <h1 className="h3 mb-3">DataTables</h1>
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-header">
                                <h5 className="card-title">Table with Buttons</h5>
                                <h6 className="card-subtitle text-muted">This extension provides a framework with common options that can be used with DataTables.</h6>
                                </div>
                                <div className="card-body">
                                    <table id="datatables-buttons" className="table table-striped" style={{width: '100%'}}>
                                        <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Position</th>
                                            <th>Office</th>
                                            <th>Age</th>
                                            <th>Start date</th>
                                            <th>Salary</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Tiger Nixon</td>
                                                <td>System Architect</td>
                                                <td>Edinburgh</td>
                                                <td>61</td>
                                                <td>2011/04/25</td>
                                                <td>$320,800</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}
