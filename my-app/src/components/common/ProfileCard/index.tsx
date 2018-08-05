import * as React from 'react';
import ProfileLabel from "./ProfileLabel";
import ProfilePicture from "./ProfilePircture";

import './style.css';

const ProfileCard = () => {
    return (
        <div className="profile-card">
            <ProfileLabel/>
            <ProfilePicture/>
        </div>
    );
}


export default ProfileCard;
