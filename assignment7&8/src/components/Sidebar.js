import React from 'react';
import StickyBox from "react-sticky-box";
import "./Sidebar.css";


/*Citation: https://react-sticky-box.codecks.io/ */
function Sidebar() {
    return (
        <div>
            <div className='sidebar__sec'>
                <h2 className='title'>
                    ArTogether
                </h2>
                <hr className='solid divider'></hr>
                <div className='sidebar__container'>
                    <div className='sidebar'>  
                        <div><a href="#about" className='selected'>About</a></div>
                        <div><a href="#summary">Executive Summary</a></div>
                        <div>The Problem</div>
                        <div>Methods</div>
                        <div>Insights</div>
                        <div>Solution</div>
                    </div>
                    <div className='main__container'>
                        <div id="about" className='main__about'>
                            <p>This is a user research project proposing an interactive public art museum that enables a shared art experience online.</p>
                            <p><b>Duration:</b> 2 mo.</p>
                            <p><b>Tools:</b> Mural</p>
                            <p><b>Skills:</b> Contextual Inquiry, Affinity Diagramming, storyboard speed-dating, think-aloud protocol</p>
                            <p><b>My Roles:</b> meeting facilitator, interviewer</p>
                        </div>
                        <div id="summary" className='main__about'>
                            <p>Public art is a platform for people to <b>connect with each other</b> and <b>create shared experiences together.</b> </p>
                            <p>In this unprecedented time of strained social connections, we propose <b>ArTogether, a digital, interactive public art museum.</b> In ArTogether, you and your friends can <b>tour online public art together in real-time.</b> </p>
                            <p>This platform connects people by <b>democratizing the artistic experience</b> and <b>eliminating the financial and physical barriers </b>within the realm of public art. It will help measure how public art facilitates social connections that foster a sense of community and wellbeing, and ultimately, contributes to a city’s livability. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Sidebar

/*<h1 className='artogether'>ArTogether</h1>*/