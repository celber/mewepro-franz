const path = require('path');

module.exports = (Franz) => {
    const getNotifications = () => {
        const notifications = Array.from(document.querySelectorAll('.main-header_inner .m-indicator')).length;

        let messages = 0;
        
        Array.from(document.querySelectorAll('.chats-list-element .m-indicator .number')).forEach(function (el) {
            const num = Number(el.innerHTML);
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