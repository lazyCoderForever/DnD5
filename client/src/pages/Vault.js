import React, { useContext, useState, useEffect, useCallback } from "react";
import { AuthContext } from "../context/AuthContext";
import { useHttp } from "../hooks/http.hook";
import Header from "../components/Header";
import ListHeroes from "../components/ListHeroes";

const Vault = () => {
  const [heroes, setHeroes] = useState([]);
  const { request } = useHttp();
  const { token } = useContext(AuthContext);

  const fetchHeroes = useCallback(async () => {
    try {
      const fetched = await request("/api/hero", "GET", null, {
        Autorization: `Bearer ${token}`,
      });
      setHeroes(fetched);
    } catch (error) {
        console.log(error)
    }
  }, [token, request]);

  useEffect(()=>{
      fetchHeroes()
  },[fetchHeroes])

  return (
    <div>
      <Header />
      <ListHeroes heroes={heroes}/>
    </div>
  );
};

export default Vault;
