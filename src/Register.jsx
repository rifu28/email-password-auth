const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
  };
  return (
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
        <div className="flex justify-center">
          <input className="btn" type="submit" value="Register" />
        </div>
      </form>
    </div>
  );
};

export default Register;
