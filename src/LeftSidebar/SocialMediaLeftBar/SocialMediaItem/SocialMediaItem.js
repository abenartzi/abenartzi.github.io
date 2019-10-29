import React, {Component} from 'react';
import './SocialMediaItem.css'

class SocialMediaItem extends Component {
    render() {
        return (
            <div className="SocialMedia">
                <a href={this.props.href} target='_blank' rel="noopener noreferrer"> <img src={this.props.socialUrl} alt={this.props.alt}/> </a>
            </div>
        );
    }
}

export default SocialMediaItem;