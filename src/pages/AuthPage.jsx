import React, { useState } from "react";
import LoginForm from "./LoginFormPage";
import RegisterForm from "./RegisterFormPage";

const AuthPage = () => {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div className="flex flex-col items-center p-4">
      {isRegister ? <RegisterForm /> : <LoginForm />}
      <button
        onClick={() => setIsRegister(!isRegister)}
        className="mt-4 text-blue-500"
      >
        {isRegister ? "Do you have an account? Log in" : "You do not have an account? Register"}
      </button>
    </div>
  );
};

export default AuthPage;