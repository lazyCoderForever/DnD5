import React, { useState, useContext } from "react";
import { useHttp } from "../hooks/http.hook";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Header from "../components/Header";
import M from "materialize-css";

const AuthPage = () => {
  const auth = useContext(AuthContext);
  const { loading, request } = useHttp();
  const history = useHistory();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const validate = () => {
    const regex = /\w+@\w+/gm;

    if (form.password === "" || form.email === "") {
      M.toast({ html: "Заполните все поля" });
      return false;
    }
    if (!regex.test(form.email) && form.email !== "") {
      M.toast({ html: "Введите корректный email" });
      return false;
    }
    if (form.password.length <= 6 && form.password !== "") {
      M.toast({ html: "Пароль должен быть длинне 6 символов" });
      return false;
    }
    return true;
  };
  const registerHandler = async (event) => {
    event.preventDefault();

    try {
      const val = validate();

      if (val) {
        const data = await request("/api/auth/register", "POST", { ...form });
        if (data.status === 201) {
          M.toast({ html: `${data.message}` });
        }
      }
    } catch (error) {}
  };
  const loginHandler = async (event) => {
    event.preventDefault();

    try {
      const val = validate();

      if (val) {
        const data = await request("/api/auth/login", "POST", { ...form });
        auth.login(data.token, data.userId);
      }
    } catch (error) {}
  };
  return (
    <div className='row'>
      <Header/>
     <div className="auth_wraper">
      <div className='col s12 m4 offset-m4 auth_from'>
        <form className='card  '>
          <div className='card-content white-text'>
            <h2 className='card-title'>Авторизация</h2>
          </div>
          <div className='input-field col s12'>
            <input
              id='email'
              type='email'
              name='email'
              onChange={handleChange}
            />
            <label htmlFor='email'>Email</label>
          </div>
          <div className='input-field col s12'>
            <input
              id='current-password'
              type='password'
              name='password'
              onChange={handleChange}
            />
            <label htmlFor='current-password'>Пароль</label>
          </div>
          <div className='buttons_auth col s12'>
            <button
              className='waves-effect pink lighten-1 btn login'
              onClick={loginHandler}
              disabled={loading}
            >
              Войти
            </button>
            <button
              className='waves-effect pink lighten-1 btn reg'
              onClick={registerHandler}
              disabled={loading}
            >
              Зарегистрироваться
            </button>
          </div>
        </form>
      </div>
     </div>
    </div>
  );
};
export default AuthPage;
