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
            modalReport: {}
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
        let modalReport;
        reports.forEach(reportItem => {
            if (reportItem.id === parseFloat(id)) {
                modalReport = reportItem;
            }
        })
        this.setState({
            modalReport
        })
    }

    searchReports = (searchTerm) => {
        const currentReports = this.state.allReports;

        if (searchTerm === "") {
            this.setState({
                reports: currentReports
            });
        }

        const filteredReports = currentReports.filter((report) => {
            return report.candidateName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            report.companyName.toLowerCase().includes(searchTerm.toLowerCase());
        });

        this.setState({
            reports: filteredReports

        });
    }

    deleteReport = (id) => {
        if(window.confirm("Are you sure?")) {
            dataService.deleteRequest(id, (response) => {
                this.loadData();
            });
        }
    }

    componentWillMount() {
        this.loadData();
    }

    render() {

        const reports = this.state.reports;

        const modalReport = this.state.modalReport;

        return (
            <div className="row">
                <div className="col-12">
                    <Search searchReports={this.searchReports} />
                </div>
                <div className="col-12">
                    {reports.length <= 0 ? <h1 className="noMatch">Sorry, no matches!</h1> : reports.map((report) => <ReportComponent
                    filterReports={this.filterReports} report={report} key={report.id} deleteReport={this.deleteReport} />)}
                </div>
                <Modal modalReport={modalReport} />
            </div>
        )
    }
}

export default ReportsPage;