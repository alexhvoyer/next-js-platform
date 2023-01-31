import { getFeedData } from './feed.js';
import { profile } from './profile.js';
import { getNotificationData } from './notification.js';
import fs from 'fs/promises';
import path from 'path';

const data = {
    feed: getFeedData(),
    profile,
    notification: getNotificationData(),
};

console.log(data);
fs.writeFile(
    path.join("./db.json"),
    JSON.stringify(data)
);