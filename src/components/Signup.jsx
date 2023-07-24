import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export const Signup = () => {
  const initial = { name: "", email: "", password: "" };
  const [data, setData] = useState(initial);

  const { name, email, password } = data;

  function handleChange(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  const goThere = useNavigate();

  async function handleClick(e) {
    e.preventDefault();
    try {
      const post = await axios.post("http://localhost:4000/", data);
      console.log("Success");
      goThere("/"); // Make sure goThere function is properly defined
    } catch (error) {
      console.error("Error:", error.message);
    }
  }
  

  return (
    <div>
      <form>
      <h1 style={{ textAlign: "center" }}>Sign Up</h1>
        <div className="mb-3">
          <label form="exampleInputEmail1" className="form-label">
            <strong>
              Name
            </strong>
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={name}
            name='name'
            onChange={e => handleChange(e)}
          />
        </div>
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
            value={password}
            name='password'
            onChange={e => handleChange(e)}
          />
        </div>
        <button type="submit"
          className="btn btn-primary" onClick={e => handleClick(e)}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
