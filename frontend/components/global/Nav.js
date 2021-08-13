import React from "react";
import STYLES from "./Nav.module.scss";
import DH_LOGO from "../../images/dh_logo.svg";

const Nav = () => {

    return (
        <nav className="navbar navbar-light bg-light navbar-expand-sm">
            <a className={`navbar-brand ${STYLES.linkHome}`} href="/">Sonification</a>
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <a className="nav-link" href="/sentiment-analysis">
                        Sentiment Analysis
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/image-analysis">
                        Image Analysis
                    </a>
                </li>
            </ul>
            <a className={STYLES.linkLab} href="https://digitalhumanities.mit.edu/" target="_blank" rel="noreferrer">
                <img className={STYLES.imageLab} src={DH_LOGO} />
            </a>
        </nav>
    );
};

export default Nav;
