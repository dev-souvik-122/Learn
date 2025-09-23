import React, { useState } from "react";
const Form = () => {
  const [username, setValue] = useState("");

  function submitHandeler(e) {
    e.preventDefault();
    console.log(e.target);
    console.log("Submitted");
    console.log(username);
    setValue("");
  }
  return (
    <form
      onSubmit={(e) => {
        submitHandeler(e);
      }}
      className="flex flex-col gap-4 bg-gray-950 p-10 rounded-2xl"
      action=""
    >
      <input
        value={username}
        onChange={(e) => {
          setValue(e.target.value);
          console.log(e.target.value);
        }}
        className="border-2 rounded-2xl text-white placeholder:text-gray-400 h-9 w-2xs p-4 m-1"
        type="text"
        placeholder="Enter first name"
      />
      {/* <input className='border-2 rounded-2xl text-white placeholder:text-gray-400 h-9 w-2xs p-4 m-1'  type="text" placeholder='Enter last name' /> */}
      {/* <input className='border-2 rounded-2xl text-white placeholder:text-gray-400 h-9 w-2xs p-4 m-1'  type="email" name="" id="" placeholder='Enter your email'/> */}
      {/* <input className='border-2 rounded-2xl text-white placeholder:text-gray-400 h-9 w-2xs p-4 m-1'  type="password" name="" id="" placeholder='Enter password' /> */}
      {/* <input className='border-2 rounded-2xl text-white placeholder:text-gray-400 h-9 w-2xs p-4 m-1'  type="password" name="" id="" placeholder='Enter confirm password' /> */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
