import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { invoke } from "@tauri-apps/api/core";
import Modal from "./Modal";
import { Link } from "react-router-dom";
const LoginForm = () => {
  const navigate = useNavigate();

  const [accountEmail, setAccountEmail] = useState<string>("");
  const [accountPassword, setAccountPassword] = useState<string>("");
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [modalMessage, setModalMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/auth/login", {
        email: accountEmail,
        password: accountPassword,
      });
      console.log(response.data);

      // Optionally, use Tauri's invoke function
      await invoke("some_backend_function", { data: response.data });

      // Set success message and show modal
      setModalMessage("Login successful!");
      setModalVisible(true);

      // Navigate to another page on successful login
      navigate("/dashboard");
    } catch (error: any) {
      console.error("Error logging in:", error);
      setModalMessage(error.message || "An error occurred");
      setModalVisible(true);
    }
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div>
      <h1 className="font-bebasneue text-center text-2xl">Login</h1>
      <div id="login-form" className="flex justify-center">
        <form onSubmit={handleSubmit}>
          <div>
            <label className="block text-center">Email</label>
            <input
              className="rounded-md bg-slate-300 font-outfit py-2 my-1"
              type="text"
              value={accountEmail}
              onChange={(e) => setAccountEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-center" text-center>Password</label>
            <input
              className="rounded-md bg-slate-300 font-outfit py-2 my-1"
              type="password"
              value={accountPassword}
              onChange={(e) => setAccountPassword(e.target.value)}
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="rounded-md bg-orange-400 text-white uppercase py-3 px-2 my-2"
            >
              Login
            </button>
          </div>
          <div className="text-center">
            <Link to="/register">
              {" "}
              <button
                type="button"
                className="rounded-md bg-green-400 text-white uppercase py-3 px-2 my-2"
              >
                Register
              </button>
            </Link>
          </div>
        </form>
      </div>
      <Modal show={modalVisible} onClose={closeModal} message={modalMessage} />
    </div>
  );
};

export default LoginForm;
