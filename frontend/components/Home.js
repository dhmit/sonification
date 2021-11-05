import React from "react";


const ProjectCard = ({title, description, route}) => {
    return (
        <div className="card mb-4">
            <div className="card-body">
                <h2 className="card-title">
                    <a href={route}>{title}</a>
                </h2>
                {description &&
                    <h3 className="card-subtitle">{description}</h3>
                }
            </div>
        </div>
    );
};


const Home = () => {
    const projects = [
        {
            title: 'Colors',
            route: '/colors/',
            description: 'This is my description',
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
    ];

    const projectCards = projects.map((project, i) => (
        <ProjectCard
            key={i}
            title={project.title}
            description={project.description}
            route={project.route}
        />
    ));

    return (<>{projectCards}</>);
};

export default Home;
