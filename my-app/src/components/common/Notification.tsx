import * as React from 'react';

export enum NotificationType {
    ERROR=0,
    SUCCESS=1,
    WARNING=2,
    INFO=3
}

interface INotificationProps {
    message?: string,
    notificationType?: NotificationType
}

const Notification: React.SFC<INotificationProps> = (props) => {
    const { message, notificationType } = props;
    let notificationClass = '';
    let notificationDefaultMsg = '';
    switch(notificationType) {
        case NotificationType.ERROR:
            notificationClass = '--error';
            notificationDefaultMsg = 'An error occured while performing an operation';
            break;
        case NotificationType.SUCCESS:
            notificationClass = '--success';
            notificationDefaultMsg = 'Success!!';
            break;
        case NotificationType.WARNING:
            notificationClass = '--warning';
            notificationDefaultMsg = 'Something doesn\'t seems right.';
            break;
        default:
            notificationClass = '--info';
            notificationDefaultMsg = 'This is a default info message :)';
            break;
    }
    return (
        <div className={`notification${notificationClass}`}>
            <p>{message ? message : notificationDefaultMsg}</p>
        </div>
    );
}

Notification.defaultProps = {
    message: '',
    notificationType: NotificationType.INFO
}
export default Notification;
