import React, {useState, Fragment, useEffect} from 'react';
import {Link, withRouter} from  'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {createProfile, getCurrentProfile} from '../../actions/profile';

const EditProfile = ({
    profile: {profile, loading},
    createProfile, 
    getCurrentProfile,
     history}) => {

    const [formData, setFormData] = useState({
        company: '',
        website: '',
        location: '',
        status: '',
        skills: '',
        githubusername: '',
        bio: '',
        twitter: '',
        facebook: '',
        linkedin: '',
        youtube: '',
        instagram: ''

    });

    const [displaySocialInputs, toggleSocialInputs] = useState(false);

    useEffect( () => {
        getCurrentProfile();
        setFormData({
            company: loading || !profile.company ? '' : profile.company,
            website: loading || !profile.website ? '' : profile.website,
            location: loading || !profile.location ? '' : profile.location,
            status: loading || !profile.status ? '' : profile.status,
            skills: loading || !profile.skills ? '' : profile.skills.join(','),
            githubusername:
              loading || !profile.githubusername ? '' : profile.githubusername,
            bio: loading || !profile.bio ? '' : profile.bio,
            twitter: loading || !profile.social ? '' : profile.social.twitter,
            facebook: loading || !profile.social ? '' : profile.social.facebook,
            linkedin: loading || !profile.social ? '' : profile.social.linkedin,
            youtube: loading || !profile.social ? '' : profile.social.youtube,
            instagram: loading || !profile.social ? '' : profile.social.instagram
          });
    } , [loading, getCurrentProfile]) 
    const {
        company,
        website,
        location,
        status,
        skills,
        githubusername,
        bio,
        twitter,
        facebook,
        linkedin,
        youtube,
        instagram
    } = formData

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

    const onSubmit = e => {
        e.preventDefault();
        createProfile(formData, history, true);
    }

    return (
        <Fragment>
            <h1 class="large text-primary">
                Create Your Profile
            </h1>
            <p class="lead">
                <i class="fas fa-user"></i>
                Let's get some information to make your
                        profile stand out
            </p>
            <small>* = required fields</small>
            <form className="form" onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <select name="status" value={status} onChange={e => onChange(e)}>
                        <option value="0">* Select Professional Status</option>
                        <option value="Developer">Developer</option>
                        <option value="Junior Developer">Junior Developer</option>
                        <option value="Senior Developer">Senior Developer</option>
                        <option value="Manager">Manager</option>
                        <option value="Student or Learning">Student or Learning</option>
                        <option value="Instructor">Instructor or Teacher</option>
                        <option value="Intern">Intern</option>
                        <option value="Other">Other</option>
                    </select>
                    <small className="form-text">Give us an idea of where you are at in your career</small>
                </div>
                <div className="form-group">
                    <input name="company" value={company} onChange={e => onChange(e)} placeholder="Company" type="text"/>
                    <small className="form-text">Could be your own company or one you work for</small>
                </div>
                <div className="form-group">
                    <input name="website" value={website} onChange={e => onChange(e)} placeholder="Website" type="text"/>
                    <small className="form-text">Could be your own or a company website</small>
                </div>
                <div className="form-group">
                    <input name="location" value={location} onChange={e => onChange(e)} placeholder="Location" type="text"/>
                    <small className="form-text">City & state suggested (eg. Boston, MA)</small>
                </div>
                <div className="form-group">
                    <input name="skills" value={skills} onChange={e => onChange(e)} placeholder="* Skills" type="text"/>
                    <small className="form-text">Please use comma separated values (eg.
                                                            HTML,CSS,JavaScript,PHP)</small>
                </div>
                <div className="form-group">
                    <input name="githubusername" value={githubusername} onChange={e => onChange(e)} placeholder="Github Username" type="text"/>
                    <small className="form-text">If you want your latest repos and a Github link, include your
                                                            username</small>
                </div>
                <div className="form-group">
                    <textarea name="bio" value={bio} onChange={e => onChange(e)} placeholder="A short bio of yourself"></textarea>
                    <small className="form-text">Tell us a little about yourself</small>
                </div>

                <div className="my-2">
                    <button onClick={
                            () => toggleSocialInputs(!displaySocialInputs)
                        }
                        type="button"
                        className="anchor anchor-main">
                        Add Social Network Links
                    </button>
                    <span>Optional</span>
                </div>
                {
                displaySocialInputs && <Fragment>
                    <div className="form-group social-input">
                        <i className="fab fa-twitter fa-2x"></i>
                        <input name="twitter" value={twitter} onChange={e => onChange(e)} placeholder="Twitter URL" type="text"/>
                    </div>

                    <div className="form-group social-input">
                        <i className="fab fa-facebook fa-2x"></i>
                        <input name="facebook" value={facebook} onChange={e => onChange(e)} placeholder="Facebook URL" type="text"/>
                    </div>

                    <div className="form-group social-input">
                        <i className="fab fa-youtube fa-2x"></i>
                        <input name="youtube" value={youtube} onChange={e => onChange(e)} placeholder="YouTube URL" type="text"/>
                    </div>

                    <div className="form-group social-input">
                        <i className="fab fa-linkedin fa-2x"></i>
                        <input name="linkedin" value={linkedin} onChange={e => onChange(e)} placeholder="Linkedin URL" type="text"/>
                    </div>

                    <div className="form-group social-input">
                        <i className="fab fa-instagram fa-2x"></i>
                        <input name="instagram" value={instagram} onChange={e => onChange(e)} placeholder="Instagram URL" type="text"/>
                    </div>
                </Fragment>
            }

                <input className="btn btn-primary my-1" type="submit"/>
                
                <Link  to='/dashboard'>
                 Go Back
                </Link>
            </form>
        </Fragment>
    )
}

EditProfile.propTypes = {
    createProfile: PropTypes.func.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
}

const mapStateToprops = state => ({
    profile: state.profile
})

export default connect(
    mapStateToprops,
    {createProfile, getCurrentProfile})
    (withRouter (EditProfile));

