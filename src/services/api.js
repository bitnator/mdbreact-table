import axios from "axios";

const api = axios.create({
  baseURL: "https://8080-bitnator-gitpodtest-9asj49qo1oi.ws-us44.gitpod.io",
});

export default api;