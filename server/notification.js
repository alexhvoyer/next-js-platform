const { faker } = require('@faker-js/faker');

const getNotificationData = () => {
    const getNotificationItem = () => ({
        id: faker.datatype.number(),
        title: faker.lorem.word({ length: { min: 2, max: 10 } }),
        text: faker.lorem.lines(),
        type: faker.helpers.arrayElement(['info', 'danger', 'warning'])
    });

    return Array(20).fill(null).map(getNotificationItem);
};

module.exports = {
    getNotificationData,
}