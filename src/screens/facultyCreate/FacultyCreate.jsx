import React from 'react'
import Navbar from "../../components/Navbar";
import { useNavigate } from 'react-router-dom';

const FacultyCreate = () => {
    const navigate = useNavigate()
  return (
    <>
    <Navbar />
    <section className="px-24 flex flex-col gap-8">
      <h1 className="text-2xl font-semibold">Create Project</h1>
      <div className="flex w-9/12  justify-between items-center my-2">
        <span className="text-semibold text-lg">Name : </span>
        <input className="border w-10/12 border-gray-300 rounded-md text-lg px-2 py-1" />
      </div>
      <div className="flex w-9/12  justify-between items-center my-2">
        <span className="text-semibold text-lg">Tag :</span>
        <input className="border w-10/12 border-gray-300 rounded-md text-lg px-2 py-1" />
      </div>
      <div className="flex w-9/12  justify-between items-center my-2">
        <span className="text-semibold text-lg">Ideas :</span>
        <textarea className="border w-10/12 border-gray-300 rounded-md text-lg px-2 py-1" />
      </div>
      <div className="flex   gap-10 items-center my-2">
        <span className="text-semibold text-lg">Student Researches :</span>
        <input type="number" className="border w-14 border-gray-300 rounded-md text-lg px-2 py-1" />
      </div>
      <div className="flex   gap-10 items-center my-2">
        <span className="text-semibold text-lg">Co-professors :</span>
        <input type="number" className="border w-14 border-gray-300 rounded-md text-lg px-2 py-1" />
      </div>
      <div>
        <input
          type="file"
          className="hidden"
          id="imageInput" // Add an id for the label to reference
        />
        <label
          htmlFor="imageInput" // Use the id to associate the label with the input
          className="cursor-pointer  bg-red-100 transition duration-300 ease-in-out hover:bg-red-200 text-red-500 font-semibold px-5 py-2 rounded-md"
        >
          {" "}
          Uploads
        </label>
      </div>
      <div className="flex gap-5">
          <button onClick={() => navigate('/')} className="border border-black rounded-md px-5 py-1">CREATE</button>
          <button onClick={() => navigate('/')} className="border border-black rounded-md px-5 py-1">CANCEL</button>
      </div>
    </section>
  </>
  )
}

export default FacultyCreate