import pets from '../data/pets.json' with { type: 'json' };

export { pets as data };

export default {
  method: 'PUT',
  url: '{{baseUrl}}/pets/{{petId}}',
  body: {
    name: '{{petName}}'
  }
};

export function preRequest(pet) {
  // Change the name in our test data
  pet.name = pet.name + ' Jr.';

  // Set variables to be used in url and body in request
  pm.variables.set('petId', pet.id);
  pm.variables.set('petName', pet.name);
}

export function postResponse(pet) {

  const messageOnPut = pm.response.json();

  pm.test('Status code is 200', () =>
    pm.response.to.have.status(200)
  );

  pm.test('The response should include changes = 1', () =>
    pm.expect(messageOnPut.changes).to.equal(1)
  );
}
