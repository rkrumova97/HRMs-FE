import { PersonModel } from './person.model';

describe('Person', () => {
  it('should create an instance', () => {
    expect(new PersonModel()).toBeTruthy();
  });
});
