
// import PropTypes from 'prop-types';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Donation from '../donation/Donation';

const Home = () => {
    const donations = useLoaderData()
    console.log(donations)
    return (
        <div>
            <Banner></Banner>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mt-10 mb-16 px-4'>
                {
                    donations.map(donation => <Donation key={donation.id} donation={donation}></Donation>)
                }
            </div>
        </div>
    );
};

Home.propTypes = {
    
};

export default Home;