import React, { Component } from 'react';
import Slider from "react-slick";

// Import Images
import slide1 from "../../../images/slider/slide1.jpg"
import slide3 from "../../../images/slider/slide3.jpg"
import wheel from "../../../images/slider/wheel.png"
import wheel2 from "../../../images/slider/wheel2.png"
import car from "../../../images/slider/car.png"
import car2 from "../../../images/slider/car2.png"

class SliderOne extends Component{
	render(){
		
		return(
			<>
				
				<div className="ttr-slider style-2">
					<Slider className="ttr-swiper01">
						<div className="slider-item">								
							<div className="slider-img slide-move" style={{backgroundImage: "url("+ slide1 +")"}}>
								<img src={slide1} alt=""/>
							</div>
							<div className="slider-content container text-center text-white">
								<div className="content-inner">
									<h6 className="sub-title">best service ever</h6>
									<h2 className="title">Car Service</h2>
									<div className="car-wheel">
										<img src={car} alt=""/>
										<div className="wheel-1"><img src={wheel} alt=""/></div>
										<div className="wheel-2"><img src={wheel} alt=""/></div>
									</div>
								</div>
							</div>
						</div>
						<div className="slider-item">								
							<div className="slider-img">
								<img src={slide3} alt=""/>
							</div>
							<div className="slider-content container text-center text-white">
								<div className="content-inner">
									<h6 className="sub-title">best service ever</h6>
									<h2 className="title">Car Service</h2>
									<div className="car-wheel wheel2"  data-swiper-parallax="-600">
										<img src={car2} alt=""/>
										<div className="wheel-1"><img src={wheel2} alt=""/></div>
										<div className="wheel-2"><img src={wheel2} alt=""/></div>
									</div>
								</div>
							</div>
						</div>
					</Slider>
				</div>
				
			</>
		);
	}
}

export default SliderOne;