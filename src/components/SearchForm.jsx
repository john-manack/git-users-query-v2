import React, { Component } from 'react';

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

    _handleClick = async () => {
        const data = await fetch(`https://api.github.com/users/${this.state.username}`)
            .then(response => response.json());
        this.setState({
            userArray: [...this.state.userArray, data]
        })
    }

    render() {
        return(
            <>
                <form>
                    <label>
                        <input className="username" placeholder="Enter a Username" type="text" onChange={this._handleChange}></input>
                    </label>
                    <button type="button" onClick={this._handleClick}>Submit</button>
                </form>
                <userCardList />
            </>
        )
    }
}

export default SearchForm;