import React, { Component } from 'react';

// Images
import car1 from "../../images/why-choose/car-1.png";
import car2 from "../../images/why-choose/car-2.png";
import car3 from "../../images/why-choose/car-3.png";
import car4 from "../../images/why-choose/car-4.png";
import car5 from "../../images/why-choose/car-5.png";
import car6 from "../../images/why-choose/car-6.png";

class PartnerShipsSection extends Component{
	render(){
		return(
			<>
				<section className="section-area section-sp1 bg-gray">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-xl-5 col-lg-5">
								<div className="heading-bx mb-4 pr-lg-5">
									<h6 className="title-ext m-b0 text-primary">PARTNERSHIPS</h6>
									<h2 className="title">OUR PARTNERSHIPS</h2>
									<p>We offer a full range of garage services to vehicle owners located in Tucson area. All mechanic services are performed.</p>
								</div>
							</div>
							<div className="col-xl-7 col-lg-7 mb-30">
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
				</section>
			</>
		);
	}
}

export default PartnerShipsSection;