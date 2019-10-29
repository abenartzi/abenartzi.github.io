import React, {Component} from 'react';
import './Sidebar.css'
import SidebarItem from "./SidebarItem/SidebarItem";
import SocialMediaLeftBar from "./SocialMediaLeftBar/SocialMediaLeftBar";

class Sidebar extends Component {
    render() {
    const style = {
      fontFamily:'cursive'
    };
        return (
            <div className="Sidebar">
                <SidebarItem url="#">WHAT IS FIXED ?</SidebarItem>
                <SidebarItem url="#">OUR TOUCH</SidebarItem>
                <SidebarItem url="#">PORTFOLIO</SidebarItem>
                <SidebarItem url="#">CAREERS</SidebarItem>
                <SidebarItem url="#">CONTACT</SidebarItem>
                <SidebarItem url="#">BLOG</SidebarItem>
                <SidebarItem url="#" style={style}>FOLLOW US</SidebarItem>

                <SocialMediaLeftBar/>


            </div>
        );
    }
}

export default Sidebar;
