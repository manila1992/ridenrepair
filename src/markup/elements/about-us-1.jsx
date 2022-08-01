import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Images
import bg1 from "../../images/background/bg1.png";
import pic1 from "../../images/about/pic1.jpg";

class AboutUsOneSection extends Component{
	render(){
		return(
			<>
				
				<section className="section-area section-sp1 bg-white" style={{backgroundImage: "url("+bg1+")", backgroundRepeat:"no-repeat"}}>
					<div className="container">
						<div className="row align-items-center">
							<div className="col-lg-5 mb-40">
								<div className="heading-bx mb-4">
									<h6 className="title-ext text-primary">about Us</h6>
									<h2 className="title">WE'RE A COMPANY OF TALENTED ENGINEERS &amp; MECHANICS</h2>
									<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
								</div>
								<Link to="/about-1" className="btn btn-primary">About Us</Link>
							</div>
							<div className="col-lg-7 mb-30">							
								<div className="about-media">
									<div className="media">
										<img src={pic1} alt=""/>
									</div>
									<div className="about-contact bg-primary text-white">
										<h6 className="title-ext text-white">WANT TO TALK?</h6>
										<h3 className="number mb-15 text-white">+22 123 456 7890 </h3>
										<p className="mb-20">Need a special repair service? we are happy to fulfil every request in order to exceed your expe</p>
										<Link to="/booking" className="btn btn-light">BOOK AN APPOINTMENT</Link>
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