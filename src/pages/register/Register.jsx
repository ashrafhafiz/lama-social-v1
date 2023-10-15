import "./Register.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Lama Social.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius fugit
            voluptatibus dolorum cum aspernatur exercitationem fugiat, eos
            quidem quaerat rem.
          </p>
          <span>Already have an account?</span>
          <button>Login</button>
        </div>

        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" name="name" id="name" placeholder="Full Name" />
            <input type="email" name="email" id="email" placeholder="Email" />
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
