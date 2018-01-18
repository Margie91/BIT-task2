import React from 'react';

class FillReport extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            interviewDate: "",
            phase: "",
            status: "",
            note: ""
        }
    }


    handleChange = (event) => {
        let value = event.target.value;
        let name = event.target.name;



        console.log(value, name);

        this.setState({
            [name]: value
        });
    }

    submitHandler = (event) => {

        event.preventDefault();


        console.log(this.state);
    }

    render() {
        return (
            <form className="row fillReport" onSubmit={this.submitHandler}>
                <div className="col-lg-4 col-sm-12">
                    <input type="date" name="interviewDate" value={this.state.interviewDate} onChange={this.handleChange} placeholder="Interview Date" />
                </div>
                <div className="col-lg-4 col-sm-12">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text" htmlFor="inputGroupSelect01">Phase</label>
                        </div>
                        <select className="custom-select" name="phase" value={this.state.phase} onChange={this.handleChange} id="inputGroupSelect01">
                            <option defaultValue>Choose...</option>
                            <option value="cv">CV</option>
                            <option value="hr">HR</option>
                            <option value="tech">Tech</option>
                            <option value="final">Final</option>
                        </select>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-12">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text" htmlFor="inputGroupSelect01">Status</label>
                        </div>
                        <select className="custom-select" name="status" value={this.state.status} onChange={this.handleChange} id="inputGroupSelect01">
                            <option defaultValue>Choose...</option>
                            <option value="passed">Passed</option>
                            <option value="declined">Declined</option>
                        </select>
                    </div>
                </div>
                <div className="col-12">
                    <textarea name="note" onChange={this.handleChange} value={this.state.note} placeholder="Note..."></textarea>
                </div>
                <div className="col-12">
                    <button type="submit" id="submitBtn" className="nextBtn">Submit</button>
                </div>
            </form>
        )
    }
}

export default FillReport;