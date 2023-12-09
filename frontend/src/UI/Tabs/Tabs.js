import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Classes from './Tabs.css'
import Filter from '../Filter/Filter';
import DataGridDemo from '../../components/DataGram/Datagram';

function TabPanel(props) {
    const { children, value, index } = props;

    return (
        <div>
            {value === index && (
                <div>
                    {children}
                </div>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

const BasicTabs = (props) => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={Classes.body}>
            <div>
                <Tabs value={value} onChange={handleChange} >
                    <Tab label="REGULAR MARKET" />
                </Tabs>
            </div>
            <div>
                <Filter />
            </div>
            <div className={Classes.tabContent}>
                <TabPanel value={value} index={0}>
                    <div className={Classes.datagrid}>
                        <DataGridDemo />
                    </div>
                </TabPanel>
            </div>
        </div>
    );
}

export default BasicTabs;