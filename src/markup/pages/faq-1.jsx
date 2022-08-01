import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {Accordion} from 'react-bootstrap';

// Layout
import Header from "../layout/header";
import Footer from "../layout/footer";

// Images
import bnrImg from "../../images/banner/bnr3.jpg";

class Faq extends Component{
	
	render(){
		return (
			<>
				
				<Header />
				
				<div className="page-content bg-white">
					
					<div className="page-banner ovbl-dark" style={{backgroundImage: "url("+bnrImg+")"}}>
						<div className="container">
							<div className="page-banner-entry text-center">
								<h1><span>FAQ's</span></h1>
								<nav aria-label="breadcrumb" className="breadcrumb-row">
									<ul className="breadcrumb">
										<li className="breadcrumb-item"><Link to="/"><i className="las la-home"></i>Home</Link></li>
										<li className="breadcrumb-item active" aria-current="page">FAQ's</li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
					
					<section className="section-area section-sp3">
					   <div className="container">
							<div className="row">
								<div className="col-lg-6">
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
										<Accordion.Item eventKey="3">
											<Accordion.Header>
												<i className="fa fa-question-circle"></i>
												Should I consider using synthetic motor oil?
											</Accordion.Header>
											<Accordion.Body>
												<p className="mb-0">Synthetic engine oils are produced through a synthesis process that takes very small molecules and assembles them into larger designer molecules with premium lubricating properties.</p>
											</Accordion.Body>
										</Accordion.Item>
										<Accordion.Item eventKey="4">
											<Accordion.Header>
												<i className="fa fa-question-circle"></i>
												What parts should be replaced at what intervals?
											</Accordion.Header>
											<Accordion.Body>
												<p className="mb-0">Synthetic engine oils are produced through a synthesis process that takes very small molecules and assembles them into larger designer molecules with premium lubricating properties.</p>
											</Accordion.Body>
										</Accordion.Item>
									</Accordion>
								</div>
								<div className="col-lg-6">
									<Accordion defaultActiveKey="2" className="accordion ttr-accordion style1">
										<Accordion.Item eventKey="0">
											<Accordion.Header>
												<i className="fa fa-question-circle"></i>
												What parts should be replaced at what intervals?
											</Accordion.Header>
											<Accordion.Body>
												<p className="mb-0">Synthetic engine oils are produced through a synthesis process that takes very small molecules and assembles them into larger designer molecules with premium lubricating properties.</p>
											</Accordion.Body>
										</Accordion.Item>
										<Accordion.Item eventKey="1">
											<Accordion.Header>
												<i className="fa fa-question-circle"></i>
												How do I keep track of routine maintenance?
											</Accordion.Header>
											<Accordion.Body>
												<p className="mb-0">Synthetic engine oils are produced through a synthesis process that takes very small molecules and assembles them into larger designer molecules with premium lubricating properties.</p>
											</Accordion.Body>
										</Accordion.Item>
										<Accordion.Item eventKey="2">
											<Accordion.Header>
												<i className="fa fa-question-circle"></i>
												Should I consider using synthetic motor oil?
											</Accordion.Header>
											<Accordion.Body>
												<p className="mb-0">Synthetic engine oils are produced through a synthesis process that takes very small molecules and assembles them into larger designer molecules with premium lubricating properties.</p>
											</Accordion.Body>
										</Accordion.Item>
										<Accordion.Item eventKey="3">
											<Accordion.Header>
												<i className="fa fa-question-circle"></i>
												Should I consider using synthetic motor oil?
											</Accordion.Header>
											<Accordion.Body>
												<p className="mb-0">Synthetic engine oils are produced through a synthesis process that takes very small molecules and assembles them into larger designer molecules with premium lubricating properties.</p>
											</Accordion.Body>
										</Accordion.Item>
										<Accordion.Item eventKey="4">
											<Accordion.Header>
												<i className="fa fa-question-circle"></i>
												What parts should be replaced at what intervals?
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
						
					<section className="section-area section-sp1">
						<div className="container">
							<div className="heading-bx text-center">
								<h6 className="title-ext text-primary">No helpful answer</h6>
								<h2 className="title mb-0">HERE ARE SOME OPTION</h2>
							</div>
							<div className="row">
								<div className="col-md-6 mb-30">
									<div className="feature-container bg-gray-alt left feature-bx1">
										<div className="icon-lg">
											<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 476 476">
												<path d="M400.85,181v-18.3c0-43.8-15.5-84.5-43.6-114.7c-28.8-31-68.4-48-111.6-48h-15.1c-43.2,0-82.8,17-111.6,48 c-28.1,30.2-43.6,70.9-43.6,114.7V181c-34.1,2.3-61.2,30.7-61.2,65.4V275c0,36.1,29.4,65.5,65.5,65.5h36.9c6.6,0,12-5.4,12-12
												V192.8c0-6.6-5.4-12-12-12h-17.2v-18.1c0-79.1,56.4-138.7,131.1-138.7h15.1c74.8,0,131.1,59.6,131.1,138.7v18.1h-17.2
												c-6.6,0-12,5.4-12,12v135.6c0,6.6,5.4,12,12,12h16.8c-4.9,62.6-48,77.1-68,80.4c-5.5-16.9-21.4-29.1-40.1-29.1h-30
												c-23.2,0-42.1,18.9-42.1,42.1s18.9,42.2,42.1,42.2h30.1c19.4,0,35.7-13.2,40.6-31c9.8-1.4,25.3-4.9,40.7-13.9
												c21.7-12.7,47.4-38.6,50.8-90.8c34.3-2.1,61.5-30.6,61.5-65.4v-28.6C461.95,211.7,434.95,183.2,400.85,181z M104.75,316.4h-24.9
												c-22.9,0-41.5-18.6-41.5-41.5v-28.6c0-22.9,18.6-41.5,41.5-41.5h24.9V316.4z M268.25,452h-30.1c-10,0-18.1-8.1-18.1-18.1
												s8.1-18.1,18.1-18.1h30.1c10,0,18.1,8.1,18.1,18.1S278.25,452,268.25,452z M437.95,274.9c0,22.9-18.6,41.5-41.5,41.5h-24.9V204.8
												h24.9c22.9,0,41.5,18.6,41.5,41.5V274.9z" fill="#000"/>
											</svg> 
										</div>
										<div className="icon-content pl-10">
											<h5 className="ttr-tilte">HELP DESK SUPPORT</h5>
											<p>There are many variations of passages of Lorem Ipsum available.</p>
											<Link to="/services-details" className="btn-link">Read More</Link>
										</div>
									</div>
								</div>
								<div className="col-md-6 mb-30">
									<div className="feature-container bg-gray-alt left feature-bx1">
										<div className="icon-lg">
											<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 512 512">
												<path d="M304,96H112c-8.832,0-16,7.168-16,16c0,8.832,7.168,16,16,16h192c8.832,0,16-7.168,16-16C320,103.168,312.832,96,304,96z" fill="#000"/>
												<path d="M240,160H112c-8.832,0-16,7.168-16,16c0,8.832,7.168,16,16,16h128c8.832,0,16-7.168,16-16C256,167.168,248.832,160,240,160z" fill="#000"/>
												<path d="M352,0H64C28.704,0,0,28.704,0,64v320c0,6.208,3.584,11.872,9.216,14.496C11.36,399.488,13.696,400,16,400
														c3.68,0,7.328-1.28,10.24-3.712L117.792,320H352c35.296,0,64-28.704,64-64V64C416,28.704,387.296,0,352,0z M384,256
														c0,17.632-14.336,32-32,32H112c-3.744,0-7.36,1.312-10.24,3.712L32,349.856V64c0-17.632,14.336-32,32-32h288
														c17.664,0,32,14.368,32,32V256z" fill="#000"/>
												<path d="M448,128c-8.832,0-16,7.168-16,16c0,8.832,7.168,16,16,16c17.664,0,32,14.368,32,32v270.688l-54.016-43.2
														c-2.816-2.24-6.368-3.488-9.984-3.488H192c-17.664,0-32-14.368-32-32v-16c0-8.832-7.168-16-16-16c-8.832,0-16,7.168-16,16v16
														c0,35.296,28.704,64,64,64h218.368l75.616,60.512C488.896,510.816,492.448,512,496,512c2.336,0,4.704-0.512,6.944-1.568
														C508.48,507.744,512,502.144,512,496V192C512,156.704,483.296,128,448,128z" fill="#000"/>
											</svg>
										</div>
										<div className="icon-content pl-10">
											<h5 className="ttr-tilte">LIVE CHAT SUPPORT</h5>
											<p>There are many variations of passages of Lorem Ipsum available.</p>
											<Link to="/services-details" className="btn-link">Read More</Link>
										</div>
									</div>
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

export default Faq;