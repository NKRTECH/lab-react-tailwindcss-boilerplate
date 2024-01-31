import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav className='flex items-center justify-between flex-wrap p-5 bg-gradient-to-r from-blue-500 to-purple-500'>
        <div className='flex items-center flex-shrink-0 text-white mr-6'>
          <p className='font-bold text-xl'>Kalvium</p>
        </div>

        <div className='w-full block flex-grow sm:flex sm:items-center sm:w-auto'>
          <div className='text-sm flex sm:flex-grow space-evenly'>
            <div className="m-3 text-white text-l">About us</div>
            <div className="text-white m-3 text-l">Contact</div>
            <div className="m-3 text-white text-l">Courses</div>
          </div>
          <div>
            <button className="border rounded border-white p-2 text-white">LogIn</button>
          </div>
        </div>
      </nav>
      <div className='text-center mt-5'>
        <button className="bg-green-500 hover:bg-green-600 text-white text-xl px-6 py-2 rounded-lg">Button One</button>
      </div>
      <div className='bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-5 rounded my-5 flex gap-2 mx-20 ' role='alert'>
        <b className='font-bold'>Alert!</b>
        <p>This is awesome!</p>
      </div>

      <div className="max-w-max mx-auto flex justify-center bg-gradient-to-r from-purple-300 via-pink-400 to-red-400 shadow-lg ml-auto mt-1 rounded-lg p-4">
        <div>
          <img src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png" className="h-10" alt="Kalvium Logo" />
        </div>
        <div className="mx-3">
          <strong className="text-white"> Kalvium Store </strong>
          <p className="text-white"> You have a new course! </p>
        </div>
      </div>

      <div className="bg-gray-400 mt-8 text-center text-l py-4">
        <p> ©️ 2021 Copyright <b className="text-purple-800">Kalvium</b> </p>
      </div>
    </>
  )
}

export default App
