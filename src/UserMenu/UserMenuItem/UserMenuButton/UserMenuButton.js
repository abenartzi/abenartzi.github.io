import React, {Component} from 'react';
import './UserMenuButton.css'
class UserMenuButton extends Component {

    render() {
        const image = {
            1:"https://png2.cleanpng.com/sh/6a8607cbef6ec86c86b6abd5ac1ee140/L0KzQYm3WMI5N5xBiZH0aYP2gLBuTfNtcaEyeeR9LXPyfcH8lPVzNZpoh9D8LYX2dcO0hP94dp10edY2Y3jkfbPskr1wbl5pReZqbHBxgLLATgN3b151htk2aXPyfn7tkvVmNZV0j9D1b3HnPYKAVcI0QF50hp8AYki3c4q8gcRlO2NmSZCENkO8Q4GAWME2O2Y5SqoENUS2QYe5TwBvbz==/kisspng-clip-art-computer-icons-user-download-chamber-of-d-talonpaw-svg-png-icon-free-download-175238-on-5b84c95a4d32a1.9639307815354289543162.png"
        };
        return (
            <div className="UserImage">
                <div onClick={this.props.onClick}> <img src={image["1"]} alt={"UserImage"}/> </div>
            </div>
        );
    }
}

export default UserMenuButton;