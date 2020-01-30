import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import logo from '../../assets/img/fandashtic-logo-full.svg'
export default class SideNavbar extends Component {
    render() {
        return (
            <nav id="sidebar" className="sidebar">
                <div className="sidebar-content ">
                    <Link to="/"className="sidebar-brand" >
                    <img src={logo}/>
                    </Link>
                    <ul className="sidebar-nav">
                        <li className="sidebar-header">
                            Main
                        </li>
                        <li className="sidebar-item active">
                            <Link to="/" className="sidebar-link">
                                <i className="align-middle" data-feather="sliders" /> <span className="align-middle">Dashboard</span>
                            </Link>
                        </li>
                       
                        <li className="sidebar-item">
                            <Link to="/inventory"  className="sidebar-link">
                                <i className="align-middle" data-feather="file-text" /> <span className="align-middle">Inventory</span>
                            </Link>
                        </li>
                        <li className="sidebar-item">
                            <Link to="/transction"  className="sidebar-link">
                                <i className="align-middle" data-feather="truck" /> <span className="align-middle">Transction</span>
                            </Link>
                        </li>
                        <li className="sidebar-header">
                            Master
                         </li>
                        <li className="sidebar-item">
                            <a href="#ui" data-toggle="collapse" className="sidebar-link collapsed">
                                <i className="align-middle" data-feather="grid" /> <span className="align-middle">Master</span>
                            </a>
                            <ul id="ui" className="sidebar-dropdown list-unstyled collapse " data-parent="#sidebar">
                                <li className="sidebar-item"><Link className="sidebar-link" to="/master/brand">Brand</Link></li>
                                <li className="sidebar-item"><Link className="sidebar-link" to="/master/category">Category</Link></li>
                                <li className="sidebar-item"><Link className="sidebar-link" to="/master/customer">Customer</Link></li>
                                <li className="sidebar-item"><Link className="sidebar-link" to="/master/user">User</Link></li>
                                <li className="sidebar-item"><Link className="sidebar-link" to="/master/product">Product</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
