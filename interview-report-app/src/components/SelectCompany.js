import React from 'react';
import CompanyComponent from './CompanyComponent';

class SelectCompany extends React.Component {


    handleCompany = (company) => {
        this.props.selectCompany(company);
    }

    render() {

        let companies = this.props.companies;

        return (
            <div className="container">
                <div className="row">
                    {companies.map((company) => <CompanyComponent company={company}
                        key={company.id} getCompany={this.handleCompany} />)}
                </div>
            </div>
        )
    }
}

export default SelectCompany;