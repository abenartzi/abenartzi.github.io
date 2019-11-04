import React, {Component} from 'react';

class Copier extends Component {
    constructor(props){
        super(props);
        this.state = {
            content: ''
        }
    }

    typeHandler(e) {
        this.setState({
            content:e.target.value
        })
    }

    render() {
        return (
            <div>
                <input onChange={this.typeHandler.bind(this)}/>
                <span>{this.state.content}</span>
            </div>
        );
    }
}

export default Copier;