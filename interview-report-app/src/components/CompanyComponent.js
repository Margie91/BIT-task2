import React from 'react';

class CompanyComponent extends React.Component {
  

    selectCompany = (event) => {
        event.stopPropagation();

        const companyName = event.target.dataset.name;
        const companyId = event.target.dataset.id;
        const selectededCompany = {
            "companyName": companyName,
            "companyId": companyId
        }

        console.log(selectededCompany);

        this.props.getCompany(selectededCompany);

    }


    render() {

        let { name, id } = this.props.company;


        return (
            <div className="row" onClick={this.selectCompany} data-id={id} data-name={name} >
                <div className="col-12 infoCard" onClick={this.selectCompany} data-id={id} data-name={name}>
                    <div className="row">
                        <div className="col-lg-9 col-md-12 col-sm-12 info-data" onClick={this.selectCompany} data-id={id} data-name={name}>
                            <h4 onClick={this.selectCompany} data-id={id} data-name={name}>{name}</h4>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CompanyComponent;