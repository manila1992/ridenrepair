import React, {Component} from 'react';
import { Link } from 'react-router-dom';

// Layout
import Header from "../layout/header";
import Footer from "../layout/footer";

// Elements
import FeatureOneSection from "../elements/feature-bx1";
import ChooseUsSection from "../elements/choose-us";
import ScheduleServiceSection from "../elements/schedule-service";
import PartnerShipsSection from "../elements/partnerships";

// Images
import bnrImg from "../../images/banner/bnr3.jpg";

class Services extends Component{
	
	render(){
		return (
			<>
				
				<Header />
				
				<div className="page-content bg-white">
					
					<div className="page-banner ovbl-dark" style={{backgroundImage: "url("+bnrImg+")"}}>
						<div className="container">
							<div className="page-banner-entry text-center">
								<h1><span>Services 2</span></h1>
								<nav aria-label="breadcrumb" className="breadcrumb-row">
									<ul className="breadcrumb">
										<li className="breadcrumb-item"><Link to="/"><i className="las la-home"></i>Home</Link></li>
										<li className="breadcrumb-item active" aria-current="page">Services 2</li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
					
					<FeatureOneSection />
					
					<ChooseUsSection />
					
					<ScheduleServiceSection />
					
					<PartnerShipsSection />
				
				</div>
				
				<Footer />
				
			</>
		);
	}
}

export default Services;