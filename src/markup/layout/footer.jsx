import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Images
import logo2 from '../../images/logo2.png';
import icon1 from '../../images/icon/contact/icon1.png';
import icon2 from '../../images/icon/contact/icon2.png';
import icon3 from '../../images/icon/contact/icon3.png';
import recentBlogPic1 from '../../images/blog/recent-blog/pic1.jpg';
import recentBlogPic2 from '../../images/blog/recent-blog/pic2.jpg';

class aboutSection extends Component{
	render(){
		return(
			<>
				
				<footer className="footer">
					<div className="footer-info bg-primary">
						<div className="container">
							<div className="row align-items-center">
								<div className="col-lg-3 col-md-6 col-sm-6 mb-30">
									<div className="footer-logo">
										<img src={logo2} alt=""/> 
									</div>
								</div>
								<div className="col-lg-3 col-md-6 col-sm-6 mb-30">
									<div className="feature-container left footer-info-bx">
										<div className="icon-lg">
											<span className="icon-cell"><img src={icon3} alt=""/></span> 
										</div>
										<div className="icon-content">
											<p>2005 Stokes Isle Apt. 896, Venaville 10010, USA</p>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 col-sm-6 mb-30">
									<div className="feature-container left footer-info-bx">
										<div className="icon-lg">
											<span className="icon-cell"><img src={icon1} alt=""/></span> 
										</div>
										<div className="icon-content">
											<p>+001 123 456 790 <br/>(02) 3424 44 00</p>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 col-sm-6 mb-30">
									<div className="feature-container left footer-info-bx">
										<div className="icon-lg">
											<span className="icon-cell"><img src={icon2} alt=""/></span> 
										</div>
										<div className="icon-content">
											<p>info@yourdomain.com <br/>example@support.com</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="footer-top bt0">
						<div className="container">
							<div className="row">
								<div className="col-xl-3 col-md-6">
									<div className="widget footer_widget">
										<h5 className="footer-title">Company</h5>
										<p className="mb-20">Need a special repair service? we are happy to fulfil every request in order to exceed your expectations</p>
										<div className="ft-content">
											<i className="fa fa-phone"></i>
											<span>Talk To Our Support</span>
											<h4>+22 123 456 7890 </h4>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-md-6">
									<div className="widget widget-link-2">
										<h5 className="footer-title">Our Solutions</h5>
										<ul>
											<li><Link to="/about-us">About Us</Link></li>
											<li><Link to="#">Engine Services</Link></li>
											<li><Link to="/booking">Booking</Link></li>
											<li><Link to="#">Oil And Filters</Link></li>
											<li><Link to="/services">Our Services</Link></li>
											<li><Link to="#">Belts And Hoses</Link></li>
											<li><Link to="/pricing-plan">Pricing Plan</Link></li>
											<li><Link to="#">Brake Repair</Link></li>
											<li><Link to="/team">Out Team</Link></li>
											<li><Link to="#">Air Conditioning</Link></li>
											<li><Link to="/contact-us">Contact Us</Link></li>
											<li><Link to="#">Tire And Wheel</Link></li>
										</ul>							
									</div>
								</div>
								<div className="col-xl-3 col-md-6">
									<div className="widget recent-posts-entry">
										<h5 className="footer-title">Latest news</h5>
										<div className="widget-post-bx">
											<div className="widget-post clearfix">
												<div className="ttr-post-media"> 
													<img src={recentBlogPic1} alt=""/> 
												</div>
												<div className="ttr-post-info">
													<h6 className="post-title"><Link to="/blog-details">Precious Tips To Help You Get Better.</Link></h6>
													<ul className="post-meta">
														<li className="date"><Link to="/blog-details"><i className="fa fa-calendar"></i> 15 Aug 2021</Link></li>
													</ul>
												</div>
											</div>
											<div className="widget-post clearfix">
												<div className="ttr-post-media"> 
													<img src={recentBlogPic2} alt=""/> 
												</div>
												<div className="ttr-post-info">
													<h6 className="post-title"><Link to="/blog-details">Ten Doubts You Should Clarify About.</Link></h6>
													<ul className="post-meta">
														<li className="date"><Link to="/blog-details"><i className="fa fa-calendar"></i> 15 Aug 2021</Link></li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-md-6">
									<div className="widget widget_info">
										<h5 className="footer-title">Subscribe Now</h5>
										<p className="mb-20">Weekly Breaking News Analysis And Cutting Edge Advices On Job Searching.</p>
										<form className="subscribe-form subscription-form mb-30">
											<div className="ajax-message"></div>
											<div className="input-group">
												<input name="email" required="required" className="form-control" placeholder="Email Address" type="email"/>
												<div className="input-group-append">
													<button name="submit" value="Submit" type="submit" className="btn btn-block btn-primary radius-sm">Send</button>	
												</div>
											</div>
										</form>
										<ul className="list-inline ft-social-bx">
											<li><a target="_blank" rel="noreferrer" href="https://www.facebook.com/" className="btn button-sm"><i className="fa fa-facebook"></i></a></li>
											<li><a target="_blank" rel="noreferrer" href="https://twitter.com/" className="btn button-sm"><i className="fa fa-twitter"></i></a></li>
											<li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/" className="btn button-sm"><i className="fa fa-linkedin"></i></a></li>
											<li><a target="_blank" rel="noreferrer" href="https://www.instagram.com/" className="btn button-sm"><i className="fa fa-instagram"></i></a></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="footer-bottom">
						<div className="container">
							<div className="row">
								<div className="col-lg-6 col-md-6 col-sm-12 text-center text-md-start">
									<p className="mb-0">© Copyright Serfix 2022. All right reserved.</p>
								</div>
								<div className="col-lg-6 col-md-6 col-sm-12 text-center text-md-end">
									<ul className="widget-link">
										<li><Link to="/index">Home</Link></li>
										<li><Link to="/about-us">About</Link></li>
										<li><Link to="/faq-1">FAQs</Link></li>
										<li><Link to="/services">Services</Link></li>
										<li><Link to="/contact-us">Contact</Link></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</footer>
			
			</>
		);
	}
}

export default aboutSection;