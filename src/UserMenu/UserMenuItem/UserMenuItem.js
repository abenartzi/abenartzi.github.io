import React, {Component} from 'react';
import './UserMenuItem.css'
class UserMenuItem extends Component {
    render() {
        return (
            <div>

                    <li>
                        <a href="#">{this.props.children}</a>
                    </li>
            </div>
        );
    }
}

export default UserMenuItem;