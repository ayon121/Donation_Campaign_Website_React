
import PropTypes from 'prop-types';

const GivenDonationCard = ({ DonatedItem }) => {
    console.log(DonatedItem)
    const { picture, category, card_bg_color, text_button_bg_color, category_bg_color, title, price } = DonatedItem
    return (
        <div style={{ background: card_bg_color, color: category_bg_color }} className="card card-side bg-base-100 shadow-xl">
            <figure className='w-2/5'><img className='h-full' src={picture} alt="card img" /></figure>
            <div className="card-body">
                <h2 style={{ background: text_button_bg_color }} className="py-3 px-2 rounded-xl w-1/3 md:w-2/4 lg:w-1/3 text-center">{category}</h2>
                <p className='text-2xl font-bold text-black'>{title}</p>
                <p className='text-xl font-bold'>${price}</p>
                <div className="card-actions justify-start">
                    <button style={{background : category_bg_color}}  className="btn text-white font-bold">View Details</button>
                </div>
            </div>
        </div>
    );
};

GivenDonationCard.propTypes = {
    DonatedItem: PropTypes.object
};

export default GivenDonationCard;