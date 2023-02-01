const { getFeedData } = require('./feed.js');
const { profile } = require('./profile.js');
const { getNotificationData } = require('./notification.js');
const { getArticles } = require('./article.js');
const fs = require('fs/promises');
const path = require('path');

const feed = getFeedData();
const data = {
    feed,
    profile,
    notification: getNotificationData(),
    article: getArticles(feed),
};

console.log(data);
fs.writeFile(
    path.join("./db.json"),
    JSON.stringify(data)
);