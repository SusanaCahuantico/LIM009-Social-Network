const firebasemock = require('firebase-mock');
const mockauth = new firebasemock.MockFirebase();
const mockfirestore = new firebasemock.MockFirestore();
mockfirestore.autoFlush();
mockauth.autoFlush();

global.firebase = firebasemock.MockFirebaseSdk(
  // use null if your code does not use RTDB
  path => (path ? mockdatabase.child(path) : null),
  () => mockauth,
  () => mockfirestore
);

import { NewUsers} from "../controller/firebase.js";

describe('inicio de sesión', () => {
  it('Debería poder iniciar sesión', () => {
    return NewUsers('susana@gmail.com', '123456')
    .then((user) => {
      expect(user.email).toBe('susana@gmail.com')
    })
  });
})