import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = { searchTerm: "" };
    }

    handleChange = (event) => {

        const searchTerm = event.target.value;

        this.setState({
            searchTerm
        });

        this.props.searchReports(searchTerm);
    }

    render() {
        return (
            <input id="search" type="text" placeholder="Search..."
            onChange={this.handleChange} value={this.state.searchTerm}/>
        )
    }
}

export default Search;