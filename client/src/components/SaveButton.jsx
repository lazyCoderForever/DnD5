import React, { useContext } from "react";
import M from "materialize-css";
import { useHttp } from "../hooks/http.hook";
import { AuthContext } from "../context/AuthContext";

const SaveButton = (props) => {
  const { request } = useHttp();
  const auth = useContext(AuthContext);
  const dataHero = props.dataHero;

  const saveHero = async (e) => {
    e.preventDefault();
    try {
      const reqData = await request(
        "/api/hero/save",
        "POST",
        { dataHero },
        {
          Autorization: `Bearer ${auth.token}`,
        }
      );
      M.toast({ html: `${reqData.message}` });
    } catch (err) {
      M.toast({
        html: `${err.message}` || "При отправке запроса что-то пошло нет так",
      });
    }
  };

  return (
    <>
      <button
        className=' col s3 btn pink lighten-1 btn'
        onClick={(e) => saveHero(e)}
      >
        Сохранить
      </button>
    </>
  );
};

export default SaveButton;
