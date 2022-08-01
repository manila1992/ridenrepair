import React, {Component} from 'react';
import { Link } from 'react-router-dom';

// Images
import logo from "../../images/logo.png";

class Login extends Component{
	
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
								<input type="text" className="form-control" placeholder="Username"/>
							</div>
							<div className="form-group">
								<input type="password" className="form-control" placeholder="Password"/>
							</div>
							<div className="form-group">
								<Link to="/" className="btn mb-10 btn-lg btn-primary w-100">login</Link>
								<Link to="forget-password">Forgot Password</Link>
							</div>
							<div className="text-center mt-40">						
								<p className="mt-0">Dont have any account?</p>
								<Link className="btn btn-lg btn-secondary w-100" to="/register">Register</Link>
							</div>											
						</form>
					</div>
				</div>
			</>
		);
	}
}

export default Login;