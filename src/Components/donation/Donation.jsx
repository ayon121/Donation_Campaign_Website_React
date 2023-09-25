
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Donation = ({ donation }) => {
    console.log(donation)
    const {id, picture, title, category, category_bg_color, card_bg_color, text_button_bg_color } = donation


    return (
        // <div style={{background : card_bg_color , color : category_bg_color}} className="card card-compact w-auto shadow-xl">
        //     <figure><img src={picture} alt="image" /></figure>
        //     <div className="card-body">
        //         <h2 style={{background : text_button_bg_color}} className="py-3 px-2 rounded-xl w-1/3 md:w-2/4 lg:w-1/3 text-center">{category}</h2>
        //         <p className='text-xl'>{title}</p>
        //     </div>
        // </div>
        <Link to={`donation_details/${id}`}>
            <div style={{ background: card_bg_color, color: category_bg_color }} className="card card-compact w-auto shadow-xl">
                <figure><img src={picture} alt="image" /></figure>
                <div className="card-body">
                    <h2 style={{ background: text_button_bg_color }} className="py-3 px-2 rounded-xl w-1/3 md:w-2/4 lg:w-1/3 text-center">{category}</h2>
                    <p className='text-xl'>{title}</p>
                </div>
            </div>
        </Link>
    );
};

Donation.propTypes = {
    donation: PropTypes.object
};

export default Donation;