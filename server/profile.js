const { faker } = require('@faker-js/faker');

const profile = {
    id: faker.datatype.number(),
    userName: faker.name.fullName(),
    email: faker.internet.email(),
    avatar: faker.internet.avatar(),
};

module.exports = {
    profile,
}