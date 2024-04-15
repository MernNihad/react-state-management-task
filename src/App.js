import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

function App() {


  //  condition ? true : false

  // state

  const [status,setStatus] = useState(false);

  return (
    <div>
      <h1>State management</h1>

      <div className="ms-10 mt-6">
        <button className="border-pink-600 border px-4 shadow-lg text-pink-600 py-2 rounded-md" onClick={()=>setStatus(true)}>Login</button>
        <button className="border-pink-600 border px-4 shadow-lg text-pink-600 py-2 rounded-md ms-2" onClick={()=>setStatus(false)}>Signup</button>
      </div>

    { status ?  <Login />  : <Signup />}
    </div>
  );
}

export default App;
