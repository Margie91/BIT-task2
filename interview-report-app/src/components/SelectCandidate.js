import React from 'react';

import CandidateComponent from './CandidateComponent';

class SelectCandidate extends React.Component {
    constructor(props) {
        super(props);

    }

    render () {

        let candidates = this.props.candidates;
        return (
            <div className="row">
                {candidates.map((candidate) => <CandidateComponent candidate={candidate} key={candidate.id} />)}
            </div>
        )
    }
}

export default SelectCandidate;