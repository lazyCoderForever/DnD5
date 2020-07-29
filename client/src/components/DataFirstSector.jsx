import React from 'react'


const DataFirstSector = (props) => {

    return (
        <div className="col s12 health_and_other">
            <ul className="col s12 armor_initiative_speed_wraper">
                <li className="input-field col s4 armor_initiative_speed">
                    <input id="armor_class" type="text" className="validate" name='armorClass' value={props.firstSekrot.armorClass} onChange={props.handleFirstSektor.bind(this)}/>
                    <label htmlFor="armor_class">Класс брони:</label>
                </li>
                <li className="input-field col s4 armor_initiative_speed">
                    <input id="initiative" type="text" className="validate" name='initiative' value={props.firstSekrot.initiative} onChange={props.handleFirstSektor.bind(this)}/>
                    <label htmlFor="initiative">Инициатива:</label>
                </li>
                <li className="input-field col s4 armor_initiative_speed">
                    <input id="speed" type="text" className="validate" name='speed' value={props.firstSekrot.speed} onChange={props.handleFirstSektor.bind(this)}/>
                    <label htmlFor="speed">Скорость:</label>
                </li>
            </ul>
        
            <ul className="col s12 health_wraper">
                <li className="input-field col s4 health_data">
                    <input id="max_health" type="text" className="validate" name='maxHelth' value={props.firstSekrot.maxHelth} onChange={props.handleFirstSektor.bind(this)}/>
                    <label htmlFor="max_health">Максимум ПЗ:</label>
                </li>
                <li className="input-field col s4 health_data">
                    <input id="curr_health" type="text" className="validate" name='currentHealth' value={props.firstSekrot.currentHealth} onChange={props.handleFirstSektor.bind(this)}/>
                    <label htmlFor="curr_health">Текущие ПЗ:</label>
                </li>
                <li className="input-field col s4 health_data">
                    <input id="temp_health" type="text" className="validate" name='tempHealth' value={props.firstSekrot.tempHealth} onChange={props.handleFirstSektor.bind(this)}/>
                    <label htmlFor="temp_health">Временные ПЗ:</label>
                </li>
            </ul>
            <ul className="col s6 hit_dice_wraper">
                <li className="input-field col s6 health_dice_data">
                    <input id="max_hit_dice" type="text" className="validate" name='hitHealth' value={props.firstSekrot.hitHealth} onChange={props.handleFirstSektor.bind(this)}/>
                    <label htmlFor="max_hit_dice">Всего:</label>
                </li>
                <li className="input-field col s6 health_dice_data">
                    <input id="hit_dice" type="text" className="validate" name='maxHitHealt' value={props.firstSekrot.maxHitHealt} onChange={props.handleFirstSektor.bind(this)}/>
                    <label htmlFor="hit_dice">Кости здоровья:</label>
                </li>
            </ul>
            <ul className="col s6 roll_death_save_wraper">
                <li className=" col s12 roll_death_save_data">
                    <span className="succes-title">Успех:</span>
                    <label>
                        <input type="checkbox"  name="succes_0"  onChange={e=>{props.handleDataFirstRadio(e)}}/>
                        <span></span>
                    </label>
                    <label>
                        <input type="checkbox"  name="succes_1"  onChange={e=>{props.handleDataFirstRadio(e)}}/>
                        <span></span>
                    </label>
                    <label>
                        <input type="checkbox"  name="succes_2"  onChange={e=>{props.handleDataFirstRadio(e)}}/>
                        <span></span>
                    </label>
                    
                </li>
                <li className=" col s12 roll_death_save_data">
                    <span className="faile-title">Провал:</span>
                    <label>
                        <input type="checkbox"  name="faile_0"  onChange={e=>{props.handleDataFirstRadio(e)}}/>
                        <span></span>
                    </label>
                    <label>
                        <input type="checkbox"  name="faile_1"  onChange={e=>{props.handleDataFirstRadio(e)}}/ >
                        <span></span>
                    </label>
                    <label>
                        <input type="checkbox"  name="faile_2"  onChange={e=>{props.handleDataFirstRadio(e)}}/>
                        <span></span>
                    </label>
                    
                </li>
                
            </ul>
        </div>
  
    )
}



export default DataFirstSector

