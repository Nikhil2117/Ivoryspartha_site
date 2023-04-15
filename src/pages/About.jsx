import React from "react"
import bgImg from "../assets/images/img1.jpg"
import { Link } from "react-router-dom"

export default function About() {
    return (
        <div className="about-page-container">
            <img src={bgImg} className="about-hero-image" alt="img"/>
            <div className="about-page-content">
                <h1>IVORYSPARTHA ORGANIZERS IS HERE FOR YOU</h1>
                <p>Our mission is to enliven your events with the perfect combination of creativity,
                    professionalism, and attention to detail, ensuring that every moment is unforgettable.</p>
                <p>As your trusted event planner, 
                    we will help you reach your destination - a flawless and unforgettable event. 
                    With our expertise and attention to detail, we will work closely with you to bring 
                    your vision to life and create an event that exceeds your expectations. Whether it's 
                    a corporate conference, social gathering, or special celebration, we are committed to 
                    making your event a success. So, what are you waiting for? Let's start planning and make 
                    your destination a reality.</p>
            </div>
            <div className="about-page-cta">
                <h2>Ready to book an event !!<br />Ivoryspartha Organizer is ready.</h2>
                <Link className="link-button" to="/vans">Book Now !!</Link>
            </div>
        </div>
    );
}