import React, {Component} from 'react';
import { Link } from 'react-router-dom';

// Layout
import Header from "../layout/header";
import Footer from "../layout/footer";

// Images
import bnrImg from "../../images/banner/bnr4.jpg";

class Booking extends Component{
	
	render(){
		return (
			<>
				
				<Header />
				
				<div className="page-content bg-white">
					
					<div className="page-banner ovbl-dark" style={{backgroundImage: "url("+bnrImg+")"}}>
						<div className="container">
							<div className="page-banner-entry text-center">
								<h1><span>Booking</span></h1>
								<nav aria-label="breadcrumb" className="breadcrumb-row">
									<ul className="breadcrumb">
										<li className="breadcrumb-item"><Link to="/"><i className="las la-home"></i>Home</Link></li>
										<li className="breadcrumb-item active" aria-current="page">Booking</li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
					
					<section className="section-area section-sp1">
						<div className="container">
							<div className="row">
								<div className="col-lg-8 col-md-7 mb-30 mb-md-50">
									<form className="booking-form">
										<div className="row">
											<div className="col-lg-4">
												<div className="form-group">
													<h6 className="form-title">VEHICLE YEAR</h6>
													<div className="input-group">
														<input type="number" className="form-control" value="2008"/>
													</div>
												</div>
											</div>
											<div className="col-lg-4">
												<div className="form-group">
													<h6 className="form-title">VEHICLE MAKE</h6>
													<div className="input-group">
														<select className="form-control">
															<option value="" selected="selected">Choose...</option>
															<option value="General Motors">General Motors</option>
															<option value="Land Rover">Land Rover</option>
															<option value="Lexus">Lexus</option>
															<option value="Lincoln">Lincoln</option>
															<option value="Mazda">Mazda</option>
															<option value="Mercury">Mercury</option>
															<option value="Nissan">Nissan</option>
															<option value="Renault">Renault</option>
															<option value="Plymouth">Plymouth</option>
															<option value="Rover">Rover</option>
															<option value="Saab">Saab</option>
														</select>
													</div>
												</div>
											</div>
											<div className="col-lg-4">
												<div className="form-group">
													<h6 className="form-title">VEHICLE MILEAGE</h6>
													<div className="input-group">
														<input type="number" className="form-control"/>
													</div>
												</div>
											</div>
											<div className="col-lg-12">
												<div className="form-group">
													<h6 className="form-title">SELECT SERVICES NEEDED</h6>
													<div className="row">
														<div className="col-md-12 col-lg-4">
															<div className="form-check custom-checkbox mb-10">
																<input type="checkbox" className="form-check-input" id="customControlAutosizing1"/>
																<label className="form-check-label" for="customControlAutosizing1">Air Conditioning</label>
															</div>
														</div>
														<div className="col-md-12 col-lg-4">
															<div className="form-check custom-checkbox mb-10">
																<input type="checkbox" className="form-check-input" id="customControlAutosizing2"/>
																<label className="form-check-label" for="customControlAutosizing2">Brakes Repair</label>
															</div>
														</div>
														<div className="col-md-12 col-lg-4">
															<div className="form-check custom-checkbox mb-10">
																<input type="checkbox" className="form-check-input" id="customControlAutosizing3"/>
																<label className="form-check-label" for="customControlAutosizing3">Engine Diagnostics</label>
															</div>
														</div>
														<div className="col-md-12 col-lg-4">
															<div className="form-check custom-checkbox mb-10">
																<input type="checkbox" className="form-check-input" id="customControlAutosizing4"/>
																<label className="form-check-label" for="customControlAutosizing4">Heating &amp; Cooling</label>
															</div>
														</div>
														<div className="col-md-12 col-lg-4">
															<div className="form-check custom-checkbox mb-10">
																<input type="checkbox" className="form-check-input" id="customControlAutosizing5"/>
																<label className="form-check-label" for="customControlAutosizing5">Oil, Lube &amp; Filters</label>
															</div>
														</div>
														<div className="col-md-12 col-lg-4">
															<div className="form-check custom-checkbox mb-10">
																<input type="checkbox" className="form-check-input" id="customControlAutosizing6"/>
																<label className="form-check-label" for="customControlAutosizing6">Transmission Repair</label>
															</div>
														</div>
													</div>										
												</div>										
											</div>
											<div className="col-lg-12">
												<div className="form-group">
													<h6 className="form-title">PERSONAL INFO</h6>
												</div>
											</div>
											<div className="col-lg-6">
												<div className="form-group">
													<div className="input-group">
														<input name="name" type="text" className="form-control" placeholder="Name" required/>
													</div>
												</div>
											</div>
											<div className="col-lg-6">
												<div className="form-group">
													<div className="input-group">
														<input name="phone" type="email" placeholder="Email" className="form-control" required/>
													</div>
												</div>
											</div>
											<div className="col-lg-6">
												<div className="form-group">
													<div className="input-group">
														<input name="phone" type="text" placeholder="Phone Number" className="form-control" required/>
													</div>
												</div>
											</div>
											<div className="col-lg-6">
												<div className="form-group">
													<div className="input-group">
														<input name="subject" type="text" required="" className="form-control"  placeholder="Subject"/>
													</div>
												</div>
											</div>
											<div className="col-lg-12">
												<div className="form-group">
													<div className="input-group">
														<textarea name="message" rows="4" className="form-control" required=""  placeholder="Type Message"></textarea>
													</div>
												</div>
											</div>
											<div className="col-lg-12">
												<button name="submit" type="submit" value="Submit" className="btn btn-primary btn-lg"> Send Message</button>
											</div>
										</div>
									</form>
								</div>
								<div className="col-lg-4 col-md-5 mb-30">
									<aside className="sticky-top">
										<div className="widget">
											<h5 className="widget-title">Our Inner Pages</h5>
											<ul className="service-menu style-1">
												<li><Link to="/about-1">About Us <i className="las la-question-circle"></i></Link></li>
												<li><Link to="/service-1">Our Services <i className="las la-cog"></i></Link></li>
												<li><Link to="/job-career">Job & Career<i className="las la-user-plus"></i></Link></li>
												<li><Link to="/pricing-plan">Pricing<i className="las la-table"></i></Link></li>
												<li><Link to="/team">Our Team<i className="las la-user-tie"></i></Link></li>
												<li className="active"><Link to="/booking">Booking<i className="lab la-wpforms"></i></Link></li>
												<li><Link to="/faq-1">Faq<i className="las la-quote-left"></i></Link></li>
											</ul>
										</div>
									</aside>
								</div>
							</div>
						</div>
					</section>
					
				</div>
				
				<Footer />
				
			</>
		);
	}
}

export default Booking;