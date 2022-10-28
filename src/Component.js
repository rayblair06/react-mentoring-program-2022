import React from 'react';

class Component extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            count: this.state.count + 1
        });
    }

    render() {
        return (
            <div style={{margin: '5px', padding: '5px'}}>
                <h2>Counter</h2>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>Increase</button>
            </div>
        );
    }
}

export default Component;
