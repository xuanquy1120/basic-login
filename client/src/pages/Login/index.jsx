import React, { useEffect, useState } from "react";
import LoginForm from "./LoginForm";
import { useNavigate } from "react-router-dom";
import { authApi } from "api";
import Loading from "components/Loading";

function Login() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      if (localStorage.getItem("token")) {
        setLoading(true)
        try {
          const token = localStorage.getItem("token");
          await authApi.checkToken(token);
          setLoading(false)
          navigate("/admin");
        } catch (error) {
          console.log(error);
          setLoading(false)
        }
      }
    })();
  }, [navigate]);
  const handleSubmit = async (data) => {
    setLoading(true)
    try {
      const res = await authApi.login(data);
      localStorage.setItem("token", res.results.token);
      localStorage.setItem("username", res.results.username);
      setLoading(true)
      navigate("/admin");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {loading ? (
        <Loading></Loading>
      ) : (
        <LoginForm onSubmit={handleSubmit}> </LoginForm>
      )}
    </>
  );
}

export default Login;
