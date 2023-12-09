import React, {useState, useEffect} from "react";
import Classes from './Info.css';
import axios from 'axios';

const info = props => {

    const [data, setData] = useState([{}]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/indicesData')
        .then(res => {
            setData(res.data[props.stock]);
        })
        .catch(err => {
            console.log("The data is not avaliable!");
        })

    },[]);

    let color = (String(data.Value).split(" "))[1] < 0 ? "red" : "green"

    return (
        <div>
            <div className={Classes.table}>
                <div className={Classes.headSection}>
                    <div className={Classes.section1}>
                        <h3>{(String(data.Value).split(" "))[0]}</h3>
                        <h6 style={{color: color}}>{(String(data.Value).split(" "))[1] + ' ' + (String(data.Value).split(" "))[2]}</h6>
                    </div>
                    <div className={Classes.section2}>
                        <h6>As of Mar 28, 2022 4:14 PM</h6>
                    </div>
                </div>
                <div className={Classes.section}>
                    <div className={Classes.section3}>
                        <h3>HIGH</h3>
                        <h4>{data.High}</h4>
                    </div>
                    <div className={Classes.section3}>
                        <h3>LOW</h3>
                        <h4>{data.Low}</h4>
                    </div>
                    <div className={Classes.section3}>
                        <h3>VOLUME</h3>
                        <h4>{data.Volume}</h4>
                    </div>
                </div>

                <div className={Classes.section}>
                    <div className={Classes.section4}>
                        <h3>DAY RANGE</h3>
                        <h5>{data.DayRange}</h5>
                    </div>
                    <div className={Classes.section4}>
                        <h3>52-WEEK RANGE</h3>
                        <h5>{data.FiftyTwoWeekRange}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default info;