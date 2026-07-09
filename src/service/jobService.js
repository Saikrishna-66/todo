import api from "./api";

export const createJob = (payload) => api.post("api/jobs/", payload);
export const listJobs = (params) => api.get("api/jobs/", { params });
export const getJob = (id) => api.get(`api/jobs/${id}/`);
export const updateJob = (id, payload) => api.put(`api/jobs/${id}/`, payload);
export const deleteJob = (id) => api.delete(`api/jobs/${id}/`);

export default {
  createJob,
  listJobs,
  getJob,
  updateJob,
  deleteJob,
};
