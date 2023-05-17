import React from 'react'

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import "./chart.scss"

function Chart({ aspect, title }) {
    const data = [
        {
            name: 'January',
            Total: 3800,
        },
        {
            name: 'February',
            Total: 2700,
        },
        {
            name: 'March',
            Total: 3200,
        },
        {
            name: 'April',
            Total: 5200,
        },
        {
            name: 'May',
            Total: 2200,
        },
        {
            name: 'June',
            Total: 2980,
        },
    ];
    return (
        <div className='chart'>
            <div className="title">{title}</div>
            <ResponsiveContainer width="100%" aspect={aspect}>
                <AreaChart width={730} height={250} data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.9} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" color='grey' />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" className='chartGrid' />
                    <Tooltip />
                    <Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#colorTotal)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart