import React from "react";
import PropTypes from "prop-types";
import {HomeNav} from "./global/Nav";

const ProjectCard = ({title, description, route}) => {
    return (
        <div className="col-12 col-md-5 card mb-4 mr-4">
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
        <HomeNav/>
        <div id="main-container">
            <main className='container mx-auto' role="main">
                <div className="row">
                    <p className='col-12 col-md-10'>
                        This project was created in the MIT Digital Humanities Lab
                        as a collaboration between DH Fall 2021 Faculty Fellow&nbsp;
                        <a href='https://www.ziporyn.com/'>Prof. Evan Ziporyn</a>,&nbsp;
                        <a href='https://digitalhumanities.mit.edu/project/sonification-toolkit-for-musicians/'>
                        two dozen undergraduate research associates</a>,
                        and the <a href='https://digitalhumanities.mit.edu/people/'> instructional
                        staff</a> of the DH Lab.
                    </p>
                </div>

                <div className="row">
                    {projectCards}
                </div>
            </main>
        </div>


    </>);
};

export default Home;
