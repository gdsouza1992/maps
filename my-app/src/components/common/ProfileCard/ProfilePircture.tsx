import * as React from 'react';
import PlaceHolder from "../PlaceHolder";

const ProfilePicture = () => {
    const imageSrc = null;
    return imageSrc ? <img src={imageSrc} alt="ProfileImage"/> : <PlaceHolder imageType={"user"} />
}


export default ProfilePicture;
