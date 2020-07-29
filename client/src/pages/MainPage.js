import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

function MainPage() {
    return (
        <div>
            <Header/>
            <div className="main_pagea_text">
                <h2>Немного о приложении</h2>
                <p>Это приложение создано, чтобы помочь, ускорить и упростить процесс создания персонажа для настольной игры Dungeons & Dragons (v5)</p>
                <p>Теперь игрокам не нужно сидеть и создавать своего персонажа, используюя ручку и обычный листок, тратя кучу времени. </p>
                <p>Для создания персонажа не требуется регистрация, вы можете перейте во вкладку "создания персонажа" и приступить к делу.</p>
            </div>
            <Link to="/create"> 
                <button className="waves-effect pink lighten-1 btn create_hero">Создать персонажа</button>
            </Link>
        </div>
    )
}

export default MainPage;
