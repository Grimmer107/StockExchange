import React from 'react';
import Classes from './MarketWatch.css';
import BasicTabs from '../../UI/Tabs/Tabs';

const marketWatch = props => {
    return (
        <div>
            <div className={Classes.body} style={{backgroundColor: props.bgcolor}}> 
            <h4 className={Classes.heading4}>Market Watch</h4>
            <BasicTabs/>
            </div>
        </div>

    );
}

export default marketWatch;