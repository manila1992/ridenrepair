import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ModalVideo from 'react-modal-video'

// Elements
import Count from '../elements/counter-sensor';

// Images
import bg2 from "../../images/background/bg1.png";
import aboutPic2 from "../../images/about/pic2.jpg";

class AboutUsTwoSection extends Component{
	
	constructor () {
		super()
		this.state = {
			isOpen: false
		}
		this.openModal = this.openModal.bind(this)
	}
	openModal () {
		this.setState({isOpen: true})
	}
	
	render(){
		return(
			<>
				
				<section className="section-area section-sp1 bg-white" style={{backgroundImage: "url("+bg2+")", backgroundRepeat: "no-repeat"}}>
					<div className="container">
						<div className="row align-items-center">
							<div className="col-lg-6 mb-30 mb-md-50">
								<div className="heading-bx">
									<h6 className="title-ext text-primary">about Us</h6>
									<h2 className="title">WE'RE A COMPANY OF TALENTED ENGINEERS & MECHANICS</h2>
									<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
								</div>
								<div className="row">
									<div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 col-6">
										<div className="counter-style-1">
											<div className="text-secondry">
												<h2 className="text-primary">
													<Count counter={25}/>
													<span>K</span>
												</h2>
											</div>
											<h5 className="counter-text">SATISFIED CLIENTS</h5>
										</div>
									</div>
									<div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 col-6">
										<div className="counter-style-1">
											<div className="text-secondry">
												<h2 className="text-primary">
													<Count counter={35}/>
													<span>+</span>
												</h2>
											</div>
											<h5 className="counter-text">WINNING AWARDS</h5>
										</div>
									</div>
									<div className="col-xl-4 col-lg-12 col-md-4 col-sm-12">
										<div className="counter-style-1">
											<div className="text-secondry">
												<h2 className="text-primary">
													<Count counter={180}/>
													<span>+</span>
												</h2>
											</div>
											<h5 className="counter-text">COMPLETED WORKS</h5>
										</div>
									</div>
								</div>
								<div className="mt-15 mt-md-0">
									<Link to="/contact-1" className="btn btn-primary me-3">Contact Us</Link>
									<Link to="/booking" className="btn btn-outline-secondary">Book Now</Link>
								</div>
							</div>
							<div className="col-lg-6 mb-30">
								<div className="about-imgbox">
									<img src={aboutPic2} alt=""/>
									<div className="about-year">
										<h2 className="count"><Count counter={20}/> +</h2>
										<h6 className="text">Year In industry</h6>
										<Link to="#" onClick={this.openModal} className="popup-youtube videoplay-bx d-block">
											<i className="fa fa-play"></i>
											<span>Play Video</span>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			
				<ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='PkkV1vLHUvQ' onClose={() => this.setState({isOpen: false})} />
				
			</>
		);
	}
}

export default AboutUsTwoSection;