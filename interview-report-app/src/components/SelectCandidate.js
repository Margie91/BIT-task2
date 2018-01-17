import React from 'react';

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
        )
    }
}

export default SelectCandidate;