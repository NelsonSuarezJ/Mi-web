import httpClient from "./httpClient";

const END_POINT = '/api/vehiculo';

const getAllV = () => httpClient.get(END_POINT);
const createVehiculo = (lista) => httpClient.post(END_POINT, lista);
const deleteVehiculo = (id) => httpClient.delete(END_POINT + '/' + id);
const updateVehiculo = (id, lista) => httpClient.put(END_POINT + '/' + id, lista);

export { getAllV, createVehiculo, deleteVehiculo, updateVehiculo }
