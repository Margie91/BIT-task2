import React from 'react';
import { dataService } from '../service/dataService';

import SideDetails from './SideDetails';
import Search from './common/Search';
import SelectCandidate from './SelectCandidate';
import SelectCompany from './SelectCompany';
import FillReport from './FillReport';

class SubmitReportPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            candidates: [],
            allCandidates: [],
            companies: [],
            allCompanies: [],
            newReport: {},
            step: 1
        }


    }

    loadData = () => {
        dataService.getCandidates((candidates) => {
            this.setState({
                candidates,
                allCandidates: candidates
            });
        });

        dataService.getCompanies((companies) => {
            this.setState({
                companies,
                allCompanies: companies 
            });
        });
    }


    searchCandidates = (searchTerm) => {
        const currentCandidates = this.state.allCandidates;
        const currentCompanies = this.state.allCompanies;

        if (searchTerm === "") {
            this.setState({
                reports: currentCandidates,
                companies: currentCompanies
            });
        }

        if(this.state.step === 1) {

            const filteredCandidates = currentCandidates.filter((candidate) => {
                return candidate.name.toLowerCase().includes(searchTerm.toLowerCase());
            });

            this.setState({
                candidates: filteredCandidates
            });

        }

        if(this.state.step === 2) {

            const filteredCompanies = currentCompanies.filter((company) => {
                return company.name.toLowerCase().includes(searchTerm.toLowerCase())
            });

            this.setState({
                companies: filteredCompanies
            });
        }

    }

    selectCandidate = (candidate) => {
        console.log(candidate);

        this.setState({
            newReport: candidate
        });
    }

    selectCompany = (company) => {
        const newReport = this.state.newReport;
        newReport.companyId = company.companyId;
        newReport.companyName = company.companyName;

        this.setState({
            newReport
        });
    }

    nextStep = () => {

        let newReport = this.state.newReport;

        let step = this.state.step;

        if (newReport.hasOwnProperty("candidateName") || newReport.hasOwnProperty("companyName")) {

            ++step

            this.setState({
                step
            });
        }


    }

    componentWillMount() {
        this.loadData();
    }

    render() {

        const companies = this.state.companies;

        const candidates = this.state.candidates;

        const newReport = this.state.newReport;

        let currentStep;
        switch (this.state.step) {
            case 1:
                currentStep = <SelectCandidate candidates={this.state.candidates}
                    selectCandidate={this.selectCandidate} />
                break;
            case 2:
                currentStep = <SelectCompany companies={companies} selectCompany={this.selectCompany} />
                break;
            case 3:
                currentStep = <FillReport />
                break;
            default:
                break;
        }
      

        return (
            <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-12">
                    <SideDetails step={this.state.step} newReport={newReport} />
                </div>
                <div className="col-lg-9 col-md-8 col-sm-12 form">
                    <div className="row">
                        <div className="col-lg-10 col-md-8 col-sm-12">
                            <Search searchRequest={this.searchCandidates} />
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-12 btnContainer">
                            <button type="button" className="nextBtn" onClick={this.nextStep}>Next</button>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            {!candidates.length ? <h1 className="noMatch">Sorry, no matches!</h1> : currentStep}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SubmitReportPage;