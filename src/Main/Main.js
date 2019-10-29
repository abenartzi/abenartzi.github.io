import React, {Component} from 'react';
import './Main.css'

class Main extends Component {
    render() {
        const images = {
            1:"https://png2.cleanpng.com/sh/cecc1c804d8a8122eac918132ac93e7d/L0KzQYm3VMIxN6l0fZH0aYP2gLBuTfJidJ10h9C2c4DrdcPsTgdpcaVqRdRqbHzyf7A0VfFlQZc1TaQCMUK0RoO1Vsc3QGQ7S6c6NUK3QoS5Usc1PGc4TJD5bne=/kisspng-balloon-sphere-white-balloon-5ad9f052712162.6768363515242322744634.png",
            2:"https://www.vippng.com/png/full/83-838198_hing-png-transparent-images-clipart-icons-pngriver-top.png"
        };
        return (
            <div className="Main">
                <div>
                    <img className="balloon" src={images["1"]} alt="Balloon"/>
                    <img className="hat" src={images["2"]} alt="TopHat"/>

                </div>

                <div className="MainText">
                <h1>What's fixed ?</h1>
                <h5>Scroll</h5>
                <h3>Down</h3>
                </div>

            </div>
        );
    }
}

export default Main;