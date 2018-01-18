import React from 'react';
import PropTypes from "prop-types";

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

        this.props.searchRequest(searchTerm);
    }

    render() {
        return (
            <input className="search" type="text" placeholder="Search..."
            onChange={this.handleChange} value={this.state.searchTerm}/>
        );
    }
}

Search.propTypes = {
    searchRequest: PropTypes.func
};

export default Search;