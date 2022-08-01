import React, {Component} from 'react';
import { Link } from 'react-router-dom';

// Layout
import Header from "../layout/header";
import Footer from "../layout/footer";

// Elements
import WidgetBrochure from "../elements/widget/widget-brochure";
import WidgetHelp from "../elements/widget/widget-help";

// Images
import bnrImg from "../../images/banner/bnr2.jpg";
import Pic3 from "../../images/service-section/pic3.jpg";
import Pic6 from "../../images/service-section/pic6.jpg";

class ServiceTireAndWheelServices extends Component{
	
	render(){
		return (
			<>
				
				<Header />
				
				<div className="page-content bg-white">
					
					<div className="page-banner ovbl-dark" style={{backgroundImage: "url("+bnrImg+")"}}>
						<div className="container">
							<div className="page-banner-entry text-center">
								<h1><span>Tire and Wheel Services</span></h1>
								<nav aria-label="breadcrumb" className="breadcrumb-row">
									<ul className="breadcrumb">
										<li className="breadcrumb-item"><Link to="/"><i className="las la-home"></i>Home</Link></li>
										<li className="breadcrumb-item active" aria-current="page">Tire and Wheel Services</li>
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
												<li><Link to="/service-brake-repair"><span>Brake Repair</span><i className="fa fa-angle-right"></i></Link></li>
												<li className="active"><Link to="/service-tire-and-wheel-services"><span>Tire and Wheel Services</span><i className="fa fa-angle-right"></i></Link></li>
											</ul>
										</div>
										
										<WidgetBrochure />
										
										<WidgetHelp />
										
									</aside>
								</div>
								<div className="col-lg-8 col-md-7">
									<div className="row">
										<div className="col-md-6">
											<div className="ttr-media mb-30">
												<img src={Pic3} className="imghight" alt=""/>
											</div>
										</div>
										<div className="col-md-6">
											<div className="ttr-media mb-30">
												<img src={Pic6} className="imghight" alt=""/>
											</div>
										</div>
									</div>
									<div className="head-text mb-30">
										<h4 className="title mb-10">TIRE AND WHEEL SERVICES</h4>
										<p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
									</div>
									<div className="row mb-10">
										<div className="col-xl-6 col-lg-6 mb-30">
											<div className="feature-container feature-bx2">
												<div className="icon-lg text-primary">
													<i className="flaticon-fuel-1"></i>
												</div>
												<div className="icon-content">
													<h5 className="ttr-tilte">OIL CHANGE</h5>
													<p>When an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
													<Link to="/service-lube-oil-and-filters" className="btn-link">READ MORE</Link>
												</div>
											</div>
										</div>
										<div className="col-xl-6 col-lg-6 mb-30">
											<div className="feature-container feature-bx2 bg-secondary">
												<div className="icon-lg">
													<i className="flaticon-brake"></i> 
												</div>
												<div className="icon-content">
													<h5 className="ttr-tilte">BREAK REPAIR</h5>
													<p>When an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
													<Link to="/service-belts-and-hoses" className="btn-link">READ MORE</Link>
												</div>
											</div>
										</div>
										<div className="col-xl-6 col-lg-6 mb-30">
											<div className="feature-container feature-bx2 bg-primary">
												<div className="icon-lg">
													<i className="flaticon-car-4"></i>
												</div>
												<div className="icon-content">
													<h5 className="ttr-tilte">CAR WHEELS</h5>
													<p>When an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
													<Link to="/service-air-conditioning" className="btn-link">READ MORE</Link>
												</div>
											</div>
										</div>
										<div className="col-xl-6 col-lg-6 mb-30">
											<div className="feature-container feature-bx2 bg-warning">
												<div className="icon-lg">
													<i className="flaticon-battery-2"></i>
												</div>
												<div className="icon-content">
													<h5 className="ttr-tilte">CAR BATTERIES</h5>
													<p>When an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
													<Link to="/service-brake-repair" className="btn-link text-secondary">READ MORE</Link>
												</div>
											</div>
										</div>
									</div>
									<div className="head-text mb-30">
										<h4 className="title mb-10">POWER AND ENERGY BENEFITS</h4>
										<p className="mb-0">Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
									</div>
									<div className="row mb-15">
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
									<p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
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

export default ServiceTireAndWheelServices;