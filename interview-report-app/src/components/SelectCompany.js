import React from 'react';
import CompanyComponent from './CompanyComponent';

class SelectCompany extends React.Component {
    render() {


            let companies = this.props.companies;
        return (
            <div className="container">
                {companies.map((company) => <CompanyComponent company={company}
                    key={company.id} />)}
            </div>
        )
    }
}

export default SelectCompany;