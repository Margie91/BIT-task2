import React from 'react';

class CompanyComponent extends React.Component {
  




    render() {

        let { email, name, id } = this.props.company;


        return (
            <div className="row" onClick={this.selectCandidate} data-id={id} data-name={name} >
                <div className="col-12 candidateCard" onClick={this.selectCandidate} data-id={id} data-name={name}>
                    <div className="row">
                        <div className="col-lg-9 col-md-12 col-sm-12 cand-data" onClick={this.selectCandidate} data-id={id} data-name={name}>
                            <h4 onClick={this.selectCandidate} data-id={id} data-name={name}>{name}</h4>
                            <p onClick={this.selectCandidate} data-id={id} data-name={name}>{email}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CompanyComponent;