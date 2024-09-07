import * as React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from '../images/dashboard2.jpg'
export default function Carousels(props){
    const interval =props.interval
    
        return (
            <Carousel {...props} >
                <div>
                    <img src={Image} />
                    {/* <p className="legend">Legend 1</p> */}
                </div>


            </Carousel>
        );
    }


//     <div>
//     <img src={Image} />
//     {/* <p className="legend">Legend 2</p> */}
// </div>
// <div>
//     <img src={Image} />
//     {/* <p className="legend">Legend 3</p> */}
// </div>

// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));
