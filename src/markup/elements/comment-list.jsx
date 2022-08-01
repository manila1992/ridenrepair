import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Import Images
import testPic1 from "../../images/testimonials/pic1.jpg";
import testPic2 from "../../images/testimonials/pic2.jpg";
import testPic3 from "../../images/testimonials/pic3.jpg";

class CommentList extends Component{
	render(){
		return(
			<>
				<ol className="comment-list">
					<li className="comment">
						<div className="comment-body">
							<div className="comment-author vcard">
								<img className="avatar photo" src={testPic1} alt=""/>
								<cite className="fn">George</cite>
								<span className="says">says:</span>
							</div>
							<div className="comment-meta">
								<Link to="#">May 09, 2021 at 10:45 am</Link>
							</div>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae neqnsectetur adipiscing elit. Nam viae neqnsectetur adipiscing elit. Nam vitae neque vitae sapien malesuada aliquet. </p>
							<div className="reply">
								<Link to="#" className="comment-reply-link">Reply</Link>
							</div>
						</div>
						<ol className="children">
							<li className="comment odd parent">
								<div className="comment-body">
									<div className="comment-author vcard">
										<img className="avatar photo" src={testPic2} alt=""/>
										<cite className="fn">Falikaz</cite>
										<span className="says">says:</span>
									</div>
									<div className="comment-meta">
										<Link to="#">May 09, 2021 at 10:45 am</Link>
									</div>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae neque vitae sapien malesuada aliquet. In viverra dictum justo in vehicula. Fusce et massa eu ante ornare molestie.</p>
									<div className="reply">
										<Link to="#" className="comment-reply-link">Reply</Link>
									</div>
								</div>
								<ol className="children">
									<li className="comment odd parent">
										<div className="comment-body">
											<div className="comment-author vcard">
												<img className="avatar photo" src={testPic3} alt=""/>
												<cite className="fn">Kalina</cite>
												<span className="says">says:</span>
											</div>
											<div className="comment-meta">
												<Link to="#">May 09, 2021 at 10:45 am</Link>
											</div>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae neque vitae sapien malesuada aliquet. In viverra dictum justo in vehicula.</p>
											<div className="reply">
												<Link to="#" className="comment-reply-link">Reply</Link>
											</div>
										</div>
									</li>
								</ol>
							</li>
						</ol>
					</li>
					<li className="comment">
						<div className="comment-body">
							<div className="comment-author vcard">
								<img className="avatar photo" src={testPic1} alt=""/>
								<cite className="fn">Sonar</cite>
								<span className="says">says:</span>
							</div>
							<div className="comment-meta">
								<Link to="#">May 09, 2021 at 10:45 am</Link>
							</div>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae neque vitae sapien malesuada aliquet. In viverra dictum justo in vehicula. Fusce et massa eu ante ornare molestie. Sed vestibulum sem felis.</p>
							<div className="reply">
								<Link to="#" className="comment-reply-link">Reply</Link>
							</div>
						</div>
					</li>
					<li className="comment">
						<div className="comment-body">
							<div className="comment-author vcard">
								<img className="avatar photo" src={testPic2} alt=""/>
								<cite className="fn">Michel</cite>
								<span className="says">says:</span>
							</div>
							<div className="comment-meta">
								<Link to="#">May 09, 2021 at 10:45 am</Link>
							</div>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae neque vitae sapien malesuada aliquet. In viverra dictum justo in vehicula. Fusce et massa eu ante ornare molestie. Sed vestibulum sem felis.</p>
							<div className="reply">
								<Link to="#" className="comment-reply-link">Reply</Link>
							</div>
						</div>
					</li>
					<li className="comment">
						<div className="comment-body">
							<div className="comment-author vcard">
								<img className="avatar photo" src={testPic3} alt=""/>
								<cite className="fn">Falikaz</cite>
								<span className="says">says:</span>
							</div>
							<div className="comment-meta">
								<Link to="#">May 09, 2021 at 10:45 am</Link>
							</div>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae neque vitae sapien malesuada aliquet. In viverra dictum justo in vehicula. Fusce et massa eu ante ornare molestie.</p>
							<div className="reply">
								<Link to="#" className="comment-reply-link">Reply</Link>
							</div>
						</div>
					</li>
				</ol>
				
			</>
		);
	}
}

export default CommentList;