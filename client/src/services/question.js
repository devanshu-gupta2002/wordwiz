import axios from "axios";

const baseUrl = "http://localhost:3001/api"

let token = null

const setToken = newToken => {
  token = `Bearer ${newToken}`
}

const getAll = async() => {
  const config = {
    headers: { Authorization: token }
  }
  // console.log(authToken)
  const response = await axios.get(`${baseUrl}/question`, config)
  // console.log(response)
  return response.data
}


const exported = {getAll, setToken}
export default exported