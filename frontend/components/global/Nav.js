import React from "react";
import STYLES from "./Nav.module.scss";

const Nav = () => {

    return (
        <>
        <nav className="navbar navbar-light bg-light navbar-expand-sm">
            <a className={`navbar-brand ${STYLES.linkHome}`} href="/">Sonification</a>
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <a className="nav-link" href="/sentimentanalysis">
                        Sentiment Analysis
                    </a>
                </li>
            </ul>
        </nav>
        </>
    );
};

export default Nav;