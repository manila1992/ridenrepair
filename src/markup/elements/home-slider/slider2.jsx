import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import ModalVideo from 'react-modal-video'

// Import Images
import slide1 from "../../../images/slider/slider1/slide1.jpg"
import slide2 from "../../../images/slider/slider1/slide2.jpg"
import slide3 from "../../../images/slider/slider1/slide3.jpg"
import slide4 from "../../../images/slider/slider1/slide4.jpg"

class SliderOne extends Component{
	
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
				
				<div className="ttr-slider style-1">
					<Slider className="ttr-swiper02">
						<div className="slider-item">								
							<div className="slider-img">
								<img src={slide1} alt=""/>
							</div>
							<div className="slider-content container text-center text-white">
								<div className="content-inner">
									<h6 className="sub-title">best service ever</h6>
									<h2 className="title">Providing A Professional <br/>& Relaible Service</h2>
									<Link to="#" onClick={this.openModal} className="popup-youtube bg-warning videoplay-bx1">
										<i className="fa fa-play"></i>
									</Link>
								</div>
							</div>
						</div>
						<div className="slider-item">								
							<div className="slider-img">
								<img src={slide2} alt=""/>
							</div>
							<div className="slider-content container text-center text-white">
								<div className="content-inner">
									<h6 className="sub-title">best service ever</h6>
									<h2 className="title">Providing A Professional <br/>& Relaible Service</h2>
									<Link to="#" onClick={this.openModal} className="popup-youtube bg-warning videoplay-bx1">
										<i className="fa fa-play"></i>
									</Link>
								</div>
							</div>
						</div>
						<div className="slider-item">								
							<div className="slider-img">
								<img src={slide3} alt=""/>
							</div>
							<div className="slider-content container text-center text-white">
								<div className="content-inner">
									<h6 className="sub-title">best service ever</h6>
									<h2 className="title">Providing A Professional <br/>& Relaible Service</h2>
									<Link to="#" onClick={this.openModal} className="popup-youtube bg-warning videoplay-bx1">
										<i className="fa fa-play"></i>
									</Link>
								</div>
							</div>
						</div>
						<div className="slider-item">								
							<div className="slider-img">
								<img src={slide4} alt=""/>
							</div>
							<div className="slider-content container text-center text-white">
								<div className="content-inner">
									<h6 className="sub-title">best service ever</h6>
									<h2 className="title">Providing A Professional <br/>& Relaible Service</h2>
									<Link to="#" onClick={this.openModal} className="popup-youtube bg-warning videoplay-bx1">
										<i className="fa fa-play"></i>
									</Link>
								</div>
							</div>
						</div>
					</Slider>
				</div>
				
				<div className="social-sidebar">
					<ul>
						<li><a target="_blank" rel="noreferrer" href="https://www.instagram.com/">Instagram</a></li>
						<li><a target="_blank" rel="noreferrer" href="https://www.facebook.com/">Facebook</a></li>
						<li><a target="_blank" rel="noreferrer" href="https://twitter.com/">Twitter</a></li>
						<li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/">linkdin</a></li>
					</ul>
				</div>
				
				<ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='PkkV1vLHUvQ' onClose={() => this.setState({isOpen: false})} />
				
			</>
		);
	}
}

export default SliderOne;