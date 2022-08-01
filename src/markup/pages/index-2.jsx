import React, {Component} from 'react';

// Layout
//import Header from "../layout/header";
import Footer from "../layout/footer";

// Elements
import Header from "../layout/header";
import SliderTwoSection from "../elements/home-slider/slider2";
import PartnerShipsSection from "../elements/partnerships";
import AboutUsFourSection from "../elements/about-us-4";
import FeatureThreeSection from "../elements/feature-bx3";
import TeamTwoSection from "../elements/team-2";
import BlogSection from "../elements/blog-section";

class Index2 extends Component{
	
	render(){
		return (
			<>
				
				<Header />
				
				<SliderTwoSection />
				
				<PartnerShipsSection />
				
				<AboutUsFourSection />
				
				<FeatureThreeSection />
				
				<TeamTwoSection />
				
				<BlogSection />
				
				<Footer />
				
			</>
		);
	}
}

export default Index2;