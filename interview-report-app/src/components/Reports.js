import React from 'react';
import { dataService } from '../service/dataService';

import Search from './common/Search';
import ReportComponent from './ReportComponent';

class Reports extends React.Component {
    constructor(props) {
        super(props);

        this.state = { reports: [] };
    }

    loadData = () => {
        dataService.getReports((reports) => {
            console.log(reports);
            this.setState({
                reports
            });
        });

    }

    componentWillMount() {
        this.loadData();
    }

    render() {
        return (
            <div className="row">
                    <Search />
                <div className="col-12">
                    <ReportComponent reports={this.state.reports} />
                </div>
            </div>
        )
    }
}

export default Reports;