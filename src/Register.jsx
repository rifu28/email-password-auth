import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "./firebase.init";
import { useState } from "react";

const Register = () => {
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const accept = e.target.terms.accepted;
    setSuccess("");
    setRegisterError("");
    console.log(email, password, accept);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setSuccess("User Created Successfully!!!");
      })
      .catch((error) => {
        console.log(error.message);
        setRegisterError(error.message);
      });
  };
  return (
    <div>
      <div className="bg-green-200 p-5 w-1/2 mx-auto flex justify-center mt-20">
        <form onSubmit={handleRegister}>
          <input
            className="px-5 py-2"
            type="email"
            name="email"
            placeholder="Email Address"
            id=""
          />
          <br />
          <br />
          <input
            className="px-5 py-2"
            type="password"
            name="password"
            placeholder="Password"
            id=""
          />
          <br />
          <br />
          <div>
            <input type="checkbox" name="terms" id="terms" />
            <label className="ml-2" htmlFor="terms">
              Accept out <a href="">terms and conditions</a>
            </label>
          </div>
          <br />
          <div>
            <input className="btn" type="submit" value="Register" />
          </div>
        </form>
      </div>
      {registerError && (
        <div className="flex justify-center mt-5 text-red-500">
          {registerError} :{" "}
        </div>
      )}{" "}
      {!registerError && (
        <div className="flex justify-center mt-5 text-green-500">{success}</div>
      )}
    </div>
  );
};

export default Register;
