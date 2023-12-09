import React, { Component } from 'react';
import Classes from './MarketSummary.css';
import MarketTable from './MarketTable/marketTable';
import NavSection from '../../components/NavSection/NavSection';
import DataSlider from '../../components/DataSlider/DataSlider';
import Footer from '../../components/Footer/Footer'

class MarketSummary extends Component {

    render() {
        return (
            <React.Fragment>
                <div className={Classes.heading}>
                    <h4>Market Summary</h4>
                </div>
                {/* <DataSlider /> */}
                <div className={Classes.tables}>
                    <h4 className={Classes.heading4}>Main Board</h4>

                    <MarketTable headings={['NAME', 'IDCPS', 'OPENS', 'HIGHS', 'LOWS', 'CURRENTS', 'CHANGES', 'VOLUMES']}
                        caption={'MARKET SUMMARY DATA'}
                    />
                </div>
                <Footer style = {{top: '1610vh', position: 'absolute'}}/>
            </React.Fragment>
        );
    }
}

export default MarketSummary;
