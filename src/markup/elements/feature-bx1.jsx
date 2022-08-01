import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Images
import bg2 from "../../images/background/bg2.png";

class FeatureOneSection extends Component{
	render(){
		return(
			<>
				<section className="section-area bg-gray section-sp1" style={{backgroundImage: "url("+bg2+")", backgroundRepeat: "no-repeat", backgroundPosition: "right top"}}>
					<div className="container">
						<div className="row">
							<div className="col-xl-3 col-lg-4 col-sm-6 mb-30">
								<div className="feature-container feature-bx1">
									<div className="icon-lg mb-10 text-primary">
										<i className="flaticon-fuel-1"></i>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte">OIL CHANGE</h5>
										<p>There are many variations of passages of Lorem Ipsum available.</p>
										<Link to="/service-lube-oil-and-filters" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-sm-6 mb-30">
								<div className="feature-container feature-bx1">
									<div className="icon-lg mb-10 text-primary">
										<i className="flaticon-brake"></i>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte">BREAK REPAIR</h5>
										<p>There are many variations of passages of Lorem Ipsum available.</p>
										<Link to="/service-engine-diagnostics" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-sm-6 mb-30">
								<div className="feature-container feature-bx1">
									<div className="icon-lg mb-10 text-primary">
										<i className="flaticon-car-4"></i>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte">CAR WHEELS</h5>
										<p>There are many variations of passages of Lorem Ipsum available.</p>
										<Link to="/service-belts-and-hoses" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-sm-6 mb-30">
								<div className="feature-container feature-bx1">
									<div className="icon-lg mb-10 text-primary">
										<i className="flaticon-check-2"></i>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte">GENERAL SERVICE</h5>
										<p>There are many variations of passages of Lorem Ipsum available.</p>
										<Link to="/service-air-conditioning" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-sm-6 mb-30">
								<div className="feature-container feature-bx1">
									<div className="icon-lg mb-10 text-primary">
										<i className="flaticon-battery-2"></i>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte">CAR BATTERIES</h5>
										<p>There are many variations of passages of Lorem Ipsum available.</p>
										<Link to="/service-brake-repair" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-sm-6 mb-30">
								<div className="feature-container feature-bx1">
									<div className="icon-lg mb-10 text-primary">
										<i className="flaticon-paint"></i>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte">CAR PAINTING</h5>
										<p>There are many variations of passages of Lorem Ipsum available.</p>
										<Link to="/service-tire-and-wheel-services" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-sm-6 mb-30">
								<div className="feature-container feature-bx1">
									<div className="icon-lg mb-10 text-primary">
										<i className="flaticon-repair-1"></i>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte">WHEEL CHANGE</h5>
										<p>There are many variations of passages of Lorem Ipsum available.</p>
										<Link to="/service-engine-diagnostics" className="btn-link">Read More</Link>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-sm-6 mb-30">
								<div className="feature-container feature-bx1">
									<div className="icon-lg mb-10 text-primary">
										<i className="flaticon-engine"></i>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte">ENGINE REPAIR</h5>
										<p>There are many variations of passages of Lorem Ipsum available.</p>
										<Link to="/service-lube-oil-and-filters" className="btn-link">Read More</Link>
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

export default FeatureOneSection;