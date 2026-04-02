export default {
  method: 'GET',
  url: '{{baseUrl}}/pets'
};

export function postResponse() {
  pm.test('Status code is 200', () => pm.response.to.have.status(200));
  pm.test('Response is an array', () => pm.expect(pm.response.json()).to.be.an('array'));
}
