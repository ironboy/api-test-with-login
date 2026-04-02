import getAllPets from './requests/get-all-pets.js';
import createPets from './requests/create-pets.js';
import readPets from './requests/read-pets.js';
import updatePets from './requests/update-pets.js';
import deletePets from './requests/delete-pets.js';
import loginAsAdmin from './requests/login-as-admin.js';
import logout from './requests/logout.js';
import notLoggedInCheck from './requests/not-logged-in-check.js';
import createPetNotAsAdmin from './requests/create-pet-not-as-admin.js';

export const name = 'PetTestLogin';

export function preRequest() {
  pm.variables.set('baseUrl', 'http://localhost:5001/api');
}

export const order = [
  getAllPets,
  loginAsAdmin,
  createPets,
  readPets,
  updatePets,
  readPets,
  deletePets,
  logout,
  notLoggedInCheck,
  createPetNotAsAdmin
];
