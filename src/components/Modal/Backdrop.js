import React from 'react';
import './Modal.css'

const Backdrop = (props) => (
    props.show ? <div className="backdrop" onClick={props.toggleBackdrop}></div> : null
);

export default Backdrop;