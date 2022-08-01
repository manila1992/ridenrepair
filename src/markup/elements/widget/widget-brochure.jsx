import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Images
import iconPDF from "../../../images/icon/pdf.png";
import iconDOC from "../../../images/icon/doc.png";

class widgetBrochure extends Component{
	render(){
		return(
			<>
				<div className="widget">
					<div className="brochure-bx">
						<h5 className="title-head">Download</h5>
						<Link to="#" className="download-link">
							<img src={iconPDF} alt=""/>
							<h5 className="title">Download our Brochures</h5>
							<span>Download</span>
						</Link>
						<Link to="#" className="download-link">
							<img src={iconDOC} alt=""/>
							<h5 className="title">Our Company Details</h5>
							<span>Download</span>
						</Link>
					</div>
				</div>
			</>
		);
	}
}

export default widgetBrochure;