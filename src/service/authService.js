  import api from "./api";

  // Signup request
  export const signup = async (payload) => {
    console.log("Signup payload:", payload);
    const response = await api.post("accounts/register/", payload);
    return response;
  };

  // Signin request (example: adjust endpoint to your backend)
  export const signin = async (payload) => {
    const response = await api.post("accounts/login/", payload);
    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
    }
    return response;
  };
