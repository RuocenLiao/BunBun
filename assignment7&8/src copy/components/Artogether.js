import React, { useState } from 'react';
import "./Artogether.css";



/*Citation: https://react-sticky-box.codecks.io/ */
/*class Artogether extends React.Component {
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    };

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    };

    handleScroll = () => {
        if (window.scrollY > 20) {
            document.querySelector(".a__about").className = "a__about selected";
        } else {
            document.querySelector(".a__summary").className = "a__summary selected";
            document.querySelector(".a__about").className = "a__about";
        }

    };

    render() {
*/
function Artogether() {

    const [about, setAbout] = useState(true);
    const [summary, setSummary] = useState(false);
    const [problem, setProb] = useState(false);
    const [methods, setMethods] = useState(false);
    const [insights, setInsights] = useState(false);
    const [solution, setSolution] = useState(false);

    const clickAbout = () => {
        setAbout(true);
        setSummary(false);
        setProb(false);
        setMethods(false);
        setInsights(false);
        setSolution(false);
    } 

    const clickSummary = () => {
        setAbout(false);
        setSummary(true);
        setProb(false);
        setMethods(false);
        setInsights(false);
        setSolution(false);
    } 

    const clickProblem = () => {
        setAbout(false);
        setSummary(false);
        setProb(true);
        setMethods(false);
        setInsights(false);
        setSolution(false);
    }

    const clickMethods = () => {
        setAbout(false);
        setSummary(false);
        setProb(false);
        setMethods(true);
        setInsights(false);
        setSolution(false);
    }

    const clickInsights = () => {
        setAbout(false);
        setSummary(false);
        setProb(false);
        setMethods(false);
        setInsights(true);
        setSolution(false);
    }

    const clickSolution = () => {
        setAbout(false);
        setSummary(false);
        setProb(false);
        setMethods(false);
        setInsights(false);
        setSolution(true);
    }

    return (
        <div>
            <div className='sidebar__sec'>
                <h2 className='title'>
                    ArTogether
                </h2>
                <hr className='solid divider'></hr>
                <div className='sidebar__container'>
                    <div className='sidebar'>  
                        <div>
                            <a href="#a__about" className={about ? 'a__about selected' : 'a__about'}
                               onClick={clickAbout}>
                                About
                            </a>
                        </div>
                        <div>
                            <a href="#a__summary" className={summary ? 'a__summary selected' : 'a__summary'}
                               onClick={clickSummary}>
                                Executive Summary
                            </a>
                        </div>
                        <div>
                            <a href="#a__problem" className={problem ? 'a__problem selected' : 'a__problem'}
                               onClick={clickProblem}>
                                The Problem
                            </a>
                        </div>
                        <div>
                            <a href="#a__methods" className={methods ? 'a__methods selected' : 'a__methods'}
                               onClick={clickMethods}>
                                Methods
                            </a>
                        </div>
                        <div>
                            <a href="#a__insights" className={insights ? 'a__insights selected' : 'a__insights'}
                               onClick={clickInsights}>
                                Insights
                            </a>
                        </div>
                        <div>
                            <a href="#a__solution" className={solution ? 'a__solution selected' : 'a_solution'}
                               onClick={clickSolution}>
                                Solution
                            </a>
                        </div>

                    </div>
                    <div className='main__container'>
                        <div id="a__about" className='about'>
                            <p>This is a user research project proposing an interactive public art museum that enables a shared art experience online.</p>
                            <p><b>Duration:</b> 2 mo.</p>
                            <p><b>Tools:</b> Mural</p>
                            <p><b>Skills:</b> Contextual Inquiry, Affinity Diagramming, storyboard speed-dating, think-aloud protocol</p>
                            <p><b>My Roles:</b> meeting facilitator, interviewer</p>
                        </div>
                        <div id="a__summary" className='summary'>
                            <p>Public art is a platform for people to <b>connect with each other</b> and <b>create shared experiences together.</b> </p>
                            <p>In this unprecedented time of strained social connections, we propose <b>ArTogether, a digital, interactive public art museum.</b> In ArTogether, you and your friends can <b>tour online public art together in real-time.</b> </p>
                            <p>This platform connects people by <b>democratizing the artistic experience</b> and <b>eliminating the financial and physical barriers </b>within the realm of public art. It will help measure how public art facilitates social connections that foster a sense of community and wellbeing, and ultimately, contributes to a city’s livability. </p>
                        </div>
                        <div id="a__problem" className='problem'>
                            <p>We scoped our project around the understanding that public art serves the general public by connecting the people.</p>
                            <p>Before this pandemic, when viewers visit public art together, they create shared memories and bond over art. However, the pandemic has physically limited us, cutting off art viewers' shared art experiences and connections. </p>
                            <p>In our project, we wanted to address the question of how people can experience public art together during this pandemic.</p>
                        </div>
                        <div id="a__methods" className='methods'>
                            <p>From the initial problem space, we collected data through: </p>
                            <p><b>*Contextual inquiries</b>  to understand different stakeholders</p>
                            <p><b>*Affinity diagramming</b>  to converged to a narrowed scope of social connection amongst art viewers</p>
                            <p><b>*Think-aloud protocol</b> in a generative research manner to dive deeper into the scope of social connection.</p>
                            <p><b>*Storyboard speed dating</b> to validate users' needs </p>
                            <div id='a__iterative'></div>
                        </div>
                        <div id="a__insights" className='insights'>
                            <p>Q1: What do people value when experiencing art with others?</p>
                            <p><b>A1: Public art serves as a platform for social interactions.</b></p>
                            <br/>
                            <p>Q2: How do people interact with others over public art?</p>
                            <p><b>A2: Users prefer interacting with familiar peers but are willing to open up to strangers with shared interests.</b></p>
                            <br/>
                            <p>Q3: How are art viewers interacting in a pandemic?</p>
                            <p><b>A3: Art viewers need a platform in which they can interact with familiar peers and experience art together.</b></p>
                        </div>
                        <div id="a__solution" className='solution'>
                            <p>Our solution is to provide our users with <b>a virtual space where they can interact with other art viewers and create shared memories.</b></p>
                            <br/>
                            <p>Our solution embraces a virtual environment so that anyone can access this public museum, regardless of their physical location in this pandemic. </p>
                            <br/>
                            <p>ArTogether lets users create avatars that can tour the virtual museum space together, they will feel they are co-existing in the virtual space and experience this journey together, just as users could do in-person before this pandemic. </p>
                            <br/>
                            <p>Users can have video or audio chat and share their opinions about art not only with their friends but also meet like-minded new users. </p>
                            <br/>
                            <p>This museum enhances social connections by creating more interpersonal interactions and shared memories for art viewers who cannot view outside public art with others during the pandemic.</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Artogether

/*<h1 className='artogether'>ArTogether</h1>*/