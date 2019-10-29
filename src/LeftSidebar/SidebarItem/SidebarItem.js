import React, {Component} from 'react';
import './SidebarItem.css'

class SidebarItem extends Component {
    render() {
        return (
            <div className="SidebarItem">
                <a href={this.props.url} className="SidebarItem" style={this.props.style}> {this.props.children}</a>
            </div>
        );
    }
}

export default SidebarItem;