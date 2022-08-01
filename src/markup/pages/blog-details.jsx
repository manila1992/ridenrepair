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
import AuthorProfile from "../elements/author-profile";
import CommentList from "../elements/comment-list";
import CommentRespond from "../elements/comment-respond";

// Images
import bnrImg from "../../images/banner/bnr4.jpg";
import testPic1 from "../../images/testimonials/pic1.jpg";
import defaultPic1 from "../../images/blog/default/pic1.jpg";
import galleryPic2 from "../../images/gallery/pic2.jpg";
import galleryPic5 from "../../images/gallery/pic5.jpg";

class BlogDetails extends Component{
	
	render(){
		return (
			<>
				
				<Header />
				
				<div className="page-content bg-white">
					
					<div className="page-banner ovbl-dark" style={{backgroundImage: "url("+bnrImg+")"}}>
						<div className="container">
							<div className="page-banner-entry text-center">
								<h1><span>Blog Details</span></h1>
								<nav aria-label="breadcrumb" className="breadcrumb-row">
									<ul className="breadcrumb">
										<li className="breadcrumb-item"><Link to="/"><i className="las la-home"></i>Home</Link></li>
										<li className="breadcrumb-item active" aria-current="page">Blog Details</li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
					
					<section className="section-area section-sp1 bg-white">
						<div className="container">
							<div className="row">
								<div className="col-md-12 col-lg-8 col-xl-8 mb-30 mb-md-60">
									<div className="blog-lg blog-single">
										<div className="action-box blog-lg">
											<img src={defaultPic1} alt=""/>
										</div>
										<div className="info-bx">
											<ul className="post-meta">
												<li className="author"><img src={testPic1} alt=""/>By <Link to="#">Mark John</Link></li>
												<li className="date"><Link to="#">15 Aug 2021</Link></li>
											</ul>
											<div className="ttr-post-title">
												<h3 className="post-title">Why every startup should adopt Amazon’s Hot Air. Why every startup should adopt.</h3>
											</div>
											<div className="ttr-post-text">
												<p>You just need to enter the keyword and select the keyword type to generate a list of 6 title ideas and suggestions. If you’re not satisfied with the results, you can always hit the refresh button to generate a new list of unique titles.</p>
												<blockquote className="wp-block-quote">
													<p>Once you’ve gotten all the titles and have chosen the best one, the next thing you need to do is to craft a magnetic content. Great content marketers excel at creating content.</p>
												</blockquote>
												<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
												<ul className="wp-block-gallery columns-6 is-cropped">
													<li className="blocks-gallery-item"><img alt="" src={galleryPic2}/></li>
													<li className="blocks-gallery-item"><img alt="" src={galleryPic5}/></li>
												</ul>
												<p>You just need to enter the keyword and select the keyword type to generate a list of 6 title ideas and suggestions. If you’re not satisfied with the results, you can always hit the refresh button to generate a new list of unique titles.</p>
												<p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
											</div>
											<div className="ttr-post-footer">
												<div className="post-tags">
													<strong>TAGS:</strong>
													<Link to="#">PAINTING</Link> 
													<Link to="#">REPAIRING</Link> 
													<Link to="#">TECHNICIALS</Link> 
												</div>
												<div className="share-post ms-auto">
													<ul className="social-media">
														<li><strong>SHARE:</strong></li>
														<li><a target="_blank" href="https://www.facebook.com/" rel="noreferrer" className="btn btn-primary"><i className="fa fa-facebook"></i></a></li>
														<li><a target="_blank" href="https://www.google.com/" rel="noreferrer" className="btn btn-primary"><i className="fa fa-google-plus"></i></a></li>
														<li><a target="_blank" href="https://www.linkedin.com/" rel="noreferrer" className="btn btn-primary"><i className="fa fa-linkedin"></i></a></li>
														<li><a target="_blank" href="https://twitter.com/" rel="noreferrer" className="btn btn-primary"><i className="fa fa-twitter"></i></a></li>
													</ul>
												</div>
											</div>
										</div>
									</div>
									
									<AuthorProfile />
									
									<div className="clear" id="comment-list">
										<div className="comments-area" id="comments">
											<h5 className="widget-title">8 Comments</h5>
											<div className="clearfix">
												
												<CommentList />
												
												<CommentRespond />
												
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

export default BlogDetails;