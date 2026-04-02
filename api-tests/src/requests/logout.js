export default {
  method: 'DELETE',
  url: '{{baseUrl}}/login'
};

export function postResponse() {
  const logoutMessage = pm.response.json();

  pm.test('Status code is 200', () =>
    pm.response.to.have.status(200)
  );

  pm.test('Expect logout to be successful', () =>
    pm.expect(logoutMessage).to.deep.equal(
      {
        success: 'Logged out successfully.'
      }
    )
  );

}