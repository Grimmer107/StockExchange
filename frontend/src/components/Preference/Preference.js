import React, { useState, useEffect } from 'react';
import MultipleSelectChip from '../../UI/DropDown/DropDown';
import axios from 'axios';
import Classes from './Preference.css';


const Preference = () => {

    const [data, setData] = useState([]);
    

    useEffect(() => {
        axios.get('http://localhost:5000/api/marketData')
            .then(res => {
                const fetchData = res.data['marketData'].map((obj) => {
                    const subset = (({ name }) => ({ name }))(obj);
                    return String(subset["name"]);
                })

                setData(fetchData);
            })
            .catch(err => {
                console.log("The data is not avaliable!");
            })

    }, []);

    return (
        <div>
            <h4 className={Classes.heading}>User Preferences</h4>
            <form>
                <div className={Classes.body}>
                    <MultipleSelectChip datanames={data} />
                </div>
            </form>
        </div>
    );
};

export default Preference;