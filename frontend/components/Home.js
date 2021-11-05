import React from "react";
import PropTypes from "prop-types";

const ProjectCard = ({title, description, route}) => {
    return (
        <div className="col-3 card mb-4 mr-4">
            <div className="card-body">
                <h2 className="card-title text-center">
                    <a href={route} className="stretched-link">{title}</a>
                </h2>
                {description &&
                    <h3 className="card-subtitle">{description}</h3>
                }
            </div>
        </div>
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
            title: 'Colors',
            route: '/colors/',
        },
        {
            title: 'Gestures',
            route: '/gestures/',
        },
        {
            title: 'Time Series',
            route: '/time-series/',
        },
        {
            title: 'Polygons',
            route: '/polygons/',
        },
        {
            title: 'Text Shape',
            route: '/text-shape/',
        },
        {
            title: 'Playback Demos',
            route: '/playback-demo/',
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

    return (
        <div className="row">
            {projectCards}
            <div className="col-3 card mb-4 mr-4">
                <div className="card-body text-center">
                    <h2 className="card-title">
                        Numbers Demo
                    </h2>
                    <a href="/numbers-before/" className="card-link">Before</a>
                    <a href="/numbers-after/" className="card-link">After</a>
                </div>
            </div>
        </div>
    );
};

export default Home;
