import React, { Component } from 'react';
import UserCardList from './UserCardList';

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            userArray: [],
        }
    }

    _handleChange = (field, value) => {
        this.setState({
            [field]: value,
        })
    }

    _handleSubmit = async (event) => {
        event.preventDefault();
        const data = await fetch(`https://api.github.com/users/${this.state.username}`)
            .then(response => response.json());
        this.setState({
            userArray: [...this.state.userArray, data]
        })
        console.log(data);
    }

    render() {
        return(
            <>
                <form onSubmit={this._handleSubmit}>
                    <label>
                        <input 
                            name="username" 
                            className="username" 
                            placeholder="Enter a Username" 
                            type="text" 
                            onChange={(event) => 
                                {this._handleChange(event.target.name, event.target.value)}}>
                        </input>
                    </label>
                    <button type="submit">Submit</button>
                </form>
                {this.state.userArray.length ? <UserCardList userArray={this.state.userArray}/> : <p>No users to display...</p>}
            </>
        )
    }
}

export default SearchForm;