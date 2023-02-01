const { faker } = require('@faker-js/faker');

const getFeedData = () => {
    const getFeedItem = () => ({
        id: faker.datatype.number(),
        title: faker.lorem.word({ length: { min: 2, max: 10 } }),
        text: faker.lorem.lines(),
        image: faker.image.image(),
        rating: faker.datatype.number({ min: -100, max: 10000 }),
        commentsCount: faker.datatype.number(100),
    });
    return Array(100).fill(null).map(getFeedItem);
};

module.exports = {
    getFeedData,
}