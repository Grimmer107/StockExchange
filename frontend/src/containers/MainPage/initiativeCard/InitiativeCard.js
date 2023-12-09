import React from 'react';
import Classes from './initiativeCard.css';

const InitiativeCard = (props) => {
    return (
        <div className={Classes.card}>
            <div className={Classes.image}><img src={props.src} alt={'Card'}/></div>
            <div className={Classes.body}>
                <div className={Classes.heading}>{props.heading}</div>
                <div className={Classes.content}>{props.content}</div>
            </div>
        </div>
    );
};

export default InitiativeCard;