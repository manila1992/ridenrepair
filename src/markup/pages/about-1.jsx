import React, {Component} from 'react';
import { Link } from 'react-router-dom';

// Layout
import Header from "../layout/header";
import Footer from "../layout/footer";

// Elements
import AboutUsTwoSection from "../elements/about-us-2";
import ServicesSection from "../elements/services-1";
import ScheduleServiceSection from "../elements/schedule-service";
import PricingTableSection from "../elements/pricing-table";
import TestimonialSection from "../elements/testimonial";
import LatestBlogSection from "../elements/latest-blog-slider";

// Images
import bnrImg from "../../images/banner/bnr1.jpg";

class AboutUs extends Component{
	
	render(){
		return (
			<>
				
				<Header />
				
				<div className="page-content bg-white">
					
					<div className="page-banner ovbl-dark" style={{backgroundImage: "url("+bnrImg+")"}}>
						<div className="container">
							<div className="page-banner-entry text-center">
								<h1><span>About Us 1</span></h1>
								<nav aria-label="breadcrumb" className="breadcrumb-row">
									<ul className="breadcrumb">
										<li className="breadcrumb-item"><Link to="/"><i className="las la-home"></i>Home</Link></li>
										<li className="breadcrumb-item active" aria-current="page">About Us 1</li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
					
					<AboutUsTwoSection />
					
					<ServicesSection />
					
					<ScheduleServiceSection />
					
					<PricingTableSection />
					
					<TestimonialSection />
					
					<LatestBlogSection />
				
				</div>
				
				<Footer />
				
			</>
		);
	}
}

export default AboutUs;