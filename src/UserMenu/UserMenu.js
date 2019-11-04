import React, {Component} from 'react';
import './UserMenu.css'
import UserMenuItem from "./UserMenuItem/UserMenuItem";
import UserMenuButton from "./UserMenuItem/UserMenuButton/UserMenuButton";

class UserMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle:false
        }
    }
    toggleSwitch() {
        console.log('Clicked!!!')
        this.setState({toggle:!this.state.toggle})
    }

    render() {
        const cls = this.state.toggle ? '' : "hide_view";
        return (
            <div className="UserMenu">
                <UserMenuButton onClick={this.toggleSwitch.bind(this)}/>
                <ul className={cls}>
                    <UserMenuItem>Link 1 </UserMenuItem>
                    <UserMenuItem>Link 2 </UserMenuItem>
                    <UserMenuItem>Link 3 </UserMenuItem>
                </ul>
            </div>
        );
    }
}

export default UserMenu;