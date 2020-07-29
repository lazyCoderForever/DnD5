import React from "react";

const Attack = (props) => {
  return (
    <div className='col s12 attack_wraper'>
      <button className="functional_btn" name='add' onClick={props.handleAddAttack.bind(this)}>Добавить</button>
        <button className="functional_btn" name='del' onClick={props.handleAddAttack.bind(this)}>Удалить</button>
      <ul className='list_titles list_attack_titles'>
        <li className='title'>Название</li>
        <li className='title'>Атака</li>
        <li className='title'>Урон/тип</li>
      </ul>
      {props.attack.map((e) => {
        return (
          <div className='input-field  attack_field' key={e.attackId}>
            <input
              type='text'
              className='validate'
              placeholder='Дубина'
              data_id={e.attackId}
              name='name'
              onChange={props.handleAttack.bind(this)}
            />
            <input
              type='text'
              className='validate'
              placeholder='+3'
              data_id={e.attackId}
              name='value'
              onChange={props.handleAttack.bind(this)}
            />
            <input
              type='text'
              className='validate'
              placeholder='10 рубящий'
              data_id={e.attackId}
              name='type'
              onChange={props.handleAttack.bind(this)}
            />
          </div>
        );
      })}

      <span className='card_wraper_title attack_card_title'>Атаки</span>
    </div>
  );
};

export default Attack;
