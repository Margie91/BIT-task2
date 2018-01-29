import React from 'react';
import PropTypes from "prop-types";

const SideDetails = (props) => {

    const step = props.step;

    const { candidateName, companyName } = props.newReport;
    
    let active = "step-active";

    let visibility = "visibility";

        return (
            <aside>
                <div className="row">
                    <div className={step === 1 ? `col-12 steps ${active}` : "col-12 steps"}>
                        <h4><span>1</span>  Select Candidate</h4>
                    </div>
                    <div className={step === 2 ? `col-12 steps ${active}` : "col-12 steps"}>
                        <h4><span>2</span>  Select Company</h4>
                    </div>
                    <div className={step === 3 ? `col-12 steps ${active}` : "col-12 steps"}>
                        <h4><span>3</span>  Fill Report Details</h4>
                        <hr />
                    </div>
                    <div className={!candidateName ? `col-12 info ${visibility}` : "col-12 info"}>
                        <p>Candidate:</p>
                        <h4>{candidateName}</h4>
                    </div>
                    <div className={!companyName ? `col-12 info ${visibility}` : "col-12 info"}>
                        <p>Company:</p>
                        <h4>{companyName}</h4>
                    </div>
                </div>
            </aside>
        );
}


SideDetails.propTypes = {
    step: PropTypes.number,
    newReport: PropTypes.object
};

export default SideDetails;