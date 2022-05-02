import React from "react";
import STYLES from "./Nav.module.scss";
import DH_LOGO from "../../images/dh_logo.svg";

export const HomeNav = () => {
    return (
        <nav className="navbar navbar-light bg-light navbar-expand-sm">
            <a className={`navbar-brand mr-auto ${STYLES.linkHome}`} href="/">
                Sonification Toolkit
            </a>
            <a className={STYLES.linkLab} href="https://digitalhumanities.mit.edu/" target="_blank" rel="noreferrer">
                <img alt="MIT Digital Humanities Logo" className={STYLES.imageLab} src={DH_LOGO} />
            </a>
        </nav>
    );
};

const Nav = () => {
    return (
        <nav className="navbar navbar-light bg-light navbar-expand-sm">
            <a className={`navbar-brand ${STYLES.linkHome}`} href="/">Sonification Toolkit</a>
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <a className="nav-link" href="/colors/">
                        Colors
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/gestures/">
                        Gestures
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/polygons/">
                        Polygons
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/time-series/">
                        Time Series
                    </a>
                </li>
            </ul>
            <a className={STYLES.linkLab} href="https://digitalhumanities.mit.edu/" target="_blank" rel="noreferrer">
                <img alt="MIT Digital Humanities Logo" className={STYLES.imageLab} src={DH_LOGO} />
            </a>
        </nav>
    );
};

export default Nav;
