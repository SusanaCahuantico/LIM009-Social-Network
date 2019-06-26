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

import { NewUsers, LogGoogle, LogUsers, signOut} from "../src/controller/firebase.js";

describe('Nuevo usuario', () => {
  it('Debería poder iniciar sesión', () => {
    return NewUsers('susana@gmail.com', '123456')
    .then((user) => {
      expect(user.email).toBe('susana@gmail.com')
    })
  });
})

describe('Inicio sesión', () => {
  it('Debería poder iniciar sesión', () => {
    return LogUsers('danieladelcarmen168@hotmail.com', '123456')
    .then((user) => {
      expect(user.email).toBe('danieladelcarmen168@hotmail.com')
    })
  });
})
/*
describe('Facebook', () => {
  it('Debería poder iniciar sesion a Facebook', () => {
    return LogFacebook()
      .then((user) => {
        expect(user.isAnonymous).toBe(false)
      })
  });
})
*/
describe('Google', () => {
  it('Debería poder iniciar sesion a Google', () => {
    return LogGoogle()
      .then((user) => {
        expect(user.isAnonymous).toBe(false)
      })
  });
})

describe('Cerrar sesión', () => {
  it('Debería cerrar sesion', () => {
    return signOut()
      .then((user) => {
        expect(user).toBe(undefined)
      })
  });
})