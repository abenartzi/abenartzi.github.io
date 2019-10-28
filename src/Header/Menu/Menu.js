import React, {Component} from 'react';
import './Menu.css'
import MenuItem from "./MenuItem/MenuItem";
class Menu extends Component {
    render() {
        return (
            <nav className="Menu">
                <MenuItem url={'https://www.google.com'} > Google </MenuItem>
                <MenuItem url={'https://www.yahoo.com'} > Yahoo </MenuItem>
                <MenuItem url={'https://www.msn.com'} > Msn </MenuItem>
            </nav>
        );
    }
}

export default Menu;