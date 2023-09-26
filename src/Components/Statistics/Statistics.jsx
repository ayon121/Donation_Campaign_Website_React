
import { useLoaderData } from 'react-router-dom';

import Header from '../Header/Header';
import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';


const Statistics = () => {

    let TotalDonationPrice = 0
    let TotalDonated = 0
    // const [TotalDonation , SetTotalDonation] = useState(0)
    const Donations = useLoaderData()
    Donations.forEach(donation => {
        if (donation.price) {
            TotalDonationPrice += parseFloat(donation.price);
        }
    });

    const DonatedItems = JSON.parse(localStorage.getItem("donations"));
    if (DonatedItems) {
        DonatedItems.forEach(item => {
            if (item.price) {
                TotalDonated += parseFloat(item.price)
            }
        })
    }


    const data = [
        { name: 'Total Donation Price', value: TotalDonationPrice },
        { name: 'Total Donated Price', value: TotalDonated }
    ];

    const COLORS = ["#FF444A", "#82ca9d"];
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <div className='mb-24'>
            <Header></Header>
            <div style={{ width: '100%', height: 100 }}>
                <ResponsiveContainer width="100%" height={600}>
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="30%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={160}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
                <div className='flex flex-col md:flex-row justify-center items-center gap-3'>
                    <div className='flex items-center gap-2 '>
                        <h1 className='text-lg font-bold'>Your Donation</h1>
                        <div className='h-3 pt-1 w-44 bg-[#00C49F]'></div>
                    </div>
                    <div className='flex items-center gap-2 '>
                        <h1 className='text-lg font-bold' >Total Donation</h1>
                        <div className='h-3 pt-1 w-44 bg-[#FF444A]'></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Statistics.propTypes = {

};

export default Statistics;