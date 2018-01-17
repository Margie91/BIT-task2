import React from 'react';

const SideDetails = (props) => {

    const step = props.step;
    
    let active = "step-active";

        return (
            <aside>
                <div className="row">
                    <div className={step === 1 ? `col-12 steps step-active` : "col-12 steps"}>
                        <h4><span>1</span>  Select Candidate</h4>
                    </div>
                    <div className={step === 2 ? `col-12 steps step-active` : "col-12 steps"}>
                        <h4><span>2</span>  Select Company</h4>
                    </div>
                    <div className={step === 3 ? `col-12 steps step-active` : "col-12 steps"}>
                        <h4><span>3</span>  Fill Report Details</h4>
                        <hr />
                    </div>
                    <div className="col-12 info">
                        <p>Candidate:</p>
                        <h4>Fill Report Details</h4>
                    </div>
                    <div className="col-12 info">
                        <p>Company:</p>
                        <h4>Fill Report Details</h4>
                    </div>
                </div>
            </aside>
        );
}

export default SideDetails;