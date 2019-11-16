import React, { Component } from 'react';

const API_KEY = '1a69d086'

export class SearchForm extends Component {
    state = {
        inputMovie: ''
    }

    _handleChange = (e) => {
        this.setState({ inputMovie: e.target.value })
    }

    _handleSubmit = (e) => {
        e.preventDefault()
        //alert(this.state.inputMovie)

        const { inputMovie } = this.state

        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
         .then((response) => response.json())
         .then(results => {
            // Getting returned value or default value
            const { Search = [], totalResults = 0 } = results
            console.log({ Search, totalResults })
            this.props.onResults(Search)
        })
    }

    render() {
        return (
            <form onSubmit={this._handleSubmit}>
                <div className="field has-addons">
                    <div className="control">
                        <input 
                            className="input"
                            onChange = {this._handleChange}
                            placeholder="Movie to search..."
                            type="text"  />
                    </div>
                    <div className="control">
                        <button className="button is-info">
                        Search
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}
