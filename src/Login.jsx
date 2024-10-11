import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "./firebase.init";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
      })
      .then((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <h2 className="text-3xl font-semibold text-center mt-20">Login Here</h2>
      <div className="bg-blue-200 p-5 w-1/2 mx-auto flex justify-center mt-10">
        <form onSubmit={handleLogin}>
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
            <input className="btn" type="submit" value="Login" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
