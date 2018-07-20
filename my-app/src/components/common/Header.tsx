import * as React from 'react';

import Notification, { NotificationType } from "./Notification";
import ProfileCard from "./ProfileCard";

const Header = () => {
    return (
        <header>
            <h3>Header text goes here</h3>
            <ProfileCard />
            <Notification />
            <Notification notificationType={NotificationType.SUCCESS}/>
            <Notification notificationType={NotificationType.ERROR}/>
            <Notification notificationType={NotificationType.INFO}/>
            <Notification message={"Hello devs... you are doing a fine job!"}/>
        </header>
    );
}


export default Header;
