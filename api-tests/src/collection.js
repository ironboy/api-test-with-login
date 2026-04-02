import getAllPets from './requests/get-all-pets.js';
import createPets from './requests/create-pets.js';
import readPets from './requests/read-pets.js';
import updatePets from './requests/update-pets.js';
import deletePets from './requests/delete-pets.js';

export const name = 'PetTest';

export function preRequest() {
  pm.variables.set('baseUrl', 'http://localhost:5001/api');
}

export const order = [
  getAllPets,
  createPets,
  readPets,
  updatePets,
  readPets,
  deletePets
];
