import React from 'react';
import Classes from './Indices.css';
import BasicTabs from './Tabs/Tabs';

const indices = props => {

    return (
        <div id='Indices' className={Classes.body}>
            <h4 className={Classes.heading4}>Indices</h4>
            <BasicTabs />
        </div>
    );
}

export default indices;