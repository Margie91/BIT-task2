import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.svg';

class Header extends React.Component {

    activeClass = () => {

        if (window.location.pathname === "/reports") {
            window.$(".reports").addClass("active");
            window.$(".create").removeClass("active");
        } else if (window.location.pathname === "/submitreport") {
            window.$(".reports").removeClass("active");
            window.$(".create").addClass("active");
        }

    }


    componentWillUpdate() {
        this.activeClass();
    }


    componentDidMount() {
        this.activeClass();
    }

    render() {
        return (

            <div>
                <nav className="navbar">
                    <h1><img src={logo} alt="logo" width="70px" /> Report Administration</h1>
                    <div className="navButtons">
                        <Link to="reports" className="navbar-brand mb-0 mr-0 justify-content-end pull-right reports">Reports</Link>
                        <Link to="submitreport" className="navbar-brand mb-0 justify-content-end pull-right create">Create Report</Link>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;