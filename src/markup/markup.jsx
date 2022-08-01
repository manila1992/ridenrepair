import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Elements
import BackToTop from './elements/back-top';
import PageScrollTop from './elements/page-scroll-top';

// All Pages Router
import Index from './pages/index';
import Index2 from './pages/index-2';
import AboutUs from './pages/about-1';
import AboutUs2 from './pages/about-2';
import BlogDetails from './pages/blog-details';
import BlogGrid from './pages/blog-grid';
import BlogGridSidebar from './pages/blog-grid-sidebar';
import BlogListSidebar from './pages/blog-list-sidebar';
import BlogMasonry from './pages/blog-masonry';
import Booking from './pages/booking';
import ContactUs from './pages/contact-1';
import ContactUs2 from './pages/contact-2';
import Faq1 from './pages/faq-1';
import Gallery from './pages/gallery-1';
import Gallery2 from './pages/gallery-2';
import JobCareer from './pages/job-career';
import Login from './pages/login';
import Register from './pages/register';
import ForgetPassword from './pages/forget-password';
import PricingPlan from './pages/pricing-plan';
import Services from './pages/service-1';
import Services2 from './pages/service-2';
import ServiceAirConditioning from './pages/service-air-conditioning';
import ServiceBeltsAndHoses from './pages/service-belts-and-hoses';
import ServiceBrakeRepair from './pages/service-brake-repair';
import ServiceEngineDiagnostics from './pages/service-engine-diagnostics';
import ServiceLubeOilAndFilters from './pages/service-lube-oil-and-filters';
import ServiceTireAndWheelServices from './pages/service-tire-and-wheel-services';
import Team from './pages/team';
import TeamDetails from './pages/team-details';
import Error from './pages/error-404';

class Markup extends Component{
	render(){
		return(
			<>
				<BrowserRouter basename={'/react/'}>
				
					<Switch>
					
						<Route path='/' exact component={Index} />
						<Route path='/index-2' exact component={Index2} />
						<Route path='/about-1' exact component={AboutUs} />
						<Route path='/about-2' exact component={AboutUs2} />
						<Route path='/blog-details' exact component={BlogDetails} />
						<Route path='/blog-grid' exact component={BlogGrid} />
						<Route path='/blog-grid-sidebar' exact component={BlogGridSidebar} />
						<Route path='/blog-list-sidebar' exact component={BlogListSidebar} />
						<Route path='/blog-masonry' exact component={BlogMasonry} />
						<Route path='/booking' exact component={Booking} />
						<Route path='/contact-1' exact component={ContactUs} />
						<Route path='/contact-2' exact component={ContactUs2} />
						<Route path='/faq-1' exact component={Faq1} />
						<Route path='/gallery-1' exact component={Gallery} />
						<Route path='/gallery-2' exact component={Gallery2} />
						<Route path='/job-career' exact component={JobCareer} />
						<Route path='/login' exact component={Login} />
						<Route path='/register' exact component={Register} />
						<Route path='/forget-password' exact component={ForgetPassword} />
						<Route path='/pricing-plan' exact component={PricingPlan} />
						<Route path='/service-1' exact component={Services} />
						<Route path='/service-2' exact component={Services2} />
						<Route path='/service-air-conditioning' exact component={ServiceAirConditioning} />
						<Route path='/service-belts-and-hoses' exact component={ServiceBeltsAndHoses} />
						<Route path='/service-brake-repair' exact component={ServiceBrakeRepair} />
						<Route path='/service-engine-diagnostics' exact component={ServiceEngineDiagnostics} />
						<Route path='/service-lube-oil-and-filters' exact component={ServiceLubeOilAndFilters} />
						<Route path='/service-tire-and-wheel-services' exact component={ServiceTireAndWheelServices} />
						<Route path='/team' exact component={Team} />
						<Route path='/team-details' exact component={TeamDetails} />
						<Route component={Error} />
						
					</Switch>
					
					<PageScrollTop />
					
				</BrowserRouter>
				
				<BackToTop />
				
			</>
		);
	}
}

export default Markup;