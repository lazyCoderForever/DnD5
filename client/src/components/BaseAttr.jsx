import React from 'react'


const BaseAttr = (props)=>  {


      return (
        <div className="col s4 base_attr_wraper">
            <div className="input-field col s12 hero_data_attr">
              <span className="base_attr_card_title">Сила:</span>
              <span className="res_value" data-name="strength">{props.baseAttr.strength}</span>
              <input id="hero_strength" type="text" className="validate" name="strength" value={props.value.strength} onChange={props.handleAttr.bind(this)}/>
            </div>
            <div className="input-field col s12 hero_data_attr">
            <span className="base_attr_card_title">Ловкость:</span>
              <span className="res_value" data-name="agility">{props.baseAttr.agility}</span>
              <input id="hero_agility" type="text" className="validate" name="agility" value={props.value.agility} onChange={props.handleAttr.bind(this)}/>
            </div>
            <div className="input-field col s12 hero_data_attr">
            <span className="base_attr_card_title">Выносливость:</span>
              <span className="res_value" data-name="stamina">{props.baseAttr.stamina}</span>
              <input id="hero_stamina" type="text" className="validate" name="stamina"value={props.value.stamina} onChange={props.handleAttr.bind(this)}/>
            </div>
            <div className="input-field col s12 hero_data_attr">
            <span className="base_attr_card_title">Интеллект:</span>
              <span className="res_value" data-name="intellig">{props.baseAttr.intellig}</span>
              <input id="hero_intellig" type="text" className="validate" name="intellig"value={props.value.intellig} onChange={props.handleAttr.bind(this)}/>

            </div>
            <div className="input-field col s12 hero_data_attr">
            <span className="base_attr_card_title">Мудрость:</span>
              <span className="res_value" data-name="wise">{props.baseAttr.wise}</span>
              <input id="hero_wise" type="text" className="validate" name="wise" value={props.value.wise} onChange={props.handleAttr.bind(this)}/>
            </div>
            <div className="input-field col s12 hero_data_attr">
            <span className="base_attr_card_title">Харизма:</span>
              <span className="res_value" data-name="charisma">{props.baseAttr.charisma}</span>
              <input id="hero_charisma" type="text" className="validate" name="charisma"value={props.value.charisma} onChange={props.handleAttr.bind(this)}/>
            </div>
        </div>

    )
  
}



export default BaseAttr

