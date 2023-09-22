import { useEffect } from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";
import { grey, red } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import Image from "./logo.png";
import Text from "./Text.png";
import Google from "./google.png";

const clientID =
  "475571030013-rdh3gqg428p2mbtgcps3vvqm0sdslcib.apps.googleusercontent.com";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientID: clientID,
        scope: "",
      });
    }

    gapi.load("client:auth2", start);
  });

  const onSuccess = (e) => {
    console.log("Logged In");
    console.log(e.profileObj.email);
    navigate("/");
  };

  const onFailure = () => {
    console.log("Error");
  };

  return (
    <div className="h-screen bg-red-100 flex justify-center items-center py-5 px-10 overflow-hidden">
      <div className="bg-white flex h-full w-full rounded-3xl p-5">
        <div className="bg-gray-300 p-10 max-w-md rounded-3xl flex flex-col justify-end gap-9">
          <h1 className="text-5xl font-semibold">Let us help you connect.</h1>
          <p>
            Our registration process is quick and easy, taking no more than 10
            minutes to complete.
          </p>
          <div className="bg-gray-600 rounded-2xl text-white px-5 py-10 mt-20">
            <p>
              i’m impressed with the number of professors and fellow students
              i’ve connected with who helped me complete my project!!
            </p>
          </div>
        </div>
        <div className="flex flex-col flex-1 justify-center items-center">
          <div>
            <img src={Image} />
          </div>
          <div>
            <img src={Text} className="h-28" />
          </div>
          <div className="flex flex-col gap-3 mt-10">
            <input placeholder="Email" className="border-2  w-64 px-2 py-1 border-gray-200 rounded-md " />
         
            <input placeholder="Password" className="border-2 w-64 px-2 py-1 border-gray-200 rounded-md  " />
            <button  className="bg-blue-500 py-1 rounded-md">Login</button>
            <a href="/studentprofile" className="underline text-blue-400">Don't have an account ? Sign In</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

{
  /* <GoogleLogin
            render={
               (r) => <Box onClick={() => r.onClick()} sx={{display:'flex', backgroundColor: red[50], borderRadius: 2, alignItems: 'center', padding:1, opacity: 0.85, mt: 5}}>
                <Box>
                    <img src={Google} height={25}/>                   
                </Box>
                    <Box flex={1}></Box>
                        <span>Continue With Google</span>
                        <Box flex={1}></Box>
               </Box>
               
            }
                clientId={clientID}
                buttonText="Continue With Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'none'}

            /> */
}
