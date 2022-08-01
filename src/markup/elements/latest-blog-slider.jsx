import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

// Import Images
import testPic1 from "../../images/testimonials/pic1.jpg"
import testPic2 from "../../images/testimonials/pic2.jpg"
import testPic3 from "../../images/testimonials/pic3.jpg"
import testPic4 from "../../images/testimonials/pic4.jpg"
import testPic5 from "../../images/testimonials/pic5.jpg"
import testPic6 from "../../images/testimonials/pic6.jpg"
import blogGridPic1 from "../../images/blog/grid/pic1.jpg"
import blogGridPic2 from "../../images/blog/grid/pic2.jpg"
import blogGridPic3 from "../../images/blog/grid/pic3.jpg"
import blogGridPic4 from "../../images/blog/grid/pic4.jpg"
import blogGridPic5 from "../../images/blog/grid/pic5.jpg"
import blogGridPic6 from "../../images/blog/grid/pic6.jpg"

// Team Content
const content = [
	{ 
		postMedia: blogGridPic1,
		postAuthor: testPic1,
		postAuthorName: "Isabella Evans",
		postDate: "9 May 2021",
		postTitle: "The Number Of Electric Vehicles Doubled",		
		postText: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.",		
	},
	{ 
		postMedia: blogGridPic2,
		postAuthor: testPic2,
		postAuthorName: "George Brown",
		postDate: "8 May 2021",
		postTitle: "Make Your Auto Clean As Before Like New",		
		postText: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.",		
	},
	{ 
		postMedia: blogGridPic3,
		postAuthor: testPic3,
		postAuthorName: "Thomas deo",
		postDate: "7 May 2021",
		postTitle: "Interior Cleaning with a Steam Generator",		
		postText: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.",		
	},
	{ 
		postMedia: blogGridPic4,
		postAuthor: testPic4,
		postAuthorName: "Isabella Evans",
		postDate: "6 May 2021",
		postTitle: "The Number Of Electric Vehicles Doubled",		
		postText: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.",		
	},
	{ 
		postMedia: blogGridPic5,
		postAuthor: testPic5,
		postAuthorName: "George Brown",
		postDate: "5 May 2021",
		postTitle: "Make Your Auto Clean As Before Like New",		
		postText: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.",		
	},
	{ 
		postMedia: blogGridPic6,
		postAuthor: testPic6,
		postAuthorName: "Thomas deo",
		postDate: "4 May 2021",
		postTitle: "Interior Cleaning with a Steam Generator",		
		postText: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.",		
	}
]

class LatestBlogSection extends Component{
	render(){
		
		const settings = {
			dots: false,
			infinite: true,
			speed: 1000,
			slidesToShow: 3,
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
				
				<section className="section-area section-sp2 bg-gray ov-hidden">
					<div className="container">
						<div className="heading-bx text-center">
							<h6 className="title-ext text-primary">Latest BLOGS</h6>
							<h2 className="title mb-0">OUR LATEST NEWS</h2>
							<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or slightly believable.</p>
						</div>
						<Slider {...settings} className="service-slide slick-arrow-none">
							{content.map((item) =>(
								<div className="slider-item">								
									<div className="blog-card style-1 bg-white shadow">
										<div className="post-media">
											<Link href="blog-details.html"><img src={item.postMedia} alt=""/></Link>
										</div>
										<div className="post-info">
											<h5 className="post-title"><Link to="/blog-details">{item.postTitle}</Link></h5>
											<div className="post-content">
												<p className="mb-0">{item.postText}</p>
											</div>
											<ul className="post-meta">
												<li className="author"><img src={item.postAuthor} alt=""/>By <Link to="/blog-details">{item.postAuthorName}</Link></li>
												<li className="date"><Link to="/blog-details">{item.postDate}</Link></li>
											</ul>
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

export default LatestBlogSection;