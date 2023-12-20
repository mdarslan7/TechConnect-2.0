import React from "react";
import '../opportunities.css';

const UpcomingCard = () => {
    return (
        <div className="upcoming-card">
            <div className="event-poster"></div>
            <div>
                <p className="fw-bold">GitHub Workshop</p>
                <div className="event-details">
                    <p>Room 12014</p>
                    <p>12 Noon - 2 PM</p>
                    <p>4 July</p>
                </div>
            </div>
        </div>
    )
}

export default UpcomingCard;
