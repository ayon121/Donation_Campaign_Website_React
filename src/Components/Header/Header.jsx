
// import PropTypes from 'prop-types';

import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="">
            <div className="flex justify-between items-center py-10 max-w-7xl mx-auto ">
                <div>
                    <img className="w-3/4" src="https://i.ibb.co/PjCKwNr/Logo.png" alt="logo" />
                </div>
                <div className="flex gap-6 font-bold">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/donation">Donation</NavLink>
                    <NavLink to="/statistics">Statistics</NavLink>

                </div>
            </div>
        </div>
    );
};

Header.propTypes = {
    
};

export default Header;