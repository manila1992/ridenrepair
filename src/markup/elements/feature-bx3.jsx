import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Images
import aboutPic4 from "../../images/about/pic4.jpg";
import aboutPic5 from "../../images/about/pic5.jpg";

class FeatureThreeSection extends Component{
	render(){
		return(
			<>
				<section className="section-area section-sp1">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-xl-6 col-lg-8">
								<div className="heading-bx pr-5">
									<h6 className="title-ext m-b0 text-primary">OUR SERVICE</h6>
									<h2 className="title">EXCELLENT SERVICE PROVIDE FOR BUSINESS </h2>
								</div>
							</div>
							<div className="col-xl-6">
								<div className="heading-ext bg-primary text-white mb-40">
									<h4 className="title mb-0">FIND SERVICE FOR YOU</h4>
									<div className="right">
										<Link to="/service-2" className="btn btn-light btn-lg">ALL SERVICES</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-xl-3 col-lg-4 col-md-6 mb-30">
								<div className="feature-container feature-bx2">
									<div className="icon-lg text-primary">
										<i className="flaticon-fuel-1"></i>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte">OIL CHANGE</h5>
										<p>There are many variations of passages of Lorem Ipsum available.</p>
										<Link to="/service-engine-diagnostics" className="btn-link">READ MORE</Link>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-md-6 mb-30">
								<div className="feature-container feature-bx2 bg-secondary">
									<div className="icon-lg">
										<i className="flaticon-brake"></i> 
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte">BREAK REPAIR</h5>
										<p>There are many variations of passages of Lorem Ipsum available.</p>
										<Link to="/service-lube-oil-and-filters" className="btn-link">READ MORE</Link>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-md-12 mb-30">
								<div className="feature-container feature-bx2 bg-primary">
									<div className="icon-lg">
										<i className="flaticon-car-4"></i>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte">CAR WHEELS</h5>
										<p>There are many variations of passages of Lorem Ipsum available.</p>
										<Link to="/service-belts-and-hoses" className="btn-link">READ MORE</Link>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-md-12 mb-30 d-md-none d-lg-block">
								<div className="ttr-media media-cover">
									<img src={aboutPic4} alt="images"/>
								</div>
							</div>
							<div className="col-xl-6 col-lg-8 col-md-12 mb-30 d-md-none d-lg-block">
								<div className="ttr-media media-cover">
									<img src={aboutPic5} alt="images"/>
								</div>
							</div>
							<div className="col-xl-3 col-lg-6 col-md-6 mb-30">
								<div className="feature-container feature-bx2 bg-primary">
									<div className="icon-lg">
										<i className="flaticon-check-2"></i>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte">GENERAL SERVICE</h5>
										<p>There are many variations of passages of Lorem Ipsum available.</p>
										<Link to="/service-brake-repair" className="btn-link">READ MORE</Link>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-6 col-md-6 mb-30">
								<div className="feature-container feature-bx2 bg-warning">
									<div className="icon-lg">
										<i className="flaticon-battery-2"></i>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte">CAR BATTERIES</h5>
										<p>There are many variations of passages of Lorem Ipsum available.</p>
										<Link to="/service-tire-and-wheel-services" className="btn-link text-secondary">READ MORE</Link>
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

export default FeatureThreeSection;