import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Import Images
import bg2 from "../../images/background/bg2.jpg"
import gridPic1 from "../../images/blog/grid/pic1.jpg"
import gridPic2 from "../../images/blog/grid/pic2.jpg"
import defaultPic1 from "../../images/blog/default/pic1.jpg"
import testiPic1 from "../../images/testimonials/pic1.jpg"
import testiPic2 from "../../images/testimonials/pic2.jpg"
import testiPic3 from "../../images/testimonials/pic3.jpg"

class BlogSection extends Component{
	render(){
		
		return(
			<>
				
				<section className="section-area ovbl-dark blog-wraper1 section-sp1" style={{backgroundImage: "url("+bg2+")", backgroundRepeat: "no-repeat", backgroundAttachment: "fixed", backgroundSize: "cover"}}>
					<div className="container">
						<div className="row">
							<div className="col-xl-6">
								<div className="heading-bx">
									<h6 className="title-ext m-b0 text-primary">BLOGS & NEWS</h6>
									<h2 className="title text-white">WHAT'S GOING ON IN OUR BLOG? </h2>
								</div>
								<div className="heading-ext bg-warning mb-30">
									<h4 className="title text-black mb-0">FIND SERVICE FOR YOU</h4>
									<div className="right">
										<Link to="/blog-grid" className="btn btn-secondary btn-lg">All Blog Post</Link>
									</div>
								</div>
								<div className="blog-card blog-list style-1 bg-white shadow">
									<div className="post-media">
										<Link to="/blog-details"><img src={gridPic2} alt=""/></Link>
									</div>
									<div className="post-info">
										<h5 className="post-title"><Link to="/blog-details">The Number Of Electric Vehicles In The Uk Has Doubled</Link></h5>
										<div className="post-content">
											<p className="mb-0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
										</div>
										<ul className="post-meta">
											<li className="author"><img src={testiPic1} alt=""/>By <Link to="#">George Brown</Link></li>
											<li className="date"><Link to="#">15 Aug 2021</Link></li>
										</ul>
									</div>
								</div>
							</div>
							<div className="col-xl-6">
								<div className="blog-card blog-list style-1 bg-white shadow">
									<div className="post-media">
										<Link to="/blog-details"><img src={gridPic1} alt=""/></Link>
									</div>
									<div className="post-info">
										<h5 className="post-title"><Link to="/blog-details">Make Your Auto Clean As Before Like New</Link></h5>
										<div className="post-content">
											<p className="mb-0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
										</div>
										<ul className="post-meta">
											<li className="author"><img src={testiPic2} alt=""/>By <Link to="#">Thomas deo</Link></li>
											<li className="date"><Link to="#">15 Aug 2021</Link></li>
										</ul>
									</div>
								</div>
								<div className="blog-card style-1 bg-white shadow blog-overlay">
									<div className="post-media">
										<Link to="/blog-details"><img src={defaultPic1} alt=""/></Link>
									</div>
									<div className="post-info">
										<h5 className="post-title"><Link to="/blog-details">Interior Cleaning with a Steam Generator</Link></h5>
										<ul className="post-meta">
											<li className="author"><img src={testiPic3} alt=""/>By <Link to="#">Isabella Evans</Link></li>
											<li className="date"><Link to="#">15 Aug 2021</Link></li>
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

export default BlogSection;