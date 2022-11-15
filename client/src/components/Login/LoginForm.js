import React, { useEffect } from "react";

const LoginForm = () => {
  useEffect(() => {
    window.location.replace("https://bco.up.railway.app/login");
  }, []);

  return (
    <div className='py-40'>
      <h3 className=' text-green-600  font-semibold text-center'>loading........</h3>
    </div>
  );
};

export default LoginForm;
