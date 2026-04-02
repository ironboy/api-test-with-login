export default {
  method: 'GET',
  url: '{{baseUrl}}/login'
};

// Run this request after logging out! (Or before loggging in)
// GET /api/login checks if a user is logged in
// And status code should be 400 if not

export function postResponse() {
  const message = pm.response.json();

  pm.test('Status code is 400', () =>
    pm.response.to.have.status(400)
  );

  pm.test('Expect logout to be successful', () =>
    pm.expect(message).to.deep.equal(
      {
        error: 'Not logged in.'
      }
    )
  );

}