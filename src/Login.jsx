import React from "react";

function Login() {
  return (
    <form className="flex w-full h-[70vh] justify-center items-center gap-2 flex-col my-4 mx-3">
        <h1 className="text-[24px]">Login</h1>
      <div className="">
        <input
          type="text"
          placeholder="E-Mail"
          className="px-3 py-4 rounded-lg border shadow-md"
        />
      </div>
      <div className="">
        <input
          type="text"
          placeholder="Password"
          className="px-3 py-4 rounded-lg border shadow-md"
        />
      </div>
    </form>
  );
}

export default Login;
