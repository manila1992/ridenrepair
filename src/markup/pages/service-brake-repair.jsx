import React, {Component} from 'react';
import { Link } from 'react-router-dom';

// Layout
import Header from "../layout/header";
import Footer from "../layout/footer";

// Elements
import WidgetBrochure from "../elements/widget/widget-brochure";
import WidgetHelp from "../elements/widget/widget-help";

// Images
import bnrImg from "../../images/banner/bnr4.jpg";
import Pic8 from "../../images/service-section/pic8.jpg";
import Pic9 from "../../images/service-section/pic9.jpg";

class ServiceBrakeRepair extends Component{
	
	render(){
		return (
			<>
				
				<Header />
				
				<div className="page-content bg-white">
					
					<div className="page-banner ovbl-dark" style={{backgroundImage: "url("+bnrImg+")"}}>
						<div className="container">
							<div className="page-banner-entry text-center">
								<h1><span>Brake Repair</span></h1>
								<nav aria-label="breadcrumb" className="breadcrumb-row">
									<ul className="breadcrumb">
										<li className="breadcrumb-item"><Link to="/"><i className="las la-home"></i>Home</Link></li>
										<li className="breadcrumb-item active" aria-current="page">Brake Repair</li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
					
					
					<div className="section-area section-sp1 bg-white">
						<div className="container">
							<div className="row">
								<div className="col-lg-4 col-md-5">
									<aside className="sticky-top pb-1">
										
										<div className="widget">
											<ul className="service-menu">
												<li><Link to="/service-engine-diagnostics"><span>Engine Diagnostics</span><i className="fa fa-angle-right"></i> </Link></li>
												<li><Link to="/service-lube-oil-and-filters"><span>Lube Oil and Filters</span><i className="fa fa-angle-right"></i></Link></li>
												<li><Link to="/service-belts-and-hoses"><span>Belts and Hoses</span><i className="fa fa-angle-right"></i></Link></li>
												<li><Link to="/service-air-conditioning"><span>Air Conditioning</span><i className="fa fa-angle-right"></i></Link></li>
												<li className="active"><Link to="/service-brake-repair"><span>Brake Repair</span><i className="fa fa-angle-right"></i></Link></li>
												<li><Link to="/service-tire-and-wheel-services"><span>Tire and Wheel Services</span><i className="fa fa-angle-right"></i></Link></li>
											</ul>
										</div>
										
										<WidgetBrochure />
										
										<WidgetHelp />
										
									</aside>
								</div>
								<div className="col-lg-8 col-md-7">
									<div className="ttr-media mb-30">
										<img src={Pic9} className="imghight" alt=""/>
									</div>
									<div className="mb-30">
										<div className="head-text mb-30">
											<h4 className="title mb-10">BRAKE REPAIR</h4>
											<p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
										</div>
										<div className="row mb-40">
											<div className="col-lg-6">
												<ul className="list-check-squer mb-0">
													<li>Then along come two they</li>
													<li>Lorem Ipsum is simply dummy</li>
													<li>That’s just a little bit more than</li>
												</ul>
											</div>
											<div className="col-lg-6">
												<ul className="list-check-squer mb-0">
													<li>Standard dummy text ever since</li>
													<li>Simply dummy text of the printing</li>
													<li>Make a type specimen book</li>
												</ul>
											</div>
										</div>
									</div>
									<div className="head-text mb-30">
										<h4 className="title mb-10">WE CAN OFFER FOLLOWING TYPES OF SOLUTIONS:</h4>
										<p className="mb-0">Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
									</div>
									<div className="row align-items-center">
										<div className="col-xl-5 col-lg-6">
											<div className="ttr-media mb-30">
												<img src={Pic8} alt=""/>
											</div>
										</div>
										<div className="col-xl-7 col-lg-6">
											<div className="head-text mb-30">
												<h4 className="title mb-10">SERVICES PROGRESS</h4>
												<p className="mb-0">Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
											</div>
											<div className="progress-area">
												<div className="progress-box style1 appear" data-percent="65%">
													<div className="progress-info">
														<h6 className="title">Quality Services</h6>
														<h6 className="progress-value">65%</h6>
													</div>
													<div className="progress">
														<div className="progress-bar bg-primary" style={{width: "65%"}}></div>
													</div>
												</div>
												<div className="progress-box style1 appear"  data-percent="85%">
													<div className="progress-info">
														<h6 className="title">Experienced Technicials</h6>
														<h6 className="progress-value">85%</h6>
													</div>
													<div className="progress">
														<div className="progress-bar bg-primary" style={{width: "85%"}}></div>
													</div>
												</div>
												<div className="progress-box style1 appear" data-percent="70%">
													<div className="progress-info">
														<h6 className="title">Long Term Warranty</h6>
														<h6 className="progress-value">70%</h6>
													</div>
													<div className="progress">
														<div className="progress-bar bg-primary" style={{width: "70%"}}></div>
													</div>
												</div>
												<div className="progress-box style1 appear" data-percent="70%">
													<div className="progress-info">
														<h6 className="title">Brake Repair</h6>
														<h6 className="progress-value">85%</h6>
													</div>
													<div className="progress">
														<div className="progress-bar bg-primary" style={{width: "85%"}}></div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					
				</div>
				
				<Footer />
				
			</>
		);
	}
}

export default ServiceBrakeRepair;