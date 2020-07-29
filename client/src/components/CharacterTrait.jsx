import React from "react";

const CharacterTrait = (props) => {

  return (
    <div className='col s12 character_trait_wraper'>
      <div className='input-field col s12 personality_traits_card_wraper'>
        <textarea
          id='personality_traits'
          className='personality_traits'
          name='personality_traits'
          value={props.trait.personality_traits}
          onChange={props.handleTrait.bind(this)}
        ></textarea>
        <span className='card_wraper_title personality_traits_card_title'>
          Свойства личности
        </span>
      </div>
      <div className='input-field col s12 personality_traits_card_wraper'>
        <textarea
          id='ideals'
          className='personality_traits'
          name='ideals'
          value={props.trait.ideals}
          onChange={props.handleTrait.bind(this)}
        ></textarea>
        <span className='card_wraper_title personality_traits_card_title'>
          Идеалы
        </span>
      </div>
      <div className='input-field col s12 personality_traits_card_wraper'>
        <textarea id='bonds' className='personality_traits' name='bonds'
        value={props.trait.bonds}
        onChange={props.handleTrait.bind(this)}></textarea>
        <span className='card_wraper_title personality_traits_card_title'>
          Узы
        </span>
      </div>
      <div className='input-field col s12 personality_traits_card_wraper'>
        <textarea id='flaws' className='personality_traits' name='flaws'
         value={props.trait.flaws}
         onChange={props.handleTrait.bind(this)}></textarea>
        <span className='card_wraper_title personality_traits_card_title'>
          Изъяны
        </span>
      </div>
      <div className='col s12 features_wraper'>
        <button className="functional_btn" name='add' onClick={props.handleAddFeatures.bind(this)}>Добавить</button>
        <button className="functional_btn" name='del' onClick={props.handleAddFeatures.bind(this)}>Удалить</button>
        <ul className='list_titles list_features_titles'>
          <li className='title'>Название</li>
          <li className='title'>Источник</li>
          <li className='title'>Тип источника</li>
        </ul>
        {props.features.map((e) => {
          return (
            <div className='input-field  features_field' key={e.featuresId}>
              <input type='text' className='validate' placeholder='Раса, Класс, Др.' 
              data_id={e.featuresId}
              name='name'
              value={e.name}
              onChange={props.handleFeatures.bind(this)}
              />
              <input type='text' className='validate' placeholder='Раса, Класс, Др.'
              data_id={e.featuresId}
              name='source'
              value={e.source}
              onChange={props.handleFeatures.bind(this)} 

              />
              <input type='text' className='validate' placeholder='Гном, Боец, Др.' 
              data_id={e.featuresId}
              name='typeSource'
              value={e.typeSource}
              onChange={props.handleFeatures.bind(this)}
              />
            </div>
          );
        })}

        <span className='card_wraper_title trait_card_title'>Особенности и черты</span>
      </div>
    </div>
  );
};

export default CharacterTrait;
