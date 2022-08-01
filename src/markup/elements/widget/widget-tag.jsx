import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class widgetTag extends Component{
	render(){
		return(
			<>
				<div className="widget widget_tag_cloud">
					<h5 className="widget-title">Tags</h5>
					<div className="tagcloud"> 
						<Link to="#">Engine</Link> 
						<Link to="#">Hand tools</Link> 
						<Link to="#">Hardware</Link> 
						<Link to="#">Power Tools</Link> 
						<Link to="#">Storage</Link> 
						<Link to="#">Welding</Link> 
						<Link to="#">Workwear</Link>  
						<Link to="#">Service</Link>  
						<Link to="#">Belts</Link>  
						<Link to="#">Hoses</Link>  
						<Link to="#">Brake</Link>  
						<Link to="#">Repair</Link>  
						<Link to="#">Tire</Link>  
						<Link to="#">Wheel</Link>  
					</div>
				</div>
				
			</>
		);
	}
}

export default widgetTag;