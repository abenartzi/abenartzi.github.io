import React, {Component} from 'react';
import './Header.css'
import Menu from "./Menu/Menu";
class Header extends Component {
    render() {
        return (
            <header className="Header">
                <a href="#" title="Home"><h1>Fixed</h1></a>
                <form action='search.html'>
                <input type="text" placeholder="Search..."/> <button type='submit' > Go </button>
                </form>
                <Menu/>
            </header>
        );
    }
}

export default Header;