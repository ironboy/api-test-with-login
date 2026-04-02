// We have a user that is admin
// that we use for api-test
// to login - before routes that require admin rights
// email: api-test-user-admin@gmail.com, password: a1234567

export default {
  method: 'POST',
  url: '{{baseUrl}}/login',
  body: {
    email: '{{loginEmail}}',
    password: '{{loginPassword}}'
  }
};

export function preRequest() {
  pm.variables.set('loginEmail', 'api-test-user-admin@gmail.com');
  pm.variables.set('loginPassword', 'a1234567');
}

export function postResponse() {
  const loggedInUser = pm.response.json();

  // since we want to be able to recreate the test user
  // sometimes, which would change the id
  // delete the id from the response so we can use
  // a deep equal test without id
  delete loggedInUser.id;

  pm.test('Status code is 200', () =>
    pm.response.to.have.status(200)
  );

  pm.test('Expect response to be well-formed', () =>
    pm.expect(loggedInUser).to.deep.equal({
      email: 'api-test-user-admin@gmail.com',
      firstName: 'ApiTest',
      lastName: 'Admin',
      role: 'admin'
    })
  );

}
