import React, { useState } from 'react';
import axios from 'axios';

export const Login = () => {
  const initial = { email: "", password: "" };
  const [responseMessage, setResponseMessage] = useState('');
  const [data, setData] = useState(initial);

  const { email, password } = data;

  function handleChange(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  async function handleClick(e) {
    e.preventDefault();
    const post = await axios.post(`http://localhost:4000/login`, data).then((response) => {
      // Response data is available in response.data
      setResponseMessage(response.data.token);})
      if (!post) {
        console.log("Error");
      }
      console.log("Success");
      console.log(responseMessage);
      localStorage.setItem('token', responseMessage);

    }
  return (
      <div>
        <form>
          <h1 style={{ textAlign: "center" }}>Login</h1>
          <div className="mb-3">
            <label form="exampleInputEmail1" className="form-label">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={email}
              name='email'
              onChange={e => handleChange(e)}
            />
            <div id="emailHelp" className="form-text">
              Kami tidak akan pernah membagikan email Anda kepada orang lain.
            </div>
          </div>
          <div className="mb-3">
            <label form="exampleInputPassword1" className="form-label">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name='password'
              value={password}
              onChange={e => handleChange(e)}
            />
          </div>
          <button type="submit"
            className="btn btn-primary"
            onClick={e => handleClick(e)}>
            Login
          </button>
        </form>
      </div>
    );
  };

  export default Login;