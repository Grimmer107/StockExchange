import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Classes from './marketTable.css';

const marketTable = (props) => {

    const [data, setData] = useState([{}]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/marketData')
        .then(res => {
            const fetchData = res.data['marketData'].map((obj) => {
                const subset = (({ name, ldcp, open, high, low, current, change, volume }) => ({ name, ldcp, open, high, low, current, change, volume }))(obj);
                return subset;
            })

            setData(fetchData);
        })
        .catch(err => {
            console.log("The data is not avaliable!");
        })

    },[]);
    
    return (
        <div className={Classes.body}>
            <table cellSpacing={0}>

                <caption className={Classes.caption}>{props.caption}</caption>

                <thead>
                    <tr className={Classes.heading}>
                        {props.headings.map(element => {
                            return <th key={element} className={Classes.headingCell}>{element}</th>
                        })}
                    </tr>
                </thead>

                <tbody>
                    {data.length !== 0 ? data.map((element, key) => {
                        return <tr key={element+key} className={Classes.rows}> {
                            Object.keys(element).map((key, index) => {
                                return <td key={element[index]+key} className={Classes.rowCell}>{element[key]}</td>
                            })
                        }</tr>
                    }): <tr style={{"text-align": "center"}}><td colSpan={"8"} style={{"height": "10em"}}>The data is not available!</td></tr>}
                </tbody>

            </table>
        </div>
    );
};

export default marketTable;