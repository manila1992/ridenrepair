import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

// Import Images
import bg1 from "../../images/background/bg1.jpg"
import testPic1 from "../../images/testimonials/pic1.jpg"
import testPic2 from "../../images/testimonials/pic2.jpg"
import testPic3 from "../../images/testimonials/pic3.jpg"
import testPic4 from "../../images/testimonials/pic4.jpg"

// Team Content
const content = [
	{ 
		thumb: testPic1,
		name: "Michel Bohman",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit risus at quam hendrerit, quis egestas ligula imperdiet. Cras ultricies massa nec nulla tincidunt, vel viverra lacus ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque metus odio, pellentesque sed.",		
	},
	{ 
		thumb: testPic2,
		name: "Kalina Mollika",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit risus at quam hendrerit, quis egestas ligula imperdiet. Cras ultricies massa nec nulla tincidunt, vel viverra lacus ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque metus odio, pellentesque sed.",		
	},
	{ 
		thumb: testPic3,
		name: "Michel Bohman",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit risus at quam hendrerit, quis egestas ligula imperdiet. Cras ultricies massa nec nulla tincidunt, vel viverra lacus ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque metus odio, pellentesque sed.",		
	},
	{ 
		thumb: testPic4,
		name: "Kalina Mollika",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit risus at quam hendrerit, quis egestas ligula imperdiet. Cras ultricies massa nec nulla tincidunt, vel viverra lacus ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque metus odio, pellentesque sed.",		
	},
]

class TestimonialSection extends Component{
	render(){
		
		const settings = {
			dots: false,
			infinite: true,
			speed: 1000,
			slidesToShow: 2,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 1191,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 1,
					}
				}
			]
		};
		
		return(
			<>
				
				<section className="section-area section-sp2 bg-gray ovbl-dark testimonial-area" style={{backgroundImage: "url("+bg1+")", backgroundRepeat: "no-repeat", backgroundAttachment: "fixed", backgroundSize: "cover"}}>
					<div className="container">
						<div className="heading-bx text-white d-lg-flex d-md-block align-items-end justify-content-between">
							<div className="clearfix mb-2">
								<h6 className="title-ext text-primary">TESTIMONIAL</h6>
								<h2 className="title mb-0">WHAT CLIENTS SAY</h2>
							</div>
							<div className="clearfix mt-md-20">
								<Link to="#" className="btn btn-outline-primary">View All Client</Link>
							</div>
						</div>
						<Slider {...settings} className="testimonial-carousel-1 slick-arrow-none">
							{content.map((item) =>(
								<div className="slider-item">								
									<div className="testimonial-bx">
										<div className="testimonial-content">
											<p>{item.text}</p>
										</div>
										<div className="client-info">
											<div className="testimonial-info">
												<h6 className="name">- {item.name}</h6>
											</div>
											<div className="testimonial-thumb">
												<img src={item.thumb} alt=""/>
											</div>
										</div>
									</div>
								</div>
							))}
						</Slider>
					</div>
				</section>
				
			</>
		);
	}
}

export default TestimonialSection;