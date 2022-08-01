import React, {Component} from 'react';
import { Link } from 'react-router-dom';

// Layout
import Header from "../layout/header";
import Footer from "../layout/footer";

// Elements
import PricingTableSection from "../elements/pricing-table";
import PartnerShipsSection from "../elements/partnerships2";

// Images
import bnrImg from "../../images/banner/bnr3.jpg";

class PricingPlan extends Component{
	
	render(){
		return (
			<>
				
				<Header />
				
				<div className="page-content bg-white">
					
					<div className="page-banner ovbl-dark" style={{backgroundImage: "url("+bnrImg+")"}}>
						<div className="container">
							<div className="page-banner-entry text-center">
								<h1><span>Pricing Plan</span></h1>
								<nav aria-label="breadcrumb" className="breadcrumb-row">
									<ul className="breadcrumb">
										<li className="breadcrumb-item"><Link to="/"><i className="las la-home"></i>Home</Link></li>
										<li className="breadcrumb-item active" aria-current="page">Pricing Plan</li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
					
					<PricingTableSection />
					
					<PartnerShipsSection />
					
				</div>
				
				<Footer />
				
			</>
		);
	}
}

export default PricingPlan;