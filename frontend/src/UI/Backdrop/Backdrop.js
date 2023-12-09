import React from "react";
import Classes from './backdrop.css';

const backdrop = (props) => (
    props.show ? <div className={Classes.Backdrop}
    onClick={props.clicked}></div> : null
);

export default backdrop;