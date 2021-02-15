import faker from 'faker';

export const data = Array(10).fill(0).map(() => ({
    uid: faker.random.uuid(),
    name: faker.name.findName(),
    jobTitle: faker.name.jobTitle(),
    email: faker.internet.email(),
    favColor: faker.internet.color(),
    profileImg: faker.image.sports()
}))