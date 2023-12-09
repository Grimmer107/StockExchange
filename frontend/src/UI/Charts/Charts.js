import React from 'react';
import { ResponsiveContainer } from 'recharts';
import { AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area, ReferenceLine } from 'recharts';


const chart = props => {
    return (
        <div style={{ width: 500, height: 250 }}>
            <ResponsiveContainer width={550} height="100%">
                <AreaChart data={props.data}
                    margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <ReferenceLine x="Page C" stroke="green" label="Min PAGE" />
                    <ReferenceLine y={40000} label="Max" stroke="red" strokeDasharray="3 3" />
                    <Area type="" dataKey="volume" stroke="#8884d8" strokeWidth={2} fillOpacity={1} fill={"url(#colorUv)"} />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}

export default chart;