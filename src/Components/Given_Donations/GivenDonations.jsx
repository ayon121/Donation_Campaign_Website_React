
// import PropTypes from 'prop-types';


import { useState } from "react";
import Header from "../Header/Header";
import GivenDonationCard from "./GivenDonationCard";



const GivenDonations = () => {


    const DonatedItems = JSON.parse(localStorage.getItem("donations"));



    const [datalength, setdatalength] = useState(4)

    
    return (
        <div>
            <Header></Header>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-28 mb-7 px-5">
                {
                    DonatedItems.slice(0, datalength).map(DonatedItem => <GivenDonationCard key={DonatedItem.id} DonatedItem={DonatedItem}></GivenDonationCard>)

                }
            </div>
            {DonatedItems.length > 4 && <div className={(datalength === DonatedItems.length ) && 'hidden'}>
                <div className="flex justify-center mb-9">
                    <button onClick={() => setdatalength(DonatedItems.length)} className="btn mt-6 px-4 py-3 border-black bg-base-200">Show All</button>
                </div>
            </div>}
        </div>
    );
};

GivenDonations.propTypes = {

};

export default GivenDonations;