import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Import Images
import icon1 from "../../../images/icon/contact/skin2/icon1.png"
import icon2 from "../../../images/icon/contact/skin2/icon2.png"
import icon3 from "../../../images/icon/contact/skin2/icon3.png"

class widgetContact extends Component{
	render(){
		return(
			<>
				<div className="widget">
					<h5 className="widget-title">Contact Us</h5>
					<ul className="contact-infolist">
						<li>
							<img src={icon1} alt=""/>
							<h6 className="contact-title">Contact Number</h6>
							<p>+001 123 456 790 <br/> (02)  3424 44 00</p>
						</li>
						<li>
							<img src={icon2} alt=""/>
							<h6 className="contact-title">Email Address</h6>
							<Link to="#">info@yourdomain.com</Link><br/>
							<Link to="#">example@support.com</Link>
						</li>
						<li>
							<img src={icon3} alt=""/>
							<h6 className="contact-title">Address</h6>
							<p>2005 Stokes Isle Apt. 896, Venaville 10010, USA</p>
						</li>
					</ul>
				</div>
				
			</>
		);
	}
}

export default widgetContact;