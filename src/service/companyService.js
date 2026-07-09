import api from "./api";

export const createCompanyProfile = (payload) => api.post("api/companies/", payload);
export const getMyCompanyProfile = () => api.get("api/companies/me/");
export const updateCompanyProfile = (id, payload) => api.put(`api/companies/${id}/`, payload);

export default {
  createCompanyProfile,
  getMyCompanyProfile,
  updateCompanyProfile,
};
