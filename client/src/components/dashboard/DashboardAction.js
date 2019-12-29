import React, {Component} from 'react'
import {Link} from 'react-router-dom';

class DasboardAction extends Component {
    render() {
        return (
            <div class="dash-buttons">
                <Link to ='/edit-profile' class="btn btn-primary" >
                    <i class="fas fa-user-circle text-primary"></i>
                    Edit Profile
                </Link>
                <Link to ='/add-experience' class="btn btn-primary" >
                    <i class="fab fa-black-tie text-primary"></i>
                    Add Experience
                </Link>
                <Link to ='/add-education' class="btn btn-primary" >
                    <i class="fas fa-graduation-cap text-primary"></i>
                    Add Education
                </Link>
            </div>
        )
    }
}
export default DasboardAction
