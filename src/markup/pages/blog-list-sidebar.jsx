import React, {Component} from 'react';
import { Link } from 'react-router-dom';

// Layout
import Header from "../layout/header";
import Footer from "../layout/footer";

// Elements
import WidgetSearch from "../elements/widget/widget-search";
import WidgetRecentPosts from "../elements/widget/widget-recent-posts";
import WidgetGallery from "../elements/widget/widget-gallery";
import WidgetTag from "../elements/widget/widget-tag";

// Images
import bnrImg from "../../images/banner/bnr1.jpg";
import blogGridPic1 from "../../images/blog/grid/pic1.jpg";
import blogGridPic2 from "../../images/blog/grid/pic2.jpg";
import blogGridPic3 from "../../images/blog/grid/pic3.jpg";
import blogGridPic4 from "../../images/blog/grid/pic4.jpg";
import blogGridPic5 from "../../images/blog/grid/pic5.jpg";
import blogGridPic6 from "../../images/blog/grid/pic6.jpg";
import authorThumbPic1 from "../../images/testimonials/pic1.jpg";
import authorThumbPic2 from "../../images/testimonials/pic2.jpg";
import authorThumbPic3 from "../../images/testimonials/pic3.jpg";
import authorThumbPic4 from "../../images/testimonials/pic4.jpg";
import authorThumbPic5 from "../../images/testimonials/pic5.jpg";
import authorThumbPic6 from "../../images/testimonials/pic6.jpg";

const content = [
	{ 
		thumb: blogGridPic1,
		authorThumb: authorThumbPic1,
		authorName: "Mark John",
		title: "The Number Of Electric Vehicles In The Uk Has Doubled",
		blogText: "Once you’ve gotten all the titles and have chosen the best one, the next thing you need to do is to craft a magnetic content. Great content marketers excel at creating content.",
	},
	{ 
		thumb: blogGridPic2,
		authorThumb: authorThumbPic2,
		authorName: "Merry Desulva",
		title: "Make Your Auto Clean As Before Like New",
		blogText: "Once you’ve gotten all the titles and have chosen the best one, the next thing you need to do is to craft a magnetic content. Great content marketers excel at creating content.",
	},
	{ 
		thumb: blogGridPic3,
		authorThumb: authorThumbPic3,
		authorName: "Thomas deo",
		title: "Interior Cleaning with a Steam Generator",
		blogText: "Once you’ve gotten all the titles and have chosen the best one, the next thing you need to do is to craft a magnetic content. Great content marketers excel at creating content.",
	},
	{ 
		thumb: blogGridPic4,
		authorThumb: authorThumbPic4,
		authorName: "Merry Desulva",
		title: "Types of Portal Sinks and their Advantages",
		blogText: "Once you’ve gotten all the titles and have chosen the best one, the next thing you need to do is to craft a magnetic content. Great content marketers excel at creating content.",
	},
	{ 
		thumb: blogGridPic5,
		authorThumb: authorThumbPic5,
		authorName: "Thomas deo",
		title: "Excellent Customer Service Car Repair",
		blogText: "Once you’ve gotten all the titles and have chosen the best one, the next thing you need to do is to craft a magnetic content. Great content marketers excel at creating content.",
	},
	{ 
		thumb: blogGridPic6,
		authorThumb: authorThumbPic6,
		authorName: "Mark John",
		title: "Classification of Car Wash Types by Service Type",
		blogText: "Once you’ve gotten all the titles and have chosen the best one, the next thing you need to do is to craft a magnetic content. Great content marketers excel at creating content.",
	},
]

class BlogListSidebar extends Component{
	
	render(){
		return (
			<>
				
				<Header />
				
				<div className="page-content bg-gray">
					
					<div className="page-banner ovbl-dark" style={{backgroundImage: "url("+bnrImg+")"}}>
						<div className="container">
							<div className="page-banner-entry text-center">
								<h1><span>Blog List Sidebar</span></h1>
								<nav aria-label="breadcrumb" className="breadcrumb-row">
									<ul className="breadcrumb">
										<li className="breadcrumb-item"><Link to="/"><i className="las la-home"></i>Home</Link></li>
										<li className="breadcrumb-item active" aria-current="page">Blog List Sidebar</li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
					
					<section className="section-area section-sp1">
					   <div className="container">
							<div className="row">
								<div className="col-md-12 col-lg-8 col-xl-8 mb-30 mb-md-50">
									<div className="row">
										<div className="col-12">
											{content.map((item) =>(
												<div className="blog-card blog-list list-large style-1 bg-white shadow">
													<div className="post-media">
														<Link to="/blog-details"><img src={item.thumb} alt=""/></Link>
													</div>
													<div className="post-info">
														<h4 className="post-title"><Link to="/blog-details">{item.title}</Link></h4>
														<div className="post-content">
															<p className="mb-0">{item.blogText}</p>
														</div>
														<ul className="post-meta">
															<li className="author"><img src={item.authorThumb} alt=""/>By <Link href="#">{item.authorName}</Link></li>
															<li className="date"><Link to="#">15 Aug 2021</Link></li>
														</ul>
													</div>
												</div>
											))}
										</div>
									</div>
									<div className="row">
										<div className="col-lg-12">
											<div className="pagination-bx text-center clearfix">
												<ul className="pagination">
													<li className="previous"><Link to="#">Prev</Link></li>
													<li className="active"><Link to="#">1</Link></li>
													<li><Link to="#">2</Link></li>
													<li><Link to="#">3</Link></li>
													<li className="next"><Link to="#">Next</Link></li>
												</ul>
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-12 col-lg-4 col-xl-4 mb-30">
									<aside className="side-bar sticky-top aside-bx">
										
										<WidgetSearch />
										
										<WidgetRecentPosts />
										
										<WidgetGallery />
										
										<WidgetTag />
										
									</aside>
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

export default BlogListSidebar;