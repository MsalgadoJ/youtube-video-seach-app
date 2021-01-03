import './SearchBar.css';
import React from 'react';

class SearchBar extends React.Component {

    state = { term: '' }

    onInputChange = (event) => {
        this.setState({ term: event.target.value });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.onFormSubmit(this.state.term);
    }

    render () {
        return (
            <div className="search-bar">
                <form action="" onSubmit={this.onFormSubmit}>
                    <div className="form">
                        <input 
                            type="text" 
                            name="name" 
                            value={this.state.term} 
                            onChange={this.onInputChange} 
                            required
                            autoComplete="off" />
                        <label htmlFor="" className="label-name">
                            <span className="content-name">Video Search</span>
                        </label>
                    </div>
                </form>
            </div>
        );
    }
    
};

export default SearchBar;