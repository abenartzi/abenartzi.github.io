import React, {Component} from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num:0
        };
    }
    increase() {
        console.log('clicked');
        this.setState({
            num:this.state.num + 1
        });

    }
    decrease() {
        if(this.state.num === 0){
            return;
        }
        this.setState({
            num:this.state.num - 1
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.increase.bind(this)}>Increase</button>
                <button onClick={this.decrease.bind(this)}>Decrease</button>
                <span> {this.state.num} </span>
            </div>

        );
    }
}

export default Counter;