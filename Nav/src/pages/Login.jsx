import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../styles/Login.css"; // Import CSS mới

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      setError("Please enter your email and password!");
    } else {
      setError("");
      console.log("Logging in with:", { email, password });
    }
  };

  useEffect(() => {
    const modal = document.getElementById("loginModal");

    const handleModalClose = () => {
      setEmail("");
      setPassword("");
      setError("");
    };

    modal.addEventListener("hidden.bs.modal", handleModalClose);

    return () => {
      modal.removeEventListener("hidden.bs.modal", handleModalClose);
    };
  }, []);

  return (
    <>
      {/* Button mở modal */}
      <button
        className="btn btn-dark rounded-pill px-4 py-2 fs-5"
        data-bs-toggle="modal"
        data-bs-target="#loginModal"
      >
        Login
      </button>

      {/* Modal Component */}
      <div
        className="modal fade"
        id="loginModal"
        tabIndex="-1"
        aria-labelledby="loginModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-center" id="loginModalLabel">
                Login
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="emailInput" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="emailInput"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="passwordInput" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    id="passwordInput"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                {error && <p className="text-danger">{error}</p>}

                <button
                  type="button"
                  className="btn btn-primary w-100"
                  onClick={handleLogin}
                >
                  Login
                </button>
              </form>
            </div>
            <div className="modal-footer">
              <p>
                Forgot <a href="#">Login details?</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
