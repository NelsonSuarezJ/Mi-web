import httpClient from "./httpClient";

const END_POINT = '/api/vehiculo';

const getAll = () => httpClient.get(END_POINT);
const createVehiculo = (lista) => httpClient.post(END_POINT, lista);
const deleteVehiculo = (id) => httpClient.delete(END_POINT + '/' + id);
const updateVehiculo = (id, lista) => httpClient.put(END_POINT + '/' + id, lista);

export { getAll, createVehiculo, deleteVehiculo, updateVehiculo }
