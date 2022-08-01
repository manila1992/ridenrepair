import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Masonry from 'react-masonry-component';

// Layout
import Header from "../layout/header";
import Footer from "../layout/footer";

// Images
import bnrImg from "../../images/banner/bnr3.jpg";
import MasonryPic1 from "../../images/blog/masonry/pic1.jpg"
import MasonryPic2 from "../../images/blog/masonry/pic2.jpg"
import MasonryPic3 from "../../images/blog/masonry/pic3.jpg"
import MasonryPic4 from "../../images/blog/masonry/pic4.jpg"
import MasonryPic5 from "../../images/blog/masonry/pic5.jpg"
import MasonryPic6 from "../../images/blog/masonry/pic6.jpg"
import testPic1 from "../../images/testimonials/pic1.jpg"
import testPic2 from "../../images/testimonials/pic2.jpg"
import testPic3 from "../../images/testimonials/pic3.jpg"
import testPic4 from "../../images/testimonials/pic4.jpg"
import testPic5 from "../../images/testimonials/pic5.jpg"
import testPic6 from "../../images/testimonials/pic6.jpg"

// Masonry Content
const content = [
	{
		thumb: MasonryPic1,
		authorThumb: testPic1,
        title: "The Number Of Electric Vehicles In The Uk Has",
		text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.",
		postAuthor: "Mark John",
		postDate: "15 Aug 2021",
    },
	{
		thumb: MasonryPic2,
		authorThumb: testPic2,
        title: "Make Your Auto Clean As Before Like New",
		text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.",
		postAuthor: "Merry Desulva",
		postDate: "15 Aug 2021",
    },
	{
		thumb: MasonryPic3,
		authorThumb: testPic3,
        title: "Interior Cleaning with a Steam Generator",
		text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.",
		postAuthor: "Thomas deo",
		postDate: "15 Aug 2021",
	},
	{
		thumb: MasonryPic4,
		authorThumb: testPic4,
        title: "Types of Portal Sinks and their Advantages",
		text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.",
		postAuthor: "Merry Desulva",
		postDate: "15 Aug 2021",
	},
	{
		thumb: MasonryPic5,
		authorThumb: testPic5,
        title: "Excellent Customer Service Car Repair",
		text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.",
		postAuthor: "Thomas deo",
		postDate: "15 August 2020",
	},
	{
		thumb: MasonryPic6,
		authorThumb: testPic6,
        title: "Classification of Car Wash Types by Service Type",
		text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.",
		postAuthor: "Mark John",
		postDate: "15 Aug 2021",
	},
]

class BlogMasonry extends Component{
	
	render(){
		return (
			<>
				
				<Header />
				
				<div className="page-content bg-gray">
					
					<div className="page-banner ovbl-dark" style={{backgroundImage: "url("+bnrImg+")"}}>
						<div className="container">
							<div className="page-banner-entry text-center">
								<h1><span>Blog Masonry</span></h1>
								<nav aria-label="breadcrumb" className="breadcrumb-row">
									<ul className="breadcrumb">
										<li className="breadcrumb-item"><Link to="/"><i className="las la-home"></i>Home</Link></li>
										<li className="breadcrumb-item active" aria-current="page">Blog Masonry</li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
					
					<section className="section-area section-sp2">
					   <div className="container">
							<Masonry className="row">
								{content.map((item, id) => (
									<div className="action-card col-xl-4 col-md-6">
										<div className="blog-card style-1 bg-white shadow">
											<div className="post-media">
												<Link to="/blog-details"><img src={item.thumb} alt=""/></Link>
											</div>
											<div className="post-info">
												<h4 className="post-title"><Link to="/blog-details">{item.title}</Link></h4>
												<div className="post-content">
													<p className="mb-0">{item.text}</p>
												</div>
												<ul className="post-meta">
													<li className="author"><img src={item.authorThumb} alt=""/>By <Link to="#">{item.postAuthor}</Link></li>
													<li className="date"><Link to="#">{item.postDate}</Link></li>
												</ul>
											</div>
										</div>
									</div>
								))}
							</Masonry>
						
							<div className="row">
								<div className="col-lg-12">
									<div className="pagination-bx text-center clearfix">
										<ul className="pagination">
											<li className="previous"><Link to="#">Prev</Link></li>
											<li className="active"><Link to="#">1</Link></li>
											<li><Link to="#">3</Link></li>
											<li><Link to="#">2</Link></li>
											<li className="next"><Link to="#">Next</Link></li>
										</ul>
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

export default BlogMasonry;