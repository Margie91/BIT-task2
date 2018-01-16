import React from 'react';
import { dataService } from '../service/dataService';

import Search from './common/Search';
import ReportComponent from './ReportComponent';

class Reports extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
                reports: [],
                allReports: []  };
    }

    loadData = () => {
        dataService.getReports((reports) => {
            console.log(reports);
            this.setState({
                reports,
                allReports: reports
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
                <div className="col-12">
                    <Search />
                </div>
                <div className="col-12">
                    {reports.map((report) => <ReportComponent report={report} key={report.id} />)}
                </div>
            </div>
        )
    }
}

export default Reports;