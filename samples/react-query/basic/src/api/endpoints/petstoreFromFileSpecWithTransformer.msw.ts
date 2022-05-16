/**
 * Generated by orval v6.7.1 🍺
 * Do not edit manually.
 * Swagger Petstore
 * OpenAPI spec version: 1.0.0
 */
import { rest } from 'msw';
import { faker } from '@faker-js/faker';

export const getListPetsMock = () =>
  [...Array(faker.datatype.number({ min: 1, max: 10 }))].map(() => ({
    '@id': faker.random.arrayElement([faker.random.word(), undefined]),
    id: (() => faker.datatype.number({ min: 1, max: 99999 }))(),
    name: (() => faker.name.lastName())(),
    tag: (() => faker.name.lastName())(),
    email: faker.random.arrayElement([faker.internet.email(), undefined]),
    callingCode: faker.random.arrayElement([
      faker.random.arrayElement(['+33', '+420', '+33']),
      undefined,
    ]),
    country: faker.random.arrayElement([
      faker.random.arrayElement(["People's Republic of China", 'Uruguay']),
      undefined,
    ]),
  }));

export const getCreatePetsMock = () => ({
  '@id': faker.random.arrayElement([faker.random.word(), undefined]),
  id: faker.datatype.number(),
  name: (() => faker.name.lastName())(),
  tag: (() => faker.name.lastName())(),
  email: faker.random.arrayElement([faker.internet.email(), undefined]),
  callingCode: faker.random.arrayElement([
    faker.random.arrayElement(['+33', '+420', '+33']),
    undefined,
  ]),
  country: faker.random.arrayElement([
    faker.random.arrayElement(["People's Republic of China", 'Uruguay']),
    undefined,
  ]),
});

export const getShowPetByIdMock = () =>
  (() => ({
    id: faker.datatype.number({ min: 1, max: 99 }),
    name: faker.name.firstName(),
    tag: faker.helpers.randomize([faker.random.word(), void 0]),
  }))();

export const getSwaggerPetstoreMSW = () => [
  rest.get('*/v:version/pets', (_req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200, 'Mocked status'),
      ctx.json(getListPetsMock()),
    );
  }),
  rest.post('*/v:version/pets', (_req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200, 'Mocked status'),
      ctx.json(getCreatePetsMock()),
    );
  }),
  rest.get('*/v:version/pets/:petId', (_req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200, 'Mocked status'),
      ctx.json(getShowPetByIdMock()),
    );
  }),
];
