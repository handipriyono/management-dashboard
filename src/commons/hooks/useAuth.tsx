import { useState } from "react";
import { postLogin } from "../api/index";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const [userName, setUserName] = useState("");
  const isLoggedIn = localStorage.getItem("token");
  const navigate = useNavigate();

  const onLogin = async () => {
    try {
      const response = await postLogin();
      if (response) {
        localStorage.setItem("token", "dummy-token");
        localStorage.setItem(
          "dataUser",
          JSON.stringify({
            email: `${userName}@gmail.com`,
            username: userName,
            name: userName,
          })
        );
        navigate("/");
      } else {
        throw new Error("Login failed");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return {
    setUserName,
    isLoggedIn,
    userName,
    onLogin,
  };
};

export default useAuth;
