import React, {Component} from 'react';
import { Link } from 'react-router-dom';

// Images
import logo from "../../images/logo.png";

class ForgetPassword extends Component{
	
	render(){
		return (
			<>
				<div className="page-wraper account-wraper bg-gray py-100 px-20">
					<div className="my-account">
						<div className="logo">
							<img src={logo} alt=""/>
						</div>
						<form>
							<div className="form-group">
								<input type="password" className="form-control" placeholder="Password"/>
							</div>
							<div className="form-group">
								<input type="password" className="form-control" placeholder="New Password"/>
							</div>						
							<div className="form-group">
								<button type="button" className="btn btn-primary w-100 radius-xl">Submit</button>
							</div>													
							<div className="text-center mt-40">						
								<p className="mt-0">Already have an account?</p>
								<Link className="btn btn-lg btn-secondary w-100" to="/">Login</Link>
							</div>	
						</form>
					</div>
				</div>
			</>
		);
	}
}

export default ForgetPassword;