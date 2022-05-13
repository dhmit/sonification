import React from "react";
import PropTypes from "prop-types";
import Sidebar from "./global/Sidebar";

const ProjectCard = ({title, description, route}) => {
    return (
        <a href={route} className={`btn btn-sonification btn-home ${title.toLowerCase()}`}>
            <span className="title">{title}</span>
            <span className="description">{description}</span>
        </a>
    );
};
ProjectCard.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    route: PropTypes.string,
};


const Home = () => {
    const projects = [
        {
            title: "Colors",
            description: "What's the sound of color?",
            route: "/colors/",
        },
        {
            title: "Gestures",
            description: "What sound do gestures make?",
            route: "/gestures/",
        },
        {
            title: "Time Series",
            description: "Hear the sound of time-based events",
            route: "/time-series/",
        },
        {
            title: "Polygons",
            description: "What sound does a shape make?",
            route: "/polygons/",
        },
    ];

    const projectCards = projects.map((project, i) => (
        <ProjectCard
            key={i}
            title={project.title}
            description={project.description}
            route={project.route}
        />
    ));


    return (<>
        <div id="main-container">
            <main id="home" className="container" role="main">
                <div className="content">
                    <h1 className="title">Sonification<br/>
                        Toolkit</h1>
                    <p className="description">
                        This project was created in the MIT Digital Humanities Lab
                        as a collaboration between DH Fall 2021 Faculty Fellow&nbsp;
                        <a href='https://www.ziporyn.com/'>Prof. Evan Ziporyn</a>,&nbsp;
                        <a href='https://digitalhumanities.mit.edu/project/sonification-toolkit-for-musicians/'>
                            two dozen undergraduate research associates</a>,
                        and the <a href='https://digitalhumanities.mit.edu/people/'> instructional
                        staff</a> of the DH Lab.
                    </p>
                    <div className="projects">
                        {projectCards}
                    </div>

                </div>
            </main>
        </div>


    </>);
};

export default Home;
