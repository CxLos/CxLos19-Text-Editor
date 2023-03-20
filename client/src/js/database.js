// importing
import { openDB } from 'idb';

// Initializing
const initdb = async () =>

  openDB('jate', 1, {

    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }

      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

  // Getting store
  async function getStore() {
    const todosDb = await openDB('jate', 1);
    const tx = todosDb.transaction('jate', 'readwrite');
    const store = tx.objectStore('jate');
    return store;  
  };

  // CRUD
  export const postDb = async (content) => {

    console.log('Post to the base');
    
    const store = await getStore();
    const request = store.add({ todo: content });
    const result = await request;
    
    console.log('🚀 - data saved to the database', result);
  };

  export const getDb = async () => {

    console.log('GET all from the database');

    const store = await getStore();
    const request = store.getAll();
    const result = await request;

    console.log('result.value', result);
    return result;
  };

  export const getOneDb = async (id) => {

    console.log('GET from the database');

    const store = await getStore();
    const request = store.get(id);
    const result = await request;

    console.log('result.value', result);
    return result;
  };
  export const deleteDb = async (id) => {

    console.log('DELETE from the database', id);

    const store = await getStore();
    const request = store.delete(id);
    const result = await request;

    console.log('result.value', result);
    return result;
  };

  export const putDb = async (id, content) => {

    console.log('PUT to the database');

    const store = await getStore();
    const request = store.put({ id: id, todo: content });
    const result = await request;

    console.log('🚀 - data saved to the database', result);
  };

// export const postDb = async (content) => {
//   console.log('Post to the base');
//   const todosDb = await openDB('todos', 1);
//   const tx = todosDb.transaction('todos', 'readwrite');
//   const store = tx.objectStore('todos');
//   const request = store.add({ todo: content });
//   const result = await request;
//   console.log('🚀 - data saved to the database', result);
// };

// export const getDb = async () => {
//   console.log('GET all from the database');
//   const todosDb = await openDB('todos', 1);
//   const tx = todosDb.transaction('todos', 'readonly');
//   const store = tx.objectStore('todos');
//   const request = store.getAll();
//   const result = await request;
//   console.log('result.value', result);
//   return result;
// };

// export const getOneDb = async (id) => {
//   console.log('GET from the database');
//   const todosDb = await openDB('todos', 1);
//   const tx = todosDb.transaction('todos', 'readonly');
//   const store = tx.objectStore('todos');
//   const request = store.get(id);
//   const result = await request;
//   console.log('result.value', result);
//   return result;
// };
// export const deleteDb = async (id) => {
//   console.log('DELETE from the database', id);
//   const todosDb = await openDB('todos', 1);
//   const tx = todosDb.transaction('todos', 'readwrite');
//   const store = tx.objectStore('todos');
//   const request = store.delete(id);
//   const result = await request;
//   console.log('result.value', result);
//   return result;
// };

// export const putDb = async (id, content) => {
//   console.log('PUT to the database');
//   const todosDb = await openDB('todos', 1);
//   const tx = todosDb.transaction('todos', 'readwrite');
//   const store = tx.objectStore('todos');
//   const request = store.put({ id: id, todo: content });
//   const result = await request;
//   console.log('🚀 - data saved to the database', result);
// };


initdb();
