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
                companies
            });
        });
    }


    searchCandidates = (searchTerm) => {
        const currentCandidates = this.state.allCandidates;

        if (searchTerm === "") {
            this.setState({
                reports: currentCandidates
            });
        }

        const filteredCandidates = currentCandidates.filter((candidate) => {
            return candidate.name.toLowerCase().includes(searchTerm.toLowerCase());
        });

        this.setState({
            candidates: filteredCandidates

        });
    }

    selectCandidate = (candidate) => {
        console.log(candidate);

        this.setState({
            newReport: candidate
        });
    }

    nextStep = () => {

        let newReport = this.state.newReport;

        let step = this.state.step;

        if (newReport.hasOwnProperty("candidateName")) {

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

        let currentStep;
        switch (this.state.step) {
            case 1:
                currentStep = <SelectCandidate candidates={this.state.candidates}
                    selectCandidate={this.selectCandidate} />
                break;
            case 2:
                currentStep = <SelectCompany companies={companies} />
                break;
            case 3:
                currentStep = <FillReport />
                break;
            default:
                break;
        }

        const candidates = this.state.candidates;

        const newReport = this.state.newReport;

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