// import {useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"
import { useEffect, useState } from "react"
import userServices from "../services/user.js"
import { setLogout } from "../reducers/authReducer"

const HomePage = () => {
  // const state = useSelector((state) => state.auth)
  // console.log(state)
  const navigate = useNavigate()
  const [username, setUsername] = useState("")
  const [users, setUsers] = useState([])
  
  useEffect(() => {
    const loggedUserData = window.localStorage.getItem("localSavedUserData")
    if(loggedUserData){
      const loggedIn = JSON.parse(loggedUserData)
      setUsername(loggedIn.user.username)
      userServices.setToken(loggedIn.token)
      userServices.getAll().then((response) => setUsers(response))
    }
    else {
      navigate("/")
    }
  }, [])
  // console.log(users)
  const sortedUsers = users.sort((a, b) => b.score - a.score)

  const logOut = () => {
    console.log("logOut")
    setLogout()
    window.localStorage.clear()
    navigate("/")
  }

  return(
    <div className="flex flex-col min-h-screen max-h-fit bg-[#566375] overflow-auto">
      {/* header  */}
      <div className=" flex h-40 bg-[#1f2937] w-full items-center justify-between ">
        <div className="font-extrabold font-mono text-[#ec4899] tracking-tight text-8xl bg-clip-text  mx-4">WordWiz!</div>
        <div className="flex items-center space-x-4 mr-4 flex-col">
      <span className="text-white">Welcome, <span className=" font-mono font-bold text-[#ec4899]">{username}</span></span>
      <div className="p-2">
      <button className="text-white border border-white rounded px-2 py-1 hover:bg-white hover:text-[#1f2937]"
        onClick={logOut}>Logout</button>
      </div>
    </div>
      </div>
      {/* cards  */}
      <div className="flex flex-row gap-4">
        <div className="basis-1/5 p-4">
        <div className="max-w-sm p-6 bg-gray-800 border-gray-700 rounded-lg shadow">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">English</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Ready to test your English grammar skills? Dive in and challenge yourself now!</p>
              <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#ec4899] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
                onClick={() => navigate("/question")}>
                  Start Test
                  <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
              </button>
          </div>
        </div>
        <div className="basis-1/5 p-4">
        <div className="max-w-sm p-6 bg-gray-800 border-gray-700 rounded-lg shadow">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Dutch</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Ready to test your Dutch grammar skills? Dive in and challenge yourself now!</p>
              <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#ec4899] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
                onClick={() => navigate("/question")}>
                  Start Test
                  <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
              </button>
          </div>
        </div>
        <div className="basis-1/5 p-4">
        <div className="max-w-sm p-6 bg-gray-800 border-gray-700 rounded-lg shadow">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Spanish</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Ready to test your Spanish grammar skills? Dive in and challenge yourself now!</p>
              <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#ec4899] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
                onClick={() => navigate("/question")}>
                  Start Test
                  <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
              </button>
          </div>
        </div>
        <div className="basis-1/5 p-4">
        <div className="max-w-sm p-6 bg-gray-800 border-gray-700 rounded-lg shadow">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">German</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Ready to test your German grammar skills? Dive in and challenge yourself now!</p>
              <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#ec4899] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
                onClick={() => navigate("/question")}>
                  Start Test
                  <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
              </button>
          </div>
        </div>
        {/* LeaderBoard  */}
        <div className="basis-1/5 bg-[#1f2937] h-screen">
        <div className="bg-[#ec4899] text-white py-4 px-6">
        <h1 className="text-2xl font-semibold">Leaderboard</h1>
      </div>

      {/* <!-- Leaderboard Content --> */}
      <div className="flex-grow p-6 overflow-auto">
        {/* <!-- Leaderboard Rows --> */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          {/* <!-- Table Header --> */}
          <div className="grid grid-cols-3 bg-[#566375] font-semibold p-2">
            <div className="text-center text-white">Rank</div>
            <div className="text-white">Name</div>
            <div className="text-white">Score</div>
          </div>

          {/* <!--Leaderboard Rows */}
          {sortedUsers.map((user, index) => (
        <div key={user._id} className="grid grid-cols-3 p-2 border-b">
          <div className="text-center">{index + 1}</div>
          <div>{user.username}</div>
          <div>{user.score}</div>
        </div>
      ))}
        </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage