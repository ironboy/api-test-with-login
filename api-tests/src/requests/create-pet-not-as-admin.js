export default {
  method: 'POST',
  url: '{{baseUrl}}/pets',
  body: {
    name: '{{petName}}',
    species: '{{petSpecies}}'
  }
};

export function preRequest() {
  pm.variables.set('petName', 'Garfield');
  pm.variables.set('petSpecies', 'cat');
}

export function postResponse() {
  const messageOnPost = pm.response.json();

  pm.test('Status code is 405',
    () => pm.response.to.have.status(405)
  );

  pm.test('Correct error message - Not allowed', () =>
    pm.expect(messageOnPost).to.deep.equal({
      error: 'Not allowed.'
    })
  );
}