const path = require('path');

module.exports = (Franz) => {
    const getNotifications = () => {
        const notifications = $('.header_inner .indicator').not('.hidden').length;

        let messages = 0;
        
        $('.chats-list-element .indicator .number').each(function () {
            const num = Number($( this ).text());
            messages += num === NaN ? 1 : num;
        })

        Franz.setBadge(messages, !!notifications);
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