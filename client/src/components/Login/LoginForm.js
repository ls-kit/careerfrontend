import React, { useState } from "react";
import LogoLarge from "../../assets/Logo-Large.png"


function LoginForm() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" name="uname" placeholder="Enter User" required className="mt-5 px-3 py-1.5 bg-white border shadow-sm border-green-800 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />
          {renderErrorMessage("uname")}
        </div>
        <div>
          <input type="password" name="pass" placeholder="Password" required className="mt-5 px-3 py-1.5 bg-white border shadow-sm border-green-800 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"/>
          {renderErrorMessage("pass")}
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center">
            <input id="link-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label for="link-checkbox" className="ml-2 text-sm dark:text-gray-300">Remember Me</label>
          </div>
          <div>
            <span className="ml-2 text-sm dark:text-gray-300">Forget Password?</span>
          </div>
        </div>
        <div className="button-container">
          <button type="submit" className="bg-green-700 px-8 text-sm rounded-md mt-5 py-2 d-block text-white">Login</button>
        </div>
      </form>
    </div>
  );
  
  return (
    <div className="container mx-auto px-3 py-12">
      <div className="login-form w-80 m-auto text-center">
        <img src={LogoLarge} className="w-40 m-auto"/>
        <div className="text-green-800">User Login</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}

export default LoginForm;