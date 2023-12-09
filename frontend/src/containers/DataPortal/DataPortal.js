import React, { Component } from 'react';

import NavSection from '../../components/NavSection/NavSection';
import DataSlider from '../../components/DataSlider/DataSlider';
import DataSummary from '../../components/DataSummary/DataSummary';
import Indices from '../../components/Indices/Indices';
import Performers from '../../components/Performers/Performers';
import MarketWatch from '../../components/MarketWatch/MarketWatch';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Footer from '../../components/Footer/Footer';




class DataPortal extends Component {
    render() {
        return (
            <Aux>
                {/* <DataSlider /> */}
                <Indices />
                <Performers />
                <MarketWatch />
                <Footer style={{top: '310vh', position: 'absolute'}}/>
            </Aux>
        );
    }

}

export default DataPortal;