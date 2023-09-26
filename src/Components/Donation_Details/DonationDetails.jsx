
// import PropTypes from 'prop-types';

import { useLoaderData, useParams } from "react-router-dom";
import Header from "../Header/Header";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { SaveDonation } from "../Utility/LocalStorage";

const DonationDetails = () => {
    const Donations = useLoaderData()
    const { id } = useParams()
    const idInt = parseInt(id)
    const currentDonation = Donations.find(donation => donation.id === idInt)
    

    const { title, description, picture, price, category_bg_color } = currentDonation

    const handleDontedDonation = () =>{
        const addedDonatedDonation = [];
        const DonatedItems = JSON.parse(localStorage.getItem("donations"));

        // if there is no data
        if (!DonatedItems) {
            addedDonatedDonation.push(currentDonation)
            localStorage.setItem("donations", JSON.stringify(addedDonatedDonation));
            toast("You have successfully donated");
        }
        else {
            const isExits = DonatedItems.find((Donation) => Donation.id == id);
            if(!isExits){
                addedDonatedDonation.push(...DonatedItems , currentDonation)
                localStorage.setItem("donations" , JSON.stringify(addedDonatedDonation))
                toast("You have successfully donated");
            }
            else {
                toast("You already donated it");
            }
        }
    }
    return (
        <div>
            <Header></Header>
            <div className="w-3/4 mx-auto">
                <div className="mb-10">
                    <div className="hero min-h-screen flex items-end rounded-2xl" style={{ backgroundImage: `url(${picture})` }}>
                        <div className="hero-overlay h-1/4 bg-opacity-60 rounded-b-2xl">
                             <button style={{background : category_bg_color}} className="btn my-10 mx-7 border-white text-white" onClick={handleDontedDonation}>Donate ${price}</button>
                        </div>
                    </div>

                </div>
                <h1 className=" text-2xl md:text-4xl font-bold mb-5">{title}</h1>
                <p className="mb-14">{description}</p>

            </div>
            <ToastContainer />
        </div>
    );
};

DonationDetails.propTypes = {

};

export default DonationDetails;