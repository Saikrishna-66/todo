import api from "./api";

export const applyToJob = (payload) => api.post("api/applications/", payload);
export const listMyApplications = () => api.get("api/applications/my/");
export const listApplicationsForJob = (jobId) => api.get("api/applications/", { params: { job: jobId } });
export const updateApplication = (id, payload) => api.put(`api/applications/${id}/`, payload);

export default {
  applyToJob,
  listMyApplications,
  listApplicationsForJob,
  updateApplication,
};
