import React, {Fragment,useEffect} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Spinner from '../layout/Spinner'
import Exprience from './Experience'
import Education from './Education'
import DashboardActions from './DashboardAction';
import {getCurrentProfile, deleteAccount} from '../../actions/profile';


const  Dashboard = ({
    getCurrentProfile, 
    deleteAccount,
    auth: {user}, 
    profile: {profile, loading}
}) => {
    useEffect( () => {
        getCurrentProfile();
    }, [getCurrentProfile]);


    return loading && profile === null ? <Spinner/>: <Fragment>
        <h1 className="large text-primary">Dashboard</h1>
        <p className="lead">
            <i className="fas fa-user"></i> Welcome {user && user.name }
        </p>
        {profile != null ?  (
        <Fragment>
            <DashboardActions/>
            <Exprience experience={profile.experience}/>
            <Education education={profile.education}/>
            <div className="my-2">
                <button className="btn btn-danger" onClick={() => deleteAccount()}>
                    <i className="fa fa-user-minus"></i>
                    Delete my Account
                </button>
            </div>
        </Fragment>
        ) : (
            <>
        <Fragment> You have not setup</Fragment>
        <Link to="/create/profile" className="btn btn-primary my-1">
            Create Profile
        </Link>
        </>
        )}
    </Fragment> ;
}

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    deleteAccount: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
})

export default connect(
    mapStateToProps, 
    {getCurrentProfile,deleteAccount}
)(Dashboard);

