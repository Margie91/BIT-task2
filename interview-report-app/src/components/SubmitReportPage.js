import React from 'react';

import SideDetails from './SideDetails';
import Search from './common/Search';

class SubmitReportPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            step: 1
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12">
                    <SideDetails />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 form">
                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-12">
                                    <Search searchReports={this.searchReports} />
                                </div>
                            </div>
                            <h1>form</h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SubmitReportPage;