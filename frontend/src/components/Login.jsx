import React, { useState } from "react";

const Login = () => {
  const [Login, setLogin] = useState(true);

  const handleSubmit = (e, data) => {
    e.preventDefault();
    console.log(data);
  };
  const handleLoginToggler =()=> setLogin(!Login)
  return (
    <div className="h-screen w-full text-white flex ">
      <div className="left w-1/2 flex items-center justify-center ">
        <img
          className="ml-5 invert"
          width={"300px"}
          src="https://www.edigitalagency.com.au/wp-content/uploads/new-Twitter-logo-x-black-png-1200x1227.png"
          alt="twitter-logo"
        />
      </div>
      <div className="right w-1/3 flex items-center flex-col">
        <div className="mt-10">
          <div className="py-15">
            <h1 className="text-6xl font-bold ">Happening Now</h1>
            <h2 className="text-4xl font-bold mt-15 text-center">
              Join today.
            </h2>
          </div>
          <h3 className="text-3xl font-bold text-center">{Login?"Login":"Sign Up"}</h3>
          <form
            className="mt-5 flex flex-col gap-4 items-center"
            onSubmit={handleSubmit}
            action=""
          >
            {Login ? (
              <div className="flex flex-col gap-5">
                <input
                  className="h-10 rounded-lg px-4 font-bold text-lg border-[1px] border-gray-400"
                  type="email"
                  placeholder="Email"
                />
                <input
                  className="h-10 rounded-lg px-4 font-bold text-lg border-[1px] border-gray-400"
                  type="password"
                  placeholder="Password"
                />
              </div>
            ) : (
              <div className="flex flex-col gap-5">
                <input
                  className="h-10 rounded-lg px-4 font-bold text-lg border-[1px] border-gray-400"
                  type="email"
                  placeholder="Email"
                />
                <input
                  className="h-10 rounded-lg px-4 font-bold text-lg border-[1px] border-gray-400"
                  type="password"
                  placeholder="Password"
                />
                <input
                  className="h-10 rounded-lg px-4 font-bold text-lg border-[1px] border-gray-400 "
                  type="text"
                  placeholder="Name"
                />
                <input
                  className="h-10 rounded-lg px-4 font-bold text-lg border-[1px] border-gray-400"
                  type="text"
                  placeholder="Username"
                />
              </div>
            )}

            <button className="bg-blue-500 w-25 h-8 rounded-lg text-center active:scale-95 active:bg-blue-600">
              {Login?"Login" : "Sign Up"}
            </button>
          </form>
        </div>
        <div className="mt-5">
          <h4 className="font-bold text-lg">
            {Login ? (
              <div>
                Do not have an account? <span className="cursor-pointer hover:text-blue-500" onClick={handleLoginToggler}>Register</span>
              </div>
            ) : (
              <div>
                Already have an Account? <span className="cursor-pointer hover:text-blue-500" onClick={handleLoginToggler}>Login</span>
              </div>
            )}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Login;
