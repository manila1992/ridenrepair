import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Accordion } from "react-bootstrap";

// Layout
import Header from "../layout/header";
import Footer from "../layout/footer";

// Images
import bnrImg from "../../images/banner/bnr1.jpg";
import team3 from "../../images/team/team3.jpg";

class TeamDetails extends Component{
	
	render(){
		return (
			<>
				
				<Header />
				
				<div className="page-content bg-white">
					
					<div className="page-banner ovbl-dark" style={{backgroundImage: "url("+bnrImg+")"}}>
						<div className="container">
							<div className="page-banner-entry text-center">
								<h1><span>Team Details</span></h1>
								<nav aria-label="breadcrumb" className="breadcrumb-row">
									<ul className="breadcrumb">
										<li className="breadcrumb-item"><Link to="/"><i className="las la-home"></i>Home</Link></li>
										<li className="breadcrumb-item active" aria-current="page">Team Details</li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
					
					<section className="section-area section-sp1 bg-white">
						<div className="container">
							<div className="row member-detail">
								<div className="col-lg-4 col-md-5 mb-30">
									<div className="sticky-top">
										<div className="team-box">
											<div className="team-media">
												<img src={team3} alt=""/>
											</div>
											<div className="team-info">
												<span className="text-primary">CEO &amp; Founder</span>
												<h4 className="title">Michel H. Bohman</h4>
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
								<div className="col-lg-8 col-md-7 mb-30">
									<h3 className="title">Michel H. Bohman</h3>
									<p className="mb-30">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. Synthetic engine oils are produced through a synthesis process that takes very small molecules and assembles them into larger designer molecules.</p>
									
									<h5 className="title">Biography:</h5>
									<p className="mb-30">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.</p>
									<ul className="list-check-squer mb-50">
										<li>Should I consider using synthetic motor oil?</li>
										<li>How do I keep track of routine maintenance?</li>
										<li>What parts should be replaced at what intervals?</li>
										<li>How do I keep track of routine maintenance?</li>
									</ul>
									
									<h5 className="title">Skills:</h5>
									<p className="mb-30">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.</p>
									<div className="progress-area">
										<div className="progress-box style1 appear">
											<div className="progress-info">
												<h6 className="title">Quality Services</h6>
												<h6 className="progress-value">65%</h6>
											</div>
											<div className="progress">
												<div className="progress-bar bg-primary" style={{width: "65%"}}></div>
											</div>
										</div>
										<div className="progress-box style1 appear">
											<div className="progress-info">
												<h6 className="title">Experienced Technicials</h6>
												<h6 className="progress-value">85%</h6>
											</div>
											<div className="progress">
												<div className="progress-bar bg-primary" style={{width: "85%"}}></div>
											</div>
										</div>
										<div className="progress-box style1 appear">
											<div className="progress-info">
												<h6 className="title">Long Term Warranty</h6>
												<h6 className="progress-value">70%</h6>
											</div>
											<div className="progress">
												<div className="progress-bar bg-primary" style={{width: "70%"}}></div>
											</div>
										</div>
									</div>
									
									<h5 className="title">Professional Life:</h5>
									<p className="mb-30">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. Synthetic engine oils are produced through a synthesis process that takes very small molecules and assembles them into larger designer molecules.</p>
									
									<Accordion defaultActiveKey="0" className="accordion ttr-accordion style1">
										<Accordion.Item eventKey="0">
											<Accordion.Header>
												<i className="fa fa-question-circle"></i>
												Should I consider using synthetic motor oil?
											</Accordion.Header>
											<Accordion.Body>
												<p className="mb-0">Synthetic engine oils are produced through a synthesis process that takes very small molecules and assembles them into larger designer molecules with premium lubricating properties.</p>
											</Accordion.Body>
										</Accordion.Item>
										<Accordion.Item eventKey="1">
											<Accordion.Header>
												<i className="fa fa-question-circle"></i>
												What parts should be replaced at what intervals?
											</Accordion.Header>
											<Accordion.Body>
												<p className="mb-0">Synthetic engine oils are produced through a synthesis process that takes very small molecules and assembles them into larger designer molecules with premium lubricating properties.</p>
											</Accordion.Body>
										</Accordion.Item>
										<Accordion.Item eventKey="2">
											<Accordion.Header>
												<i className="fa fa-question-circle"></i>
												How do I keep track of routine maintenance?
											</Accordion.Header>
											<Accordion.Body>
												<p className="mb-0">Synthetic engine oils are produced through a synthesis process that takes very small molecules and assembles them into larger designer molecules with premium lubricating properties.</p>
											</Accordion.Body>
										</Accordion.Item>
									</Accordion>									
								</div>
							</div>
						</div>
					</section>
				
				</div>
				
				<Footer />
				
			</>
		);
	}
}

export default TeamDetails;