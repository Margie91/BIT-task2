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
            step: 1
        }


    }

    loadCandidates = () => {
        dataService.getCandidates((candidates) => {
            this.setState({
                candidates,
                allCandidates: candidates
            })
        })
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

    componentWillMount() {
        this.loadCandidates();
    }

    render() {

        let currentStep;
        switch (this.state.step) {
            case 1:
                currentStep = <SelectCandidate candidates={this.state.candidates} />
                break;
            case 2:
                currentStep = <SelectCompany />
                break;
            case 3:
                currentStep = <FillReport />
                break;
            default:
                break;
        }

        const candidates = this.state.candidates;

        return (
            <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-12">
                    <SideDetails />
                </div>
                <div className="col-lg-7 col-md-6 col-sm-12 form">
                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-12">
                                    <Search searchRequest={this.searchCandidates} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                {!candidates.length ? <h1 className="noMatch">Sorry, no matches!</h1> : currentStep }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SubmitReportPage;