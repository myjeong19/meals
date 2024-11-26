import { mocks } from '~mock/restaurant';

type Mocks = typeof mocks;
type Location = keyof Mocks;

export const getRestaurants = (location: Location = '37.7749295,-122.4194155') => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject('not found');
    }
    resolve(mock);
  });
};

getRestaurants()
  .then(result => console.log(result))
  .catch(error => console.error(error));
