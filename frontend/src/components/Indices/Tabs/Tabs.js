import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Classes from '../Indices.css';
import Chart from '../../../UI/Charts/Charts';
import Info from '../../../UI/InfoSection/Info';

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

const data = [
    {
        "name": "9:00",
        "volume": 40000,
        // "pv": 2400,
        // "amt": 2400
    },
    {
        "name": "9:30",
        "volume": 40200,
        // "pv": 2400,
        // "amt": 2400
    },
    {
        "name": "10:00",
        "volume": 26999,
        // "pv": 1398,
        // "amt": 2210
    },
    {
        "name": "10:30",
        "volume": 26773,
        // "pv": 1398,
        // "amt": 2210
    },
    {
        "name": "11:00",
        "volume": 33400,
        // "pv": 9800,
        // "amt": 2290
    },
    {
        "name": "11:30",
        "volume": 38400,
        // "pv": 9800,
        // "amt": 2290
    },
    {
        "name": "12:00",
        "volume": 34800,
        // "pv": 3908,
        // "amt": 2000
    },
    {
        "name": "12:30",
        "volume": 33800,
        // "pv": 3908,
        // "amt": 2000
    },
    {
        "name": "13:00",
        "volume": 38900,
        // "pv": 4800,
        // "amt": 2181
    },
    {
        "name": "13:30",
        "volume": 39900,
        // "pv": 4800,
        // "amt": 2181
    },
    {
        "name": "14:00",
        "volume": 23900,
        // "pv": 3800,
        // "amt": 2500
    },
    {
        "name": "14:30",
        "volume": 23500,
        // "pv": 3800,
        // "amt": 2500
    },
    {
        "name": "15:00",
        "volume": 22900,
        // "pv": 4300,
        // "amt": 2100
    },
    {
        "name": "15:30",
        "volume": 22800,
        // "pv": 4300,
        // "amt": 2100
    },
    {
        "name": "16:00",
        "volume": 34900,
    }
]

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

    // TabIndicatorProps={{style: {background:'green'}}}
    return (
        <div className={Classes.tabHead}>
            <div className={Classes.tabContenthead}>
                <Tabs value={value} onChange={handleChange} sx={{ borderBottom: 2, borderColor: 'divider' }}>
                    <Tab label="KSE100" />
                    <Tab label="ALLSHR" />
                    <Tab label="KSE30" />
                    <Tab label="KMI30" />
                </Tabs>
            </div>
            <div className={Classes.tabContent}>
                <TabPanel value={value} index={0}>
                    <div className={Classes.indicesBody}>
                        <div className={Classes.info}>
                            <Info stock={'KSE100'} />
                        </div>
                        <div className={Classes.charts}>
                            <Chart data={data} />
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <div className={Classes.indicesBody}>
                        <div className={Classes.info}>
                            <Info stock={'ALLSHR'} />
                        </div>
                        <div className={Classes.charts}>
                            <Chart data={data} />
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <div className={Classes.indicesBody}>
                        <div className={Classes.info}>
                            <Info stock={'KSE30'} />
                        </div>
                        <div className={Classes.charts}>
                            <Chart data={data} />
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <div className={Classes.indicesBody}>
                        <div className={Classes.info}>
                            <Info stock={'KMI30'} />
                        </div>
                        <div className={Classes.charts}>
                            <Chart data={data} />
                        </div>
                    </div>
                </TabPanel>
            </div>
        </div>
    );
}

export default BasicTabs;