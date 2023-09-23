import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Plus from "./assets/plus.png";
import Perc75 from "./assets/75.png";
import Perc62 from "./assets/62.png";

function App() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <section className="py-10 px-24">
        <div className="flex justify-between">
          <p className="font-semibold text-3xl">CURRENT PROJECTS</p>
          <button onClick={() => navigate('/studentCreate')} className="flex gap-2 border border-black px-2 py-1 rounded-md mb-5">
            <img className="h-6" src={Plus} />
            <p>Create Project</p>
          </button>
        </div>
        <div className="flex ">
          <div className="border border-black m-5 p-5">
            <div className="flex gap-5 mb-5">
              <img src={Perc75} />
              <div>
                <h1 className="font-semibold text-2xl mb-2">
                  TITLE OF THE PROJECT
                </h1>
                <p>
                  <strong>Project description:</strong> Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <div className="flex gap-5 items-center justify-center">
              <p className="text-xl">Members : </p>
              <div className="h-10 w-10 rounded-3xl bg-gray-500"></div>
              <div className="h-10 w-10 rounded-3xl bg-gray-500"></div>
              <div className="h-10 w-10 rounded-3xl bg-gray-500"></div>
              <div className="h-10 w-10 rounded-3xl bg-gray-500"></div>
              <div className="h-10 w-10 rounded-3xl bg-gray-500"></div>
            </div>
          </div>
          <div className="border border-black m-5 p-5">
            <div className="flex gap-5 mb-5">
              <img src={Perc62} />
              <div>
                <h1 className="font-semibold text-2xl mb-2">
                  TITLE OF THE PROJECT
                </h1>
                <p>
                  <strong>Project description:</strong> Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <div className="flex gap-5 items-center justify-center">
              <p className="text-xl">Members : </p>
              <div className="h-10 w-10 rounded-3xl bg-gray-500"></div>
              <div className="h-10 w-10 rounded-3xl bg-gray-500"></div>
              <div className="h-10 w-10 rounded-3xl bg-gray-500"></div>
              <div className="h-10 w-10 rounded-3xl bg-gray-500"></div>
              <div className="h-10 w-10 rounded-3xl bg-gray-500"></div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex justify-center">
        <hr className="w-10/12 h-3/4 bg-black" />
      </div>
      <section className="py-10 px-24">
        <h1 className="uppercase text-3xl font-semibold">
          Recommended Projects
        </h1>
        <div className="flex">
        <div className="border flex-1 m-10 border-black p-4">
            <div className="flex justify-between mb-2">
              <h1>TITLE OF THE PROJECT</h1>
              <img  src={Plus} className="h-6"/>
            </div>
            <p><strong>Project description: </strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className="border flex-1 m-10 border-black p-4">
            <div className="flex justify-between mb-2">
              <h1>TITLE OF THE PROJECT</h1>
              <img  src={Plus} className="h-6"/>
            </div>
            <p><strong>Project description: </strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div></div>
        </div>
        <hr/>
      </section>
      <section className="py-10 px-24">
        <h1 className="uppercase text-3xl font-semibold">PEOPLE YOU WOULD WANT TO CONNECT WITH</h1>
        <div className="grid grid-cols-3 gap-5">
           <div className="border border-black flex flex-col items-center mx-5 my-7 gap-2 p-5">
              <div className="h-32 w-32 rounded-full bg-gray-500"></div>
              <h1 className="text-xl font-semibold">Aditya S</h1>
              <p className="text-center">tech enthusiast |  backend |<br/> frontend</p>
              <button className="bg-blue-600 px-4 py-1 rounded-full text-white">
                + Connect
              </button>
           </div>
           <div className="border border-black flex flex-col items-center mx-5 my-7 gap-2 p-5">
              <div className="h-32 w-32 rounded-full bg-gray-500"></div>
              <h1 className="text-xl font-semibold">Aditya S</h1>
              <p className="text-center">tech enthusiast |  backend |<br/> frontend</p>
              <button className="bg-blue-600 px-4 py-1 rounded-full text-white">
                + Connect
              </button>
           </div>
           <div className="border border-black flex flex-col items-center mx-5 my-7 gap-2 p-5">
              <div className="h-32 w-32 rounded-full bg-gray-500"></div>
              <h1 className="text-xl font-semibold">Aditya S</h1>
              <p className="text-center">tech enthusiast |  backend |<br/> frontend</p>
              <button className="bg-blue-600 px-4 py-1 rounded-full text-white">
                + Connect
              </button>
           </div>
           <div className="border border-black flex flex-col items-center mx-5 my-7 gap-2 p-5">
              <div className="h-32 w-32 rounded-full bg-gray-500"></div>
              <h1 className="text-xl font-semibold">Aditya S</h1>
              <p className="text-center">tech enthusiast |  backend |<br/> frontend</p>
              <button className="bg-blue-600 px-4 py-1 rounded-full text-white">
                + Connect
              </button>
           </div>
           <div className="border border-black flex flex-col items-center mx-5 my-7 gap-2 p-5">
              <div className="h-32 w-32 rounded-full bg-gray-500"></div>
              <h1 className="text-xl font-semibold">Aditya S</h1>
              <p className="text-center">tech enthusiast |  backend |<br/> frontend</p>
              <button className="bg-blue-600 px-4 py-1 rounded-full text-white">
                + Connect
              </button>
           </div>
           <div className="border border-black flex flex-col items-center mx-5 my-7 gap-2 p-5">
              <div className="h-32 w-32 rounded-full bg-gray-500"></div>
              <h1 className="text-xl font-semibold">Aditya S</h1>
              <p className="text-center">tech enthusiast |  backend |<br/> frontend</p>
              <button className="bg-blue-600 px-4 py-1 rounded-full text-white">
                + Connect
              </button>
           </div>
        </div>
      </section>
    </>
  );
}

export default App;
