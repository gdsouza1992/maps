import * as React from 'react';

const USER_PLACEHOLDER_IMAGE = "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png";
const LOCATION_PLACEHOLDER_IMAGE = "http://nemanjakovacevic.net/wp-content/uploads/2013/07/placeholder.png";

interface IImageUrlMap {
    [key: string]: string
}

export const imageUrlMapper: IImageUrlMap = {
    location: LOCATION_PLACEHOLDER_IMAGE,
    user: USER_PLACEHOLDER_IMAGE
}

interface IPlaceHolderPropTypes {
    imageType: string
}


const PlaceHolder = (props: IPlaceHolderPropTypes) => {
    const { imageType } = props;
    return (
        <img src={imageUrlMapper[imageType]} alt="ProfileImage"/>
    );
}


export default PlaceHolder;
