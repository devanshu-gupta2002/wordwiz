import axios from "axios";

const baseUrl = "/home"

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

const getScore = async(userId) => {
  const config = {
    headers: { Authorization: token }
  }
  const response = await axios.get(`${baseUrl}/${userId}`, config)
  return response.data
}

const updateScore = async(userId, newData) => {
  const config = {
    headers: { Authorization: token }
  }
  const score = {
    score: newData
  }
  const response = await axios.put(`${baseUrl}/${userId}`, score, config)
  return response.data
}


const exported = {getAll, setToken, updateScore, getScore}
export default exported