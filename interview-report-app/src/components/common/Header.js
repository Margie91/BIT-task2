import React from 'react';

import logo from '../../assets/logo.svg';

export default class Header extends React.Component {
    render() {
        return (
        <div>    
            <nav className="navbar">
                <h1><img src={logo} alt="logo" width="70px"/> Report Administration</h1>
                <div className = "navButtons">
                <a className="navbar-brand mb-0 mr-0 justify-content-end pull-right">Reports</a>
                <a className="navbar-brand mb-0 justify-content-end pull-right">Create Report</a>
                </div>
            </nav>
        </div> 
        )
    }
}