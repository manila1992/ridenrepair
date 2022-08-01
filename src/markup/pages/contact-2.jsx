import React, {Component} from 'react';
import { Link } from 'react-router-dom';

// Layout
import Header from "../layout/header";
import Footer from "../layout/footer";

// Images
import bnrImg from "../../images/banner/bnr2.jpg";
import car1 from "../../images/why-choose/car-1.png";
import car2 from "../../images/why-choose/car-2.png";
import car3 from "../../images/why-choose/car-3.png";
import car4 from "../../images/why-choose/car-4.png";
import car5 from "../../images/why-choose/car-5.png";
import car6 from "../../images/why-choose/car-6.png";

class ContactUs2 extends Component{
	
	render(){
		return (
			<>
				
				<Header />
				
				<div className="page-content bg-white">
					
					<div className="page-banner ovbl-dark" style={{backgroundImage: "url("+bnrImg+")"}}>
						<div className="container">
							<div className="page-banner-entry text-center">
								<h1><span>Contact Us 2</span></h1>
								<nav aria-label="breadcrumb" className="breadcrumb-row">
									<ul className="breadcrumb">
										<li className="breadcrumb-item"><Link to="/"><i className="las la-home"></i>Home</Link></li>
										<li className="breadcrumb-item active" aria-current="page">Contact Us 2</li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
					
					<section className="section-area section-sp1">
						<div className="container">
							<div className="row align-items-center">
								<div className="col-lg-5 mb-50">
									<form className="contact-form style1 ajax-form" action="script/contact.php">
										<div className="heading-bx mb-4 text-white">
											<h6 className="title-ext text-white">Contact Form</h6>
											<h3 className="title mb-0">DO YOU HAVE ANY<br/> QUESTIONS</h3>
										</div>
										<div className="row">
											<div className="col-lg-12">
												<div className="form-group  mb-3">
													<div className="input-group">
														<input name="name" type="text" required className="form-control valid-character" placeholder="Your Name"/>
													</div>
												</div>
											</div>
											<div className="col-lg-12">
												<div className="form-group  mb-3">
													<div className="input-group"> 
														<input name="email" type="email" className="form-control" required  placeholder="Your Email Address"/>
													</div>
												</div>
											</div>
											<div className="col-lg-12">
												<div className="form-group mb-3">
													<div className="input-group">
														<input name="phone" type="text" required className="form-control int-value" placeholder="Your Phone"/>
													</div>
												</div>
											</div>
											<div className="col-lg-12">
												<div className="form-group mb-3">
													<div className="input-group">
														<textarea name="message" rows="4" className="form-control" placeholder="Type Message" required ></textarea>
													</div>
												</div>
											</div>
											<div className="col-lg-12">
												<button name="submit" type="submit" value="Submit" className="btn btn-secondary btn-lg"> Send Message</button>
											</div>
										</div>
									</form>
								</div>
								<div className="col-lg-7 mb-30">
									<div className="contact-ri">
										<div className="heading-bx mb-4">
											<h6 className="title-ext text-primary">Contact Info</h6>
											<h2 className="title mb-0">CONTACT US FOR ANY <br/>INFORMATIONS</h2>
										</div>
										<div className="row">
											<div className="col-md-6 col-sm-6 mb-15">
												<div className="icon-box">
													<h6 className="title"><i className="ti-map-alt"></i>Location</h6>		
													<p>2005 Stokes Isle Apt. 896, Venaville 10010, USA</p>
												</div>
											</div>
											<div className="col-md-6 col-sm-6 mb-15">
												<div className="icon-box">
													<h6 className="title"><i className="ti-id-badge"></i>Email & Phone</h6>		
													<Link to="#">info@yourdomain.com</Link>
													<p>(+68) 120034509</p>
												</div>
											</div>
											<div className="col-lg-12 mb-15">
												<div className="icon-box">
													<h6 className="title"><i className="ti-world"></i>Follow Us</h6>
													<ul className="social-media">
														<li><a target="_blank" href="https://www.facebook.com/" rel="noreferrer" className="btn btn-primary"><i className="fa fa-facebook"></i></a></li>
														<li><a target="_blank" href="https://www.google.com/" rel="noreferrer" className="btn btn-primary"><i className="fa fa-google-plus"></i></a></li>
														<li><a target="_blank" href="https://www.linkedin.com/" rel="noreferrer" className="btn btn-primary"><i className="fa fa-linkedin"></i></a></li>
														<li><a target="_blank" href="https://twitter.com/" rel="noreferrer" className="btn btn-primary"><i className="fa fa-twitter"></i></a></li>
													</ul>
												</div>
											</div>
										</div>
										<ul className="brand-list">
											<li><img src={car1} alt=""/></li>
											<li><img src={car2} alt=""/></li>
											<li><img src={car3} alt=""/></li>
											<li><img src={car4} alt=""/></li>
											<li><img src={car5} alt=""/></li>
											<li><img src={car6} alt=""/></li>
										</ul>
									</div>
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

export default ContactUs2;