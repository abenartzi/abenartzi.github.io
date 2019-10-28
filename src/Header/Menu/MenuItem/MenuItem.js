import React, {Component} from 'react';
import './MenuItem.css'
class MenuItem extends Component {
    render() {
        return (
            <div className="MenuItem">
                <a href={this.props.url} className="MenuItem" > {this.props.children} </a>

            </div>
        );
    }
}

export default MenuItem;