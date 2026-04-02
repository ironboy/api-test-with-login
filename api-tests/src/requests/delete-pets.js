import pets from '../data/pets.json' with { type: 'json' };

export { pets as data };

export default {
  method: 'DELETE',
  url: '{{baseUrl}}/pets/{{petId}}'
};

export function preRequest(pet) {
  pm.variables.set('petId', pet.id);
}

export function postResponse(pet) {
  pm.test('Status code is 200', () => pm.response.to.have.status(200));
}
