import React from "react";

const InstrSkillsLang = (props) => {
  return (
    <div className='col s12 instr_skills_lang_wraper'>
      <div className='col s12 instumenst_wraper'>
        <button className="functional_btn" name='add' onClick={props.handleAddField.bind(this)}>
          Добавить
        </button>
        <button className="functional_btn" name='del' onClick={props.handleAddField.bind(this)}>
          Удалить
        </button>
        <ul className='list_titles list_instrument_titles'>
          <li className='title'>Инструмент</li>
          <li className='title'>Умение</li>
          <li className='title'>Характ.</li>
        </ul>

        {props.instruments.map((e) => {
          return (
            <div className='input-field  instrument_field' key={e.instrId}>
              <input
                type='text'
                className='validate'
                data_id={e.instrId}
                name='name'
                placeholder='Кирка'
                onChange={props.handleInstrSkill.bind(this)}
              />
              <input
                type='text'
                className='validate'
                data_id={e.instrId}
                name='skill'
                placeholder='1'
                onChange={props.handleInstrSkill.bind(this)}
              />
              <input
                type='text'
                className='validate'
                data_id={e.instrId}
                name='setting'
                placeholder='Интеллект'
                onChange={props.handleInstrSkill.bind(this)}
              />
            </div>
          );
        })}

        <span className='card_wraper_title instrument_card_title'>
          Владение инструментами 
        </span>
      </div>
      <div className='col s12 language_wraper'>
        <button className="functional_btn" name='add' onClick={props.handleAddOtherSkill.bind(this)}>
          Добавить
        </button>
        <button className="functional_btn" name='del' onClick={props.handleAddOtherSkill.bind(this)}>
          Удалить
        </button>
        <ul className='list_titles list_language_titles'>
          <li className='title'>Тип</li>
          <li className='title'>Умение</li>
        </ul>
        {props.otherSkills.map((e) => {
          return (
            <div className='input-field  language_field' key={e.skillId}>
              <input
                type='text'
                className='validate'
                data_id={e.skillId}
                name='type'
                placeholder='Оружие, Броня, Др.'
                onChange={props.handleOtherSkill.bind(this)}
              />
              <input
                type='text'
                className='validate'
                data_id={e.skillId}
                name='skill'
                placeholder='Эльфийское, Гномье, Др.'
                onChange={props.handleOtherSkill.bind(this)}
              />
            </div>
          );
        })}

        <span className='card_wraper_title instrument_card_title'>
          Прочие умения и языки
        </span>
      </div>
    </div>
  );
};

export default InstrSkillsLang;
