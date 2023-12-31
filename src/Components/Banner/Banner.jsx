
import PropTypes from 'prop-types';

import Header from "../Header/Header";


const Banner = ({ setQuery }) => {
    

    
    

    return (
           <div>
               
                <div className="hero min-h-screen mb-9 relative -mt-6 " style={{backgroundImage: 'url(https://i.ibb.co/rmsSQd6/donation.jpg)'}}>
                    
                    <div className="hero-overlay bg-white bg-opacity-70"><Header></Header></div>
                     
                    
                    <div className="hero-content text-center text-neutral-content pt-40 md:pt-28">
                    
                        <div className="">
                        <h1 className="mb-5 text-5xl font-bold text-black">I Grow By Helping People In Need</h1><br />
                        <input onChange={(e)=> setQuery(e.target.value)} type="text" placeholder="Type here" className="input rounded-xl w-full max-w-md mr-2 text-black " />
                        <button className="btn bg-[#FF444A] text-white hover:text-black" >Search</button>
                        </div>
                    </div>
                </div>
           </div>
        
    );
};

Banner.propTypes = {
    setQuery : PropTypes.func
};

export default Banner;