import React, { useContext } from "react"
import { Link } from "react-router-dom"

export default function Home() {
    try {
        return (
            <div className="home-container">
                <h1> From concept to execution, we'll make your event a masterpiece.</h1>
                <p>
                    Looking for a unique and unforgettable experience for your guests?
                    Let our team of expert event planners take care of everything!
                    We've got the event plans and the travel vans, so you can focus on enjoying
                    your event while we take care of the rest..As your expert event planner, we're excited to add a touch of adventure to your next event.
                    Our team is the perfect addition to any event, from corporate retreats to weddings and special
                    celebrations. Let us take care of the logistics of planning perfect events, so you and your guests
                    can enjoy a unique and unforgettable experience. </p>
                <Link to="../vans">Explore !!</Link>
            </div>
        )
    } catch (error) {
        console.log(error)
    }
    
};