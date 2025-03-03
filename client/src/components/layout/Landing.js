import React from 'react'
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({isAuthenticated}) => {
    if(isAuthenticated){
      return  <Redirect to = '/dashboard'/>
    }
    return (
    <div>
<section className="landing landing-backGround">
    <div className="dark-overlay">
        <div className="landing-inner">
            <h1 className="x-large">Join to the best developer community</h1>
            <p className="lead">
                Create developer profile/portfolio, share posts and get help from
                            other developers
            </p>
            <div className="buttons">
                <Link className="btn btn-primary" to="/register">Join Now!</Link>
            </div>
        </div>
    </div>
</section>

<section className="elements">
    <div className="subSection">
        <div>
            <h2>
                No matter where are you from connections are always valuable</h2>
            <p>Although it’s not necessarily “all about who you know,” your business network can be a huge asset when you’re looking for a job, launching a business, in need of referrals, or searching for guidance.</p>
            <a href="register.html">Register here</a>
        </div>
        <img alt="network" src="https://www.faxburner.com/blog/wp-content/uploads/2017/11/business_network.jpg" height="100%" width="100%"></img>
    </div>
</section>


<section className="subSection">
    <div>
        <h2>What developers are saying</h2>
        <p>Quisque ut eros eget odio accumsan mattis nec ac neque. Integer ornare velit a dante scelerisque, ac porttitor ornare lorem purus auctor.</p>
    </div>
</section>

<section className="elements">
    <div className="subSection">
        <div className="card">
            <div className="card-Comment">
                <img alt="person1" src="https://res.cloudinary.com/innovadorez/image/upload/v1570496802/BuyerPlace/jbavrq9zugt1h5clqj3u.webp"></img>
                <span>
                    Jake
                </span>
            </div>
            <blockquote>
                <p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum</p>
            </blockquote>
        </div>
        <div className="card">
            <div className="card-Comment">
                <img alt="person2" src="https://res.cloudinary.com/innovadorez/image/upload/v1570496802/BuyerPlace/z1jzordfwrbz3atweae8.webp"></img>
                <span>Marcelyn</span>
            </div>
            <blockquote>
                <p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum</p>
            </blockquote>
        </div>
        <div className="card">
            <div className="card-Comment">
                <img alt="person3" src="https://res.cloudinary.com/innovadorez/image/upload/v1570496802/BuyerPlace/gwuafowfbw6gb7m0q7gw.webp"></img>
                <span>Lucy</span>
            </div>
            <blockquote>
                <p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum</p>
            </blockquote>
        </div>
    </div>
</section>
    </div>
    
    )
}

Landing.propTypes = {
    isAuthenticated: PropTypes.bool,

}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
}) 

export default connect(mapStateToProps)(Landing)
