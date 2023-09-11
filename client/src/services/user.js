import axios from "axios";

const baseUrl = "http://localhost:3001/home"

let token = null

const setToken = newToken => {
  token = `Bearer ${newToken}`
}

const getAll = async() => {
  const config = {
    headers: { Authorization: token }
  }
  const response = await axios.get(`${baseUrl}`, config)
  return response.data
}

const updateScore = async(userId, newData) => {
  const config = {
    headers: { Authorization: token }
  }
  const score = {
    score: newData
  }
  const response = await axios.post(`${baseUrl}/${userId}`, config, score)
  return response.data
}


const exported = {getAll, setToken, updateScore}
export default exported