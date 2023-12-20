import React from 'react'
import OpportunityCard from "./components/OpportunityCard";
import Calendar from "./components/Calendar";
import Navbar from '../navbar/navbar'
import Header from '../header/header'
import './opportunities.css';
import bulb from "../../assets/img/opportunities/bulb.png";
import UpcomingCard from "./components/UpcomingCard";
import Footer from '../footer/footer';

export default function blogs() {
    return (
        <>
            <Navbar />
            <Header highlight='opportunities' />

            <div className="header-container">
                <img className="bulb" src={bulb} alt="professor"></img>

                <div className="opportunities-heading mt-5">
                    <div>
                        <h1 className="opportunities-text">Opportunities</h1>
                    </div>
                </div>
            </div>

            <div className="left-main-container mt-5">
                <div>
                    <OpportunityCard></OpportunityCard>
                    <OpportunityCard></OpportunityCard>
                    <OpportunityCard></OpportunityCard>
                    <OpportunityCard></OpportunityCard>
                    <OpportunityCard></OpportunityCard>
                </div>

                <div className="vertical-hr">
                    <hr></hr>
                </div>

                <div className="right-main-container mt-5">
                    <Calendar className="calendar"></Calendar>

                    <p className="fw-bold week-preview">Your Week In Preview</p>

                    <UpcomingCard></UpcomingCard>
                    <UpcomingCard></UpcomingCard>
                    <UpcomingCard></UpcomingCard>
                    <UpcomingCard></UpcomingCard>
                    <UpcomingCard></UpcomingCard>
                </div>

            </div>

            <div className="pagination">
                <div className="inner-pagination flex-item">
                    <div className="selected">1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>...</div>
                    <div>8</div>
                    <div>9</div>
                    <div>10</div>
                </div>

                <div className="flex-item">Next</div>
            </div>

            <Footer></Footer>
        </>
    )
}
