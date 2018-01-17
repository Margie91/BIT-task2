import React from 'react';
import placeholder from '../assets/images/person-placeholder.jpg'

const CandidateComponent = (props) => {

    let { avatar, email, name } = props.candidate;

    if(!avatar) {
        avatar = placeholder;
    }

    return (
        <div className="col-12">
            <div className="row candidateCard">
                <div className="col-3">
                    <img className="avatar" src={avatar} alt="avatar" />
                </div>
                <div className="col-9 cand-data">
                    <h5>{name}</h5>
                    <p>{email}</p>
                </div>
            </div>
        </div>
    )
}

export default CandidateComponent;