import axios from "axios";

const baseUrl = "http://localhost:3001/auth"

const login = async(credentials) => {
  try{
    const response = await axios.post(`${baseUrl}/login`, credentials)
    return response.data
  } catch (err) { 
    alert('Invalid Credentials');
    return ({error: err.message})
  }

}

const register = async(credentials) => {
  try {
    const response = await axios.post(`${baseUrl}/register`, credentials)
    return response.data
  } catch (err) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    if(credentials.password.length<4) {
      alert("Password is too short")
    } else if(credentials.username.length===0) {
      alert("Enter a valid User Name")
    } 
    else if(!emailPattern.test(credentials.email)){
      alert("Enter Valid Email")
    }
    else {
      alert("Email address already taken")
    }
    return({error: err.message})
  }
}


const exported = {login, register}
export default exported