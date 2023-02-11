import 'bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Slider(){

    const carousel = [{title: "1", subtitle: "2"}, {title: "2", subtitle: "3"}]

    return(
        <StyledCarousel infiniteLoop={true}>
            {carousel.map(
                (c) => 
                <div>
                    <img class="d-block w-100" src="..." alt="First slide" />
                </div>
            )}
        </StyledCarousel>
    )
}

//<img src={c.img} />

const StyledCarousel = styled(Carousel)`
height: 250px;
width: 100%;
position: relative;
z-index: 0;

div{
    background: gray;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
    font-size: 40px;
}
`

/* const carousel = [{title: "1", subtitle: "2"}, {title: "2", subtitle: "3"}]

    return(
        <StyledCarousel infiniteLoop={true}>
            {carousel.map(
                (c) => 
                <Carousel.Item interval={5000}>
                    <img class="d-block w-100" src="..." alt="First slide" />
                    <Carousel.Caption>
                        <h3>{c.title}</h3>
                        <p>{c.subtitle}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            )}
        </StyledCarousel>
    )
}
*/