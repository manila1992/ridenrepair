import React, { Component } from 'react';

// Import Images
import testPic2 from "../../images/testimonials/pic2.jpg";

class AuthorProfile extends Component{
	render(){
		return(
			<>
				<div className="author-box blog-user mb-60">
					<div className="author-profile-info">
						<div className="author-profile-pic">
							<img src={testPic2} alt=""/>
						</div>
						<div className="author-profile-content">
							<h5>Sonar Z. Moyna</h5>
							<p>Aenean sollicitudin, lorem quis biber idum auctor anisi elit consequat happ quam vel enim augue.</p>
							<ul className="social-media">
								<li><a rel="noreferrer" target="_blank" className="btn btn-primary" href="https://www.facebook.com/"><i className="fa fa-facebook"></i></a></li>
								<li><a rel="noreferrer" target="_blank" className="btn btn-primary" href="https://www.instagram.com/"><i className="fa fa-instagram"></i></a></li>
								<li><a rel="noreferrer" target="_blank" className="btn btn-primary" href="https://www.linkedin.com/"><i className="fa fa-linkedin"></i></a></li>
								<li><a rel="noreferrer" target="_blank" className="btn btn-primary" href="https://twitter.com/"><i className="fa fa-twitter"></i></a></li>
							</ul>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default AuthorProfile;