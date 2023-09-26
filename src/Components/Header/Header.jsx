
// import PropTypes from 'prop-types';

import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="">
            <div className="flex flex-col md:flex-row px-6 text-center justify-between items-center py-10 max-w-7xl mx-auto ">
                <div>
                    <img className="w-3/4" src="https://i.ibb.co/PjCKwNr/Logo.png" alt="logo" />
                </div>
                <div className="flex gap-6 font-bold  pt-4 md:pt-0">
                    <NavLink to="/" className={({ isActive }) => isActive ? 'underline font-bold text-[#FF444A]' : 'bg-transparent'}>Home</NavLink>
                    <NavLink to="/donation" className={({ isActive }) => isActive ? 'underline font-bold text-[#FF444A]' : 'bg-transparent'}>Donation</NavLink>
                    <NavLink to="/statistics" className={({ isActive }) => isActive ? 'underline font-bold text-[#FF444A]' : 'bg-transparent'}>Statistics</NavLink>

                </div>
            </div>
        </div>
    );
};

Header.propTypes = {
    
};

export default Header;