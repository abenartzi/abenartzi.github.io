import React, {Component} from 'react';
import './Expand.css'

class Expand extends Component {
    constructor(props){
        super(props);
        this.state = {
            light:false
        }
    }

    toggleSwitch(){
        this.setState({light:!this.state.light})

    }

    render() {
        const cls = this.state.light ? '' : 'Expand-hide';
        return (
            <div>
                <button onClick={this.toggleSwitch.bind(this)}>Toggle</button>
                <div className={cls}> text text text </div>

                {/*{this.state.light ? <div> text text text </div> : null}*/}
            </div>
        );
    }
}

export default Expand;