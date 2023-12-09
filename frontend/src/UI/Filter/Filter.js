import React from 'react';
import Classes from './Filter.css';

const filter = props => {
    return <div className={Classes.body}>
        <h4>Filter By Columns</h4>
        <form>
            <div className={Classes.layout}>
                <div className={Classes.input}>
                    <label>SECTOR</label>
                    <select name='sector'>
                        <option>Select....</option>
                        <option>AUTOMOBILE ASSEMBLER</option>
                        <option>CHEMICAL</option>
                        <option>CEMENT</option>
                        <option>STEEL</option>
                        <option>FERTILIZER</option>
                    </select>
                </div>
                <div className={Classes.input}>
                    <label>INDEX</label>
                    <select name='index'>
                        <option>Select....</option>
                        <option>KSE100</option>
                        <option>ALLSHR</option>
                        <option>ACCI</option>
                        <option>UP9</option>
                        <option>NITPGI</option>
                    </select>
                </div>
            </div>
        </form>
    </div>
}

export default filter;