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

import { dataPost, getPost, deletePost} from "../src/controller/firebase.js";

describe('lista de notas', () => {
it('Debería porder agregar una nota', (done) => {
return dataPost('preparar la pildora')
.then(() => getPost(
(data) => {
const result = data.find((note) => note.title === 'preparar la pildora');
expect(result.title).toBe('preparar la pildora');
done()
}
))
});
it('Debería poder eliminar una nota', (done) => {
return deletePost('abc')
.then(() => getPost(
(data) => {
const result = data.find((note) => note.id === 'abc');
expect(result).toBe(undefined);
done()
}
))
})
})

