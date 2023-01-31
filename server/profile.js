import { faker } from '@faker-js/faker';

export const profile = {
    id: faker.datatype.number(),
    userName: faker.name.fullName(),
    email: faker.internet.email(),
    avatar: faker.internet.avatar(),
};