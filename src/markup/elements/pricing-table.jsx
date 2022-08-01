import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PricingTableSection extends Component{
	render(){
		return(
			<>
				<section className="section-area bg-white section-sp1">
					<div className="container">
						<div className="heading-bx text-center">
							<h6 className="title-ext text-primary">PRICING</h6>
							<h2 className="title mb-0">CHOOSE BEST PLAN</h2>
							<p>We offer a full range of garage services to vehicle owners located in Tucson area. All mechanic services are performed by highly qualified mechanics.</p>
						</div>
						<div className="pricingtable-row">
							<div className="row">
								<div className="col-xl-3 col-sm-6 mb-30">
									<div className="pricingtable-wrapper style1">
										<div className="pricingtable-inner">
											<div className="pricingtable-main">
												<div className="pricingtable-price"> 
													<span className="priceing-doller">$</span>
													<span className="pricingtable-bx">21.00</span>
												</div>
												<div className="pricingtable-title">
													<h4>Car Wash</h4>
													<p><i className="la la-clock"></i> 45 Minutes</p>
												</div>
											</div>
											<ul className="pricingtable-features">
												<li><i className="fa fa-check"></i> One Time Fee</li>
												<li><i className="fa fa-check"></i> 3 User</li>
												<li><i className="fa fa-check"></i> Lifetime Availability</li>
												<li><i className="fa fa-check"></i> Non Featured</li>
												<li><i className="fa fa-check"></i> 30 days Listing</li>
												<li><i className="fa fa-check"></i> 24/7 Support</li>
												<li><i className="fa fa-check"></i> Select</li>
											</ul>
											<div className="pricingtable-footer"> 
												<Link to="/booking" className="btn btn-primary">Get It Now</Link>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-sm-6 mb-30">
									<div className="pricingtable-wrapper style1 pricingtable-highlight">
										<div className="pricingtable-tag">
											most used
										</div>
										<div className="pricingtable-inner">
											<div className="pricingtable-main">
												<div className="pricingtable-price"> 
													<span className="priceing-doller">$</span>
													<span className="pricingtable-bx">29.00</span>
												</div>
												<div className="pricingtable-title">
													<h4>BREAK REPAIR</h4>
													<p><i className="la la-clock"></i> 15 Minutes</p>
												</div>
											</div>
											<ul className="pricingtable-features">
												<li><i className="fa fa-check"></i> One Time Fee</li>
												<li><i className="fa fa-check"></i> 3 User</li>
												<li><i className="fa fa-check"></i> Lifetime Availability</li>
												<li><i className="fa fa-check"></i> Non Featured</li>
												<li><i className="fa fa-check"></i> 30 days Listing</li>
												<li><i className="fa fa-check"></i> 24/7 Support</li>
												<li><i className="fa fa-check"></i> Select</li>
											</ul>
											<div className="pricingtable-footer"> 
												<Link to="/booking" className="btn btn-primary">Get It Now</Link>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-sm-6 mb-30">
									<div className="pricingtable-wrapper style1">
										<div className="pricingtable-inner">
											<div className="pricingtable-main">
												<div className="pricingtable-price"> 
													<span className="priceing-doller">$</span>
													<span className="pricingtable-bx">39.00</span>
												</div>
												<div className="pricingtable-title">
													<h4>GENERAL SERVICE</h4>
													<p><i className="la la-clock"></i> 20 Minutes</p>
												</div>
											</div>
											<ul className="pricingtable-features">
												<li><i className="fa fa-check"></i> One Time Fee</li>
												<li><i className="fa fa-check"></i> 3 User</li>
												<li><i className="fa fa-check"></i> Lifetime Availability</li>
												<li><i className="fa fa-check"></i> Non Featured</li>
												<li><i className="fa fa-check"></i> 30 days Listing</li>
												<li><i className="fa fa-check"></i> 24/7 Support</li>
												<li><i className="fa fa-check"></i> Select</li>
											</ul>
											<div className="pricingtable-footer"> 
												<Link to="/booking" className="btn btn-primary">Get It Now</Link>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-sm-6 mb-30">
									<div className="pricingtable-wrapper style1">
										<div className="pricingtable-inner">
											<div className="pricingtable-main">
												<div className="pricingtable-price"> 
													<span className="priceing-doller">$</span>
													<span className="pricingtable-bx">45.00</span>
												</div>
												<div className="pricingtable-title">
													<h4>WHEEL CHANGE</h4>
													<p><i className="la la-clock"></i> 55 Minutes</p>
												</div>
											</div>
											<ul className="pricingtable-features">
												<li><i className="fa fa-check"></i> One Time Fee</li>
												<li><i className="fa fa-check"></i> 3 User</li>
												<li><i className="fa fa-check"></i> Lifetime Availability</li>
												<li><i className="fa fa-check"></i> Non Featured</li>
												<li><i className="fa fa-check"></i> 30 days Listing</li>
												<li><i className="fa fa-check"></i> 24/7 Support</li>
												<li><i className="fa fa-check"></i> Select</li>
											</ul>
											<div className="pricingtable-footer"> 
												<Link to="/booking" className="btn btn-primary">Get It Now</Link>
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

export default PricingTableSection;