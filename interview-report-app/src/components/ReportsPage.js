import React from 'react';
import { dataService } from '../service/dataService';

import Search from './common/Search';
import ReportComponent from './ReportComponent';
import Modal from './Modal';

class ReportsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            reports: [],
            allReports: [],
            modalReport: []
        };
    }

    loadData = () => {
        dataService.getReports((reports) => {
            this.setState({
                reports,
                allReports: reports
            });
        });

    }

    filterReports = (id) => {
        let reports = this.state.reports;
        let modalReport = reports.filter((report) => {
            return report.id == id;
        });   

        console.log(modalReport);

        this.setState({
            modalReport
        })
    
    }

    componentWillMount() {
        this.loadData();
    }

    render() {

        const reports = this.state.reports;

        const modalReport = this.state.modalReport;
        console.log("render", modalReport);

        return (
            <div className="row">
                <div className="col-12">
                    <Search />
                </div>
                <div className="col-12">
                    {reports.map((report) => <ReportComponent filterReports={this.filterReports} report={report} key={report.id} />)}
                </div>
                <Modal report={modalReport} />
            </div>
        )
    }
}

export default ReportsPage;