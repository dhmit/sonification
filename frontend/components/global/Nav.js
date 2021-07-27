
import React from "react";
import STYLES from "./Nav.module.scss";
import DH_LOGO from "../../images/dh_logo.svg";

const Nav = () => {

    return (
        <nav className={STYLES.nav}>
            <a className={STYLES.linkHome} href="/">
                Home
            </a>
            <a className={STYLES.linkHome} href="/sentimentanalysis">
                Sentiment Analysis
            </a>
            <a className={STYLES.linkLab} href="https://digitalhumanities.mit.edu/" target="_blank" rel="noreferrer">
                <img className={STYLES.imageLab} src={DH_LOGO} />
            </a>
        </nav>
    );
};

export default Nav;