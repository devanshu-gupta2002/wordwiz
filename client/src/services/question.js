import axios from "axios";

const baseUrl = "/api"

const getAll = () => {
  const request = axios.get(`${baseUrl}/question`)
  return request.then(response => response.data)
}

const exported = {getAll}
export default exported