import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Images
import team1 from "../../images/team/team1.jpg";
import team2 from "../../images/team/team2.jpg";
import team3 from "../../images/team/team3.jpg";
import team4 from "../../images/team/team4.jpg";

class TeamOneSection extends Component{
	render(){
		return(
			<>
				<section className="section-area section-sp1">
					<div className="container">
						<div className="heading-bx text-center">
							<h6 className="title-ext text-primary">Team Member</h6>
							<h2 className="title mb-0">OUR TEAM MEMBER</h2>
							<p>We offer a full range of garage services to vehicle owners located in Tucson area. All mechanic services are performed by highly qualified mechanics.</p>
						</div>
						<div className="row">
							<div className="col-lg-3 col-sm-6">
								<div className="team-member style-1 mb-30">
									<div className="team-media">
										<img src={team1} alt=""/>
									</div>
									<div className="team-info">
										<span className="text-primary">CEO & FOUNDER</span>
										<h4 className="title"><Link to="/team-details">Michel H. Bohman</Link></h4>
										<ul className="icon-list">
											<li><i className="fa fa-phone"></i> (007) 123 456 7890</li>
											<li><i className="fa fa-envelope-o"></i> info@example.com</li>
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
							<div className="col-lg-3 col-sm-6">
								<div className="team-member style-1 mb-30">
									<div className="team-media">
										<img src={team2} alt=""/>
									</div>
									<div className="team-info">
										<span className="text-primary">ENGINEER</span>
										<h4 className="title"><Link to="/team-details">Sonar Z. Moyna</Link></h4>
										<ul className="icon-list">
											<li><i className="fa fa-phone"></i> (007) 123 456 7890</li>
											<li><i className="fa fa-envelope-o"></i> info@example.com</li>
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
							<div className="col-lg-3 col-sm-6">
								<div className="team-member style-1 mb-30">
									<div className="team-media">
										<img src={team3} alt=""/>
									</div>
									<div className="team-info">
										<span className="text-primary">WORKER</span>
										<h4 className="title"><Link to="/team-details">Kalina GH. Mollika</Link></h4>
										<ul className="icon-list">
											<li><i className="fa fa-phone"></i> (007) 123 456 7890</li>
											<li><i className="fa fa-envelope-o"></i> info@example.com</li>
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
							<div className="col-lg-3 col-sm-6">
								<div className="team-member style-1 mb-30">
									<div className="team-media">
										<img src={team4} alt=""/>
									</div>
									<div className="team-info">
										<span className="text-primary">HELPER</span>
										<h4 className="title"><Link to="/team-details">Falikaz DJ. Pauls</Link></h4>
										<ul className="icon-list">
											<li><i className="fa fa-phone"></i> (007) 123 456 7890</li>
											<li><i className="fa fa-envelope-o"></i> info@example.com</li>
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
						</div>
					</div>
				</section>
			</>
		);
	}
}

export default TeamOneSection;