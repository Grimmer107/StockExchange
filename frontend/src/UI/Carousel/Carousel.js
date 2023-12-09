import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import card3 from '../../assets/card3.jpeg';
import card2 from '../../assets/card2.jpeg';
import card1 from '../../assets/card1.jpeg';

const SliderCarousel = props => {
    return (
        <Carousel axis={"horizontal"} autoPlay infiniteLoop useKeyboardArrows>
            <div>
                <img src={card1} alt={'card1'} />
            </div>
            <div>
                <img src={card2} alt={'card2'} />
            </div>
            <div>
                <img src={card3} alt={'card'} />
            </div>
        </Carousel>
    );
}

export default SliderCarousel;