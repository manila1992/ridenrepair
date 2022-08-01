import React, { Component } from 'react';

// Images
import bg1 from "../../images/background/bg1.png";
import aboutCar from "../../images/about/about-car.png";

class AboutUsOneSection extends Component{
	render(){
		return(
			<>
				<section className="section-area section-sp3 about-wraper2 bg-gray" style={{backgroundImage: "url("+bg1+")", backgroundRepeat: "no-repeat"}}>
					<div className="container">
						<div className="row">
							<div className="col-lg-12 col-sm-12 col-12 text-center">
								<div className="heading-bx text-center">
									<h6 className="title-ext text-primary">About Us</h6>
									<h2 className="title mb-0">WE'RE A COMPANY OF TALENTED ENGINEERS & MECHANICS</h2>
								</div>
								<div className="about-content text-center">
									<div className="ttr-media">
										<img src={aboutCar} alt=""/>
									</div>
									<div className="content-info">
										<div className="content-left">
											<div className="service-content">
												<h6 className="title">General Service</h6>
											</div>
											<div className="service-content">
												<h6 className="title">Car Batteries</h6>
											</div>
											<div className="service-content">
												<h6 className="title">Car Painting </h6>
											</div>	
										</div>
										<div className="content-right">
											<div className="service-content">
												<h6 className="title">Break Repair</h6>
											</div>
											<div className="service-content">
												<h6 className="title">Oil Change</h6>
											</div>
											<div className="service-content">
												<h6 className="title">Car Wheels</h6>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</>
		);
	}
}

export default AboutUsOneSection;