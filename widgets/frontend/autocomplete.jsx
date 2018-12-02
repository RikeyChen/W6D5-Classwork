import React from 'react'

class AutoComplete extends React.Component {
    constructor(props) {
        super(props)
        this.state = { inputVal: '' }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event) {
        this.setState({inputVal: event.target.value})
    }

    handleClick(event) {
        this.setState({inputVal: event.target.innerText})
    }

    matches() {
        let matches = [];
        let input = this.state.inputVal.toLowerCase();

        this.props.names.forEach(name => {
            let nameLower = name.toLowerCase();
            if (nameLower.slice(0, this.state.inputVal.length) === input) {
                matches.push(name);
            }
        });
        return matches.length > 0 ? matches : ["No Matches"];
    }

    render() {
        const matched = this.matches().map((name, idx) => (
            <li onClick={this.handleClick} key={idx}>{name}</li>
        ));

        return (
            <div>
                <h1>Autocomplete</h1>
                <div className="auto-container">
                    <input onChange={this.handleChange} type="text" value={this.state.inputVal}/>    
                    <ul>
                        {matched}
                    </ul>
                </div>
            </div>
        )            
    }
}

export default AutoComplete;