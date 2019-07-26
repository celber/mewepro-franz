const path = require('path');

module.exports = (Franz) => {
    const getNotifications = () => {
        const notifications = $('.header_inner .indicator').length;

        Franz.setBadge(!!notifications);
    }

    Franz.loop(getNotifications);

    Franz.injectCSS(path.join(__dirname, 'style.css'));

    Franz.onNotify(notification => {

        // if (typeof notification.title !== 'string') {
        //     notification.title = ((notification.title.props || {}).content || [])[0] || 'Messenger';
        // }
    
        return notification;
    
    });
}