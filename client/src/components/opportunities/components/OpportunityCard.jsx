import React from "react";
import dummy from "../../../assets/img/opportunities/dummy.png";
import '../opportunities.css';

const OpportunityCard = () => {
    return (
        <>
            <div className="opportunity-card">
                <div className="opportunity-card-upper">
                    <div>
                        <img className="professor-img" src={dummy} alt="professor"></img>
                    </div>

                    <div className="professor-info">
                        <p>Posted few minutes ago</p>
                        <h3>Research under Professor Name</h3>
                        <p className="designation">Designation, Department</p>
                    </div>
                </div>

                <hr className="opportunity-card-hr"></hr>

                <div className="opportunity-card-lower">
                    <div>
                        <p>Minimum Qualifications</p>
                        <ul>
                            <li>Should be 2nd Year or above.</li>
                            <li>Should be from AIML or Data Science specialization.</li>
                        </ul>
                    </div>

                    <button>Apply Now</button>
                </div>
            </div>
        </>
    )
}

export default OpportunityCard;