import { Carousel } from "react-bootstrap"
import pic1 from "../assets/fondo1.jpg"
import pic2 from "../assets/fondo2.jpg"
import pic3 from "../assets/fondo3.jpg"


export default function CustomCarousel() {
    return (
        <Carousel>
             <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={pic1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={pic2}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={pic3}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    )
}