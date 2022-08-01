import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Elements
import Count from '../elements/counter-sensor';

// Images
import bg1 from "../../images/background/bg1.png";
import aboutPic1 from "../../images/about/about2/pic1.jpg";
import aboutPic2 from "../../images/about/about2/pic2.jpg";

class AboutUsFourSection extends Component{
	render(){
		return(
			<>
				<section className="section-area about-wraper1 bg-gray section-sp1" style={{backgroundImage: "url("+bg1+")", backgroundRepeat: "no-repeat"}}>
					<div className="container">
						<div className="row">
							<div className="col-lg-6 about-media mb-30">
								<div className="about-img1">
									<img src={aboutPic1} alt=""/>
								</div>
								<div className="about-img2">
									<img src={aboutPic2} alt=""/>
								</div>
								<div className="experience-bx">
									<h4 className="exp-text">
										<span className="counter"><Count counter={20}/></span> +
									</h4>
									<h6 className="exp-year">experience year</h6>
								</div>
							</div>
							<div className="col-lg-6 mb-30">
								<div className="heading-bx">
									<h6 className="title-ext m-b0 text-primary">about us</h6>
									<h2 className="title mb-0">WE'RE A COMPANY OF TALENTED ENGINEERS & MECHANICS</h2>
									<p className="fw6 fs18">We offer a full range of garage services to vehicle owners located in Tucson area. All mechanic services are performed</p>
								</div>
								<ul className="list-check-squer mb-50 mb-sm-30">
									<li>Should I consider using synthetic motor oil?</li>
									<li>How do I keep track of routine maintenance?</li>
									<li>What parts should be replaced at what intervals?</li>
									<li>How do I keep track of routine maintenance?</li>
								</ul>
								<Link to="/about-2" className="btn btn-primary btn-lg">READ MORE</Link>
							</div>
						</div>
					</div>
				</section>
			</>
		);
	}
}

export default AboutUsFourSection;