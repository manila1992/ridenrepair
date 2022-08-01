import React, {Component} from 'react';
import { Link } from 'react-router-dom';

// Layout
import Header from "../layout/header";
import Footer from "../layout/footer";

// Elements
import PartnerShipsSection from "../elements/partnerships";

// Images
import bnrImg from "../../images/banner/bnr5.jpg";
import team1 from "../../images/team/team1.jpg";
import team2 from "../../images/team/team2.jpg";
import team3 from "../../images/team/team3.jpg";
import team4 from "../../images/team/team4.jpg";
import team5 from "../../images/team/team5.jpg";


const content = [
	{
		thumb: team1,
		name: "Michel H. Bohman",
		work: "CEO & FOUNDER",
		mail: "info@example.com",
		number: "(007) 123 456 7890",
	},
	{
		thumb: team2,
		name: "Sonar Z. Moyna",
		work: "ENGINEER",
		mail: "info@example.com",
		number: "(007) 123 456 7890",
	},
	{
		thumb: team3,
		name: "Kalina GH. Mollika",
		work: "WORKER",
		mail: "info@example.com",
		number: "(007) 123 456 7890",
	},
	{
		thumb: team4,
		name: "Falikaz DJ. Pauls",
		work: "HELPER",
		mail: "info@example.com",
		number: "(007) 123 456 7890",
	},
	{
		thumb: team5,
		name: "Michel H. Bohman",
		work: "CEO & FOUNDER",
		mail: "info@example.com",
		number: "(007) 123 456 7890",
	},
	{
		thumb: team1,
		name: "Sonar Z. Moyna",
		work: "ENGINEER",
		mail: "info@example.com",
		number: "(007) 123 456 7890",
	},
	{
		thumb: team2,
		name: "Kalina GH. Mollika",
		work: "WORKER",
		mail: "info@example.com",
		number: "(007) 123 456 7890",
	},
	{
		thumb: team3,
		name: "Falikaz DJ. Pauls",
		work: "HELPER",
		mail: "info@example.com",
		number: "(007) 123 456 7890",
	}
]

class Team extends Component{
	
	render(){
		return (
			<>
				
				<Header />
				
				<div className="page-content bg-white">
					
					<div className="page-banner ovbl-dark" style={{backgroundImage: "url("+bnrImg+")"}}>
						<div className="container">
							<div className="page-banner-entry text-center">
								<h1><span>Our Team</span></h1>
								<nav aria-label="breadcrumb" className="breadcrumb-row">
									<ul className="breadcrumb">
										<li className="breadcrumb-item"><Link to="/"><i className="las la-home"></i>Home</Link></li>
										<li className="breadcrumb-item active" aria-current="page">Our Team</li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
					
					<section className="section-area section-sp1 bg-gray">
						<div className="container">
							<div className="row">
								{content.map((item) =>(
									<div className="col-lg-3 col-sm-6 mb-30">
										<div className="team-member style-1">
											<div className="team-media">
												<img src={item.thumb} alt=""/>
											</div>
											<div className="team-info">
												<span className="text-primary">{item.work}</span>
												<h4 className="title"><Link to="/team-details">{item.name}</Link></h4>
												<ul className="icon-list">
													<li><i className="fa fa-phone"></i>{item.number}</li>
													<li><i className="fa fa-envelope-o"></i>{item.mail}</li>
												</ul>
												<ul className="social-media">
													<li><a target="_blank" rel="noreferrer" href="https://www.facebook.com/" className="btn btn-primary"><i className="fa fa-facebook"></i></a></li>
													<li><a target="_blank" rel="noreferrer" href="https://www.instagram.com/" className="btn btn-primary"><i className="fa fa-instagram"></i></a></li>
													<li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/" className="btn btn-primary"><i className="fa fa-linkedin"></i></a></li>
													<li><a target="_blank" rel="noreferrer" href="https://twitter.com/" className="btn btn-primary"><i className="fa fa-twitter"></i></a></li>
												</ul>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</section>
					
					<PartnerShipsSection />
				
				</div>
				
				<Footer />
				
			</>
		);
	}
}

export default Team;