import {useSelector} from "react-redux"

const HomePage = () => {

  const state = useSelector((state) => state.auth)
  return(
    
<div className="grid grid-cols-5 grid-rows-5 gap-4">
  {/* Header */}
    <div className="col-span-5 bg-blue-600 h-auto">
    
    </div>
    {/* LeaderBoard  */}
    <div className="row-span-4 col-start-5 row-start-2 h-auto min-h-min">
    <div className="h-full flex flex-col bg-gray-300">
  {/* <!-- Leaderboard Header --> */}
  <div className="bg-blue-500 text-white py-4 px-6">
    <h1 className="text-2xl font-semibold">Leaderboard</h1>
  </div>

  {/* <!-- Leaderboard Content --> */}
  <div className="flex-grow p-6 overflow-auto">
    {/* <!-- Leaderboard Rows --> */}
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      {/* <!-- Table Header --> */}
      <div className="grid grid-cols-4 bg-gray-200 font-semibold p-2">
        <div className="text-center ">Rank</div>
        <div>Name</div>
        <div>Score</div>
        <div>Date</div>
      </div>

      {/* <!-- Sample Leaderboard Rows */}
      <div className="grid grid-cols-4 p-2">
        <div className="text-center">1</div>
        <div>John Doe</div>
        <div>95</div>
        <div>2023-09-11</div>
      </div>
      <div className="grid grid-cols-4 p-2">
        <div className="text-center">2</div>
        <div>Jane Smith</div>
        <div>89</div>
        <div>2023-09-11</div>
      </div>

      
    </div>
    </div>
  </div>
    </div>
    {/*English Card    error here*/ }
    <div className="row-span-4 col-start-5 row-start-2">2
    </div>
    <div className="row-span-2 col-start-1 row-start-2">
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
              <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
          </a>
      </div>
    </div>
    {/*German Card*/}
    <div className="row-span-2 col-start-2 row-start-2">
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
              <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
          </a>
      </div>
    </div>
    {/*Spanish Card*/}
    <div className="row-span-2 col-start-3 row-start-2">
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
              <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
          </a>
      </div>
    </div>
    {/*Dutch Card*/}
    <div className="row-span-2 col-start-4 row-start-2">
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
              <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
          </a>
      </div>
    </div>
</div>
    
  )
}

export default HomePage