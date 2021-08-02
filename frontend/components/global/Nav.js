import React from "react";
import STYLES from "./Nav.module.scss";

const Nav = () => {

    return (
        <>
            <nav role="navigation" className="navbar navbar-light bg-light navbar-expand-sm">
                <h1><a className={`navbar-brand ${STYLES.linkHome}`} href="/">Sonification</a></h1>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/sentiment-analysis">
                        Sentiment Analysis
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Nav;