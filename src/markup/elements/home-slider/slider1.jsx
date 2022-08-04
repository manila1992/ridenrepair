import React, { Component } from 'react';

// Import Images
import slide1 from "../../../images/slider/slide1.jpg";
import car from "../../../images/slider/car.png";

class SliderOne extends Component{
	render() {
		
		return(
			<>
				
				<div className="ttr-slider style-2">							
						<div className="slider-img slide-move" style={{backgroundImage: "url("+ slide1 +")"}}>
							<img src={slide1} alt=""/>
						</div>
						<div className="slider-content container text-center text-white">
							<div className="content-inner">
								<h6 className="sub-title">best service ever</h6>
								<h2 className="title">Bike Service</h2>
								<div className="car-wheel">
									<img src={car} alt=""/>
								</div>
							</div>
						</div>
				</div>
				
			</>
			
		);
	}
}

export default SliderOne;