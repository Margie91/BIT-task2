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

        const reports = this.state.reports;

        return (
            <div className="row">
                    <Search />
                <div className="col-12">
                    {reports.map((report) => <ReportComponent report={report} key={report.id} />)}
                </div>
            </div>
        )
    }
}

export default Reports;