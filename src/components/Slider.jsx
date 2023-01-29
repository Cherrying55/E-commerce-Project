import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';

export default function Slider(){

    return(
        <StyledCarousel infiniteLoop={true}>
            {carousel.map(
                (c) => 
                <Carousel.Item interval={5000}>
                    <img src={c.img} />
                    <Carousel.Caption>
                        <h3></h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
            )}
        </StyledCarousel>
    )
}