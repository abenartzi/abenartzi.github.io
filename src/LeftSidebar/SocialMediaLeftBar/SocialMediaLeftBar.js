import React, {Component} from 'react';
import SocialMediaItem from "./SocialMediaItem/SocialMediaItem";
import './SocialMediaLeftBar.css'
class SocialMediaLeftBar extends Component {
    render() {
        const socialMediaUrls = {
            1:'https://png2.kisspng.com/sh/801977be414244d18e3b849d82f12233/L0KzQYi4UsIxN6ZriZGAYUPkQYm8UcMza5ZnSZCDOUi8RIeAU8E2OWQ8TagCNUO1QIm4UsYxQV91htk=/5a3a185132ceb1.89894673151375675320812609.png',
            2:'https://png2.kisspng.com/sh/482b73276b229a0e52db8e82c39824d3/L0KzQYm3U8I4N5J9iZH0aYP2gLBuTgNwa5pmhJ92ZXTscX7tgfNmapD0g59sb33zhcXskr1qa5Dzi591aX7udbXwjr1td5h0RdhqY3Xlf7FyTflkd58yTdNrYUfpRoeCg8BiQWUzSKYEMkS7Q4e4VcIzOWg2T6c5NkO8QnB3jvc=/kisspng-social-media-facebook-computer-icons-linkedin-logo-facebook-icon-5aba7f669c0a94.0492483615221717506392.png',
            3:'https://png2.kisspng.com/sh/ab4e4c086ad317f90f794eb213c74a34/L0KzQYm3VMA0N5x1iZH0aYP2gLBuTgNwa5pmhJ92ZXTscX7qjB1xfaVqip9yY3Bxg37zjBdwNZdme9drb3BuPbr1kCRib6NmhZ8AYXO2c7TshcQybJM3SZC5M0a2QIS3U8E2OmM8UKM9MkK1RoqBTwBvbz==/kisspng-social-media-computer-icons-logo-facebook-instagram-5ac3ccee41db21.0363030315227814222698.png'
        };
        return (
            <div className='SocialMediaLeftBar'>
                <SocialMediaItem socialUrl={socialMediaUrls["1"]} alt="Twitter" href='https://www.twitter.com'/>
                <SocialMediaItem socialUrl={socialMediaUrls["2"]} alt="Facebook" href='https://www.facebook.com'/>
                <SocialMediaItem socialUrl={socialMediaUrls["3"]} alt="instagram" href='https://www.instagram.com'/>
            </div>
        );
    }
}

export default SocialMediaLeftBar;