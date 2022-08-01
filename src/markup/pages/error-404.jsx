import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Error404 extends Component{
	
	render(){
		return (
			<>
				<div className="error-404">
					<div className="inner-content container">
						<h2 className="error-title">4<span></span>4</h2>
						<h3 className="error-text">The Page you were looking for, couldn't be found.</h3>
						<p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
						<div className="clearfix">
							<Link to="/" className="btn btn-primary m-r5">Back</Link>
							<Link to="/" className="btn btn-primary">Back To Home</Link>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default Error404;