import httpClient from './httpClient';

const END_POINT = '/api/preoperacional';

const getAll = () => httpClient.get(END_POINT);
const createListaPre = (lista) => httpClient.post(END_POINT, lista);
const deleteListaPre = (id) => httpClient.delete(END_POINT + '/' + id)
const updateListaPre = (id, lista) => httpClient.put(END_POINT + '/' + id, lista)

export { getAll, createListaPre, deleteListaPre, updateListaPre }
