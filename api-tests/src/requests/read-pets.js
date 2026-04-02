import pets from '../data/pets.json' with { type: 'json' };
import { validatePet } from '../helpers/validate.js';

export { pets as data };

export default {
  method: 'GET',
  url: '{{baseUrl}}/pets/{{petId}}'
};

export function preRequest(pet) {
  pm.variables.set('petId', pet.id);
}

export function postResponse(pet) {
  const petFromDb = pm.response.json();

  pm.test('Status code is 200', () =>
    pm.response.to.have.status(200)
  );

  pm.test('Pet has valid fields', () =>
    validatePet(petFromDb)
  );

  pm.test('Db data matches expected', () =>
    pm.expect(petFromDb).to.deep.equal({ ...pet, userId: null })
  );
}
