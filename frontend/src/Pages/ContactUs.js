import React from "react";
import "../Style1.css";




const ContactUs = () => {
  return (
<div className="containerr">
		<div className="contact-box">
			<div className="left"></div>
			<div className="right">
				<h2 className="greencolor">Contact Us</h2>
				<input type="text" className="field" placeholder="Your Name"/>
				<input type="text" className="field" placeholder="Your Email"/>
				<input type="text" className="field" placeholder="Phone"/>
				<textarea placeholder="Message" className="field"></textarea>
				<button className="btn">Send</button>
			</div>
		</div>
	</div>
)


};

export default ContactUs;
