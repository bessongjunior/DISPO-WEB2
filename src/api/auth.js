import axios from "./index";

class AuthApi {
  static Login = (data) => {
    return axios.post(`${base}/login`, data);
  };

  static Register = (data) => {
    return axios.post(`${base}/register`, data);
  };

  static Logout = (data) => {
    return axios.post(`${base}/logout`, data, { headers: { Authorization: `${data.token}` } });
  };

  static Resetrequest = (data) => {
    return axios.post(`${base}/resetrequest`, data);
  };

  static Resettoken = (data) => {
    return axios.post(`${base}/resetpassword`, data);
  };
}

let base = "users";

export default AuthApi;