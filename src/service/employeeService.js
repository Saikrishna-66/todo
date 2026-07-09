import api from "./api";

export const createEmployeeProfile = (payload) => api.post("api/employees/", payload);
export const getMyEmployeeProfile = () => api.get("api/employees/me/");
export const updateEmployeeProfile = (id, payload) => api.put(`api/employees/${id}/`, payload);

export default {
  createEmployeeProfile,
  getMyEmployeeProfile,
  updateEmployeeProfile,
};
