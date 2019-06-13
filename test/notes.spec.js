import MockFirebase from 'mock-cloud-firestore';

const fixtureData = {
  __collection__: {
    notes: {
      __doc__: {
        abc1d: {
          title: 'terminar la pildora',
          complete: false
        },
      }
    }
  }
}

global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });

import { dataPost, getPost, deletePost, editarPost} from "../src/controller/firebase.js";

describe('lista de notas', () => {
  it('Debería porder agregar una nota', (done) => {
    return dataPost('preparar la pildora')
      .then(() => getPost(
        (data) => {
          const result = data.find((note) => note.nota === 'preparar la pildora');
          expect(result.nota).toBe('preparar la pildora');
          done()
        }
      ))
  });
  it('Debería poder eliminar una nota', (done) => {
    return deletePost('abc1d')
      .then(() => getPost(
        (data) => {
          const result = data.find((note) => note.id === 'abc1d');
          expect(result).toBe(undefined);
          done()
        }
      ))
  });
  
  it('Debería poder editar una nota', (done) => {
    return editarPost('terminar la pildora')
    .then(() => getPost(
      (data) => {
        const result = data.find((note) => note.nota === 'terminar la pildora');
        expect(result.nota).toBe('terminar la pildora');
        donde()
      }
    ))
  });
  
})

