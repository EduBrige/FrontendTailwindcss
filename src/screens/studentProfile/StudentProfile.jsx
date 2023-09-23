import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "./Avatar.png";

const StudentProfile = () => {
  const navigate = useNavigate();
  const [imagePreview, setImagePreview] = useState(null);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImagePreview(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="h-screen bg-gray-200 p-10">
      <div className="bg-gray-50 p-5 flex flex-col gap-4 rounded-md relative">
        <div className="absolute right-10 flex flex-col gap-5 items-center">
          <div className="">
            <img className="h-48 object-cover" src={imagePreview || Avatar} />
          </div>
          <div>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
              id="imageInput" // Add an id for the label to reference
            />
            <label
              htmlFor="imageInput" // Use the id to associate the label with the input
              className="cursor-pointer  bg-red-100 transition duration-300 ease-in-out hover:bg-red-200 text-red-500 font-semibold px-5 py-2 rounded-md"
            >
              {" "}
              Upload Image
            </label>
          </div>
        </div>
        <h1 className="text-semibold text-3xl">Welcome to our Team!!</h1>
        <div className="flex w-96  justify-between items-center my-2">
          <span className="text-semibold text-lg">Name : </span>
          <input
            placeholder="enter full name "
            className="border border-gray-300 rounded-md text-lg px-2 py-1"
          />
        </div>
        <div className="flex w-96  justify-between  items-center my-2">
          <span className="text-semibold text-lg">University Name : </span>
          <input
            placeholder="enter university name"
            className="border border-gray-300 rounded-md text-lg px-2 py-1"
          />
        </div>
        <div className="flex w-96  justify-between  items-center my-2">
          <span className="text-semibold text-lg">Phone : </span>
          <input
            placeholder="enter phone number"
            type="number"
            className="border border-gray-300 rounded-md text-lg px-2 py-1"
          />
        </div>
        <div className="flex w-96  justify-between  items-center my-2">
          <span className="text-semibold text-lg">Email :</span>
          <input
            placeholder="enter valid email id"
            type="text"
            className="border border-gray-300 rounded-md text-lg px-2 py-1"
          />
        </div>
        <div className="flex w-96  justify-between  items-center my-2">
          <span className="text-semibold text-lg">Program :</span>
          <input
            placeholder="enter valid email id"
            type="text"
            className="border border-gray-300 rounded-md text-lg px-2 py-1"
          />
        </div>
        <div className="flex w-96  justify-between  items-center my-2">
          <span className="text-semibold text-lg">Major :</span>
          <input
            placeholder="enter valid email id"
            type="text"
            className="border border-gray-300 rounded-md text-lg px-2 py-1"
          />
        </div>
       
        <div className="flex w-10/12    justify-between  items-center gap-24 my-2">
          <span className="text-semibold text-lg">Interests:</span>
          <input
            placeholder="enter your interests separated by a comma"
            type="text"
            className="border border-gray-300 w-full rounded-md text-lg px-2 py-1"
          />
        </div>
        <div className="flex flex-col items-center    justify-center ">

        <div><button onClick={() => navigate('/') } className="pointer-cursor bg-blue-400 px-2 py-1 rounded-md ">SUBMIT</button></div>
        <a href="/facultyprofile" className="underline text-blue-400">Are you a faculty ?</a>
        </div>
        
      </div>
    </div>
  );
};

export default StudentProfile;
