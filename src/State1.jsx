import React, { useState } from "react";

function State1() {
  // decalred, intialisation

  const [state, setState] = useState(100);

  const [status, setStatus] = useState(true);

  return (
    <>
    <div>
        {state}
        <br />
        <button onClick={()=>{setState(state+1)}}>+</button>
        <button onClick={()=>{setState(state-1)}}> -</button>
        <button onClick={()=>{setState(0)}}> Reset</button>
    </div>
    <div className="">
      <button onClick={()=> {
        setStatus(true)
      } } >LOgin</button>


      <button
      onClick={()=>{
        setStatus(false)
      }}
      >Register</button>

      {/* login */}

      {status === true ? (
        <>
        <h1>LOgin</h1>
          <div className="">
            <label htmlFor="">Email</label>
            <input type="text" placeholder="Emaail" />
          </div>
          <div className="">
            <label htmlFor="">Password</label>
            <input type="password" placeholder="Password" />
          </div>
        </>
      ) : (
        <>
        <h1>Register</h1>
          <div className="">
            <label htmlFor="">Email</label>
            <input type="text" placeholder="Emaail" />
          </div>
          <div className="">
            <label htmlFor="">Password</label>
            <input type="password" placeholder="Password" />
          </div>
          <div className="">
            <label htmlFor="">Name</label>
            <input type="text" placeholder="Name" />
          </div>
        </>
      )}
      {/*  */}
    </div>
    </>
  );
}
export default State1;