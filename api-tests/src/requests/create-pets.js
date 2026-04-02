import pets from '../data/pets.json' with { type: 'json' };

export { pets as data };

export default {
  method: 'POST',
  url: '{{baseUrl}}/pets',
  body: {
    name: '{{petName}}',
    species: '{{petSpecies}}'
  }
};

export function preRequest(pet) {
  pm.variables.set('petName', pet.name);
  pm.variables.set('petSpecies', pet.species);
}

export function postResponse(pet) {
  const messageOnPost = pm.response.json();

  pm.test('Status code is 200',
    () => pm.response.to.have.status(200)
  );

  // Note: This server responds to POST request
  // with a message with changes:1 and lastInsertRowId -> the id
  // that the newly created entity gets in the database

  pm.test('The response should include changes = 1', () =>
    pm.expect(messageOnPost.changes).to.equal(1)
  );

  pm.test('The response should include lastInsertRowId as number', () =>
    pm.expect(messageOnPost.lastInsertRowid).to.be.a('number')
  );

  // Add the id to the pet in the test data
  pet.id = messageOnPost.lastInsertRowid;
}
