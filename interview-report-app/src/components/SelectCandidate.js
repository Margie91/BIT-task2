import React from 'react';

import CandidateComponent from './CandidateComponent';

class SelectCandidate extends React.Component {
    constructor(props) {
        super(props);

    }

    handleCandidate = (candidate) => {
        this.props.selectCandidate(candidate);
    }
   

    render () {

        let candidates = this.props.candidates;
        return (
            <div className="row">
                {candidates.map((candidate) => <CandidateComponent candidate={candidate}
                key={candidate.id} getCandidate={this.handleCandidate} />)}
            </div>
        )
    }
}

export default SelectCandidate;