import React, {Component} from 'react';
import './Header.css'
import Menu from "./Menu/Menu";
class Header extends Component {
    render() {
        return (
            <header className="Header">
                <h1>My website!</h1>
                <Menu/>
            </header>
        );
    }
}

export default Header;