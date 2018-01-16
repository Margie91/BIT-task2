import React from 'react';
import { formatDate } from '../assets/helpers';
import { capitalizeFirstLetter } from '../assets/helpers';

import seeMore from '../assets/eye_icon.png';
import deleteIcon from '../assets/delete.png';

const ReportComponent = (props) => {

    const { candidateName, companyName, interviewDate, status } = props.report;    

    return (
        <div className="row reportCard">
            <div className="col-lg-3 col-md-5 col-sm-12">
            <h5>{companyName}</h5>
            <p>Company</p>
            </div>
            <div className="col-lg-3 col-md-5 col-sm-12">
            <h5>{candidateName}</h5>
            <p>Candidate</p>
            </div>
            <div className="col-lg-2 col-md-5 col-sm-12">
            <h5>{formatDate(interviewDate)}</h5>
            <p>Interview Date</p>
            </div>
            <div className="col-lg-2 col-md-5 col-sm-12">
            <h5>{capitalizeFirstLetter(status)}</h5>
            <p>Status</p>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-12 seeMore">
            <img src={seeMore}/> <img className="deleteBtn" src={deleteIcon}/>
            </div>
        </div>   
    )
}

export default ReportComponent;