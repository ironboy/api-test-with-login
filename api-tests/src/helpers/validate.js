export function validatePet(pet) {
  pm.expect(pet.name).to.be.a('string');
  pm.expect(pet.species).to.be.a('string');
}
