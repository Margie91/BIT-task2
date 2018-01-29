import React from 'react';
import PropTypes from "prop-types";

import CandidateComponent from './CandidateComponent';

class SelectCandidate extends React.Component {
 

    handleCandidate = (candidate) => {
        this.props.selectCandidate(candidate);
    }
   

    render () {

        let candidates = this.props.candidates;

        return (
            <div className="container">
                {candidates.map((candidate) => <CandidateComponent candidate={candidate}
                key={candidate.id} getCandidate={this.handleCandidate} />)}
            </div>
        );
    }
}

SelectCandidate.propTypes = {
    candidates: PropTypes.array,
    selectCandidate: PropTypes.func
};

export default SelectCandidate;