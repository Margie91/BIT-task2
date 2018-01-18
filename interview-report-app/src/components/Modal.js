import React from 'react';
import { formatDate } from '../assets/helpers';
import { capitalizeFirstLetter } from '../assets/helpers';

class Modal extends React.Component {
    constructor(props) {
        super(props);

        this.state = { report: {} }

    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            report: nextProps.modalReport
        })
    }

    render() {

        const { companyName, candidateName, interviewDate, phase, status, note } = this.state.report;

        return (
            <div className="modal fade" id="reportModal" tabIndex="-1" role="dialog"
                aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2 className="modal-title" id="exampleModalLabel">{candidateName}</h2>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-4 col-lg-4 col-sm-12">
                                        <div className="row">
                                            <div className="col-12">
                                                <p>Company:</p>
                                                <h5>{companyName}</h5>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <p>Interview date:</p>
                                                <h5>{formatDate(interviewDate)}</h5>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <p>Phase:</p>
                                                <h5>{capitalizeFirstLetter(phase)}</h5>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <p>Status:</p>
                                                <h5>{capitalizeFirstLetter(status)}</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-8 col-lg-8 col-sm-12 notes">
                                        <p>Notes</p>
                                        <p>{note}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal;