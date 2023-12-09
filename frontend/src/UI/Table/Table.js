import React from "react";
import Classes from './Table.css';

const table = (props) => {

    return (
        <div className={Classes.body}>
            <table cellSpacing={0}>

                <caption className={Classes.caption}>{props.caption}</caption>

                <thead>
                    <tr className={Classes.heading}>
                        {props.headings.map(element => {
                            return <th className={Classes.headingCell}>{element}</th>
                        })}
                    </tr>
                </thead>

                <tbody>
                    {props.data.map(element => {
                        return <tr key={element} className={Classes.rows}> {
                            Object.keys(element).map((key, index) => {
                                return <td key={index+key} className={Classes.rowCell}>{element[key]}</td>
                            })
                        }
                        </tr>
                    })}
                </tbody>

            </table>
        </div>
    );
}

export default table;