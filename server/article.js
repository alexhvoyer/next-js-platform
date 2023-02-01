const { faker } = require('@faker-js/faker');

const getArticle = ({ id }) => ({
    id,
    title: faker.lorem.word({ length: { min: 2, max: 10 } }),
    headingImage: faker.image.image(),
    headingImageDesc: faker.lorem.lines(1),
    firstParagraph: faker.lorem.lines(),
    firstParagraphImage: faker.image.image(),
    firstParagraphImageDesc: faker.lorem.lines(1),
    secondParagraph: faker.lorem.lines(),
    secondParagraphImage: faker.image.image(),
    secondParagraphImageDesc: faker.lorem.lines(1),
});

const getArticles = feedData => feedData.map(getArticle);

module.exports = {
    getArticles
}