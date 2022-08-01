import React, {Component} from 'react';
import { Link } from 'react-router-dom';

// Layout
import Header from "../layout/header";
import Footer from "../layout/footer";

// Elements
import AboutUsThreeSection from "../elements/about-us-3";
import ChooseUsSection from "../elements/choose-us";
import ScheduleServiceSection from "../elements/schedule-service";
import TeamTwoSection from "../elements/team-2";
import TestimonialSection from "../elements/testimonial";
import LatestBlogSection from "../elements/latest-blog-slider";

// Images
import bnrImg from "../../images/banner/bnr2.jpg";

class AboutUs2 extends Component{
	
	render(){
		return (
			<>
				<Header />
				
				<div className="page-content bg-white">
					
					<div className="page-banner ovbl-dark" style={{backgroundImage: "url("+bnrImg+")"}}>
						<div className="container">
							<div className="page-banner-entry text-center">
								<h1><span>About Us 2</span></h1>
								<nav aria-label="breadcrumb" className="breadcrumb-row">
									<ul className="breadcrumb">
										<li className="breadcrumb-item"><Link to="/"><i className="las la-home"></i>Home</Link></li>
										<li className="breadcrumb-item active" aria-current="page">About Us 2</li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
					
					<AboutUsThreeSection />
					
					<ChooseUsSection />
					
					<ScheduleServiceSection />
					
					<TeamTwoSection />
					
					<TestimonialSection />
					
					<LatestBlogSection />
					
				</div>
				
				<Footer />
				
			</>
		);
	}
}

export default AboutUs2;