import React from 'react';
import PropTypes from "prop-types";

class CompanyComponent extends React.Component {


    selectCompany = (event) => {
        event.stopPropagation();

        const companyName = event.target.dataset.name;
        const companyId = event.target.dataset.id;
        const selectededCompany = {
            "companyName": companyName,
            "companyId": parseFloat(companyId)
        }

        this.props.getCompany(selectededCompany);

    }


    render() {

        let { name, id } = this.props.company;


        return (

            <div className="col-lg-6 col-md-12 col-sm-12" onClick={this.selectCompany} data-id={id} data-name={name}>
                <div className="info-data infoCard companies">
                    <h4 onClick={this.selectCompany} data-id={id} data-name={name}>{name}</h4>
                </div>
            </div>
        );
    }
}

CompanyComponent.propTypes = {
    company: PropTypes.object,
    getCompany: PropTypes.func
};

export default CompanyComponent;