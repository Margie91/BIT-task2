import React from 'react';
import { formatDate } from '../assets/helpers';
import { capitalizeFirstLetter } from '../assets/helpers';

import seeMore from '../assets/images/eye_icon.png';
import deleteIcon from '../assets/images/delete.png';

class ReportComponent extends React.Component {
    constructor(props) {
        super();

    
    }

    handleModalClick = (event) => {
        const id = event.target.dataset.reportid;
        this.props.filterReports(id);
    }

    deleteRequest = () => {
        const id = this.props.report.id;
            this.props.deleteReport(id);
    }
    
    
    render() {
        
        const { id, candidateName, companyName, interviewDate, status } = this.props.report;   

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
                <img src={seeMore} onClick={this.handleModalClick} data-toggle="modal" data-target="#reportModal" data-reportid={id} alt="seeMore" /> <img className="deleteBtn" alt="delete"
                onClick={this.deleteRequest} src={deleteIcon}/>
                </div>
            </div>   
        )
    }
}

export default ReportComponent;