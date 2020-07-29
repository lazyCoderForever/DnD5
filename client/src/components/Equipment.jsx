import React from "react";

const Equipment = (props) => {


  return (
    <div className='col s12 equipment_wraper'>
      <div className='col s3 gold_common_weight_wraper'>
        <div className='input-field col s12 money_data'>
          <input
            id='money_mm'
            type='text'
            className='validate'
            name='mm'
            value={props.gold.mm}
            onChange={props.handleEquipment.bind(this)}
          />
          <label htmlFor='money_mm'>ММ:</label>
        </div>
        <div className='input-field col s12 money_data'>
          <input
            id='money_cm'
            type='text'
            className='validate'
            name='cm'
            value={props.gold.cm}
            onChange={props.handleEquipment.bind(this)}
          />
          <label htmlFor='money_cm'>СМ:</label>
        </div>
        <div className='input-field col s12 money_data'>
          <input
            id='money_im'
            type='text'
            className='validate'
            name='im'
            value={props.gold.im}
            onChange={props.handleEquipment.bind(this)}
          />
          <label htmlFor='money_im'>ЭМ:</label>
        </div>
        <div className='input-field col s12 money_data'>
          <input id='money_zm' type='text' className='validate' 
          name='zm'
          value={props.gold.zm}
          onChange={props.handleEquipment.bind(this)}/>
          <label htmlFor='money_zm'>ЗМ:</label>
        </div>
        <div className='input-field col s12 money_data'>
          <input id='money_pm' type='text' className='validate'
           name='pm'
           value={props.gold.pm}
           onChange={props.handleEquipment.bind(this)} />
          <label htmlFor='money_pm'>ПМ:</label>
        </div>
        <div className='input-field col s12 summarily_weight_data'>
          <input id='weight_summarily' type='text' className='validate'  
          name='weight_summarily'
           value={props.gold.weight_summarily}
           onChange={props.handleEquipment.bind(this)} />
          <label htmlFor='weight_summarily'>Общий вес</label>
        </div>
      </div>
      <div className='col s9 objects_wraper'>
        <button className="functional_btn" name='add' onClick={props.handleAddEquipItem.bind(this)}>Добавить</button>
        <button className="functional_btn" name='del' onClick={props.handleAddEquipItem.bind(this)}>Удалить</button>
        <ul className='list_titles list_objects_titles'>
          <li className='title'>Количество</li>
          <li className='title'>Предмет</li>
          <li className='title'>Вес</li>
        </ul>
        {props.equipmentItems.map((e) => {
          return (
            <div className='input-field  objects_field' key={e.itemsId}>
              <input type='text' className='validate' placeholder='1' 
              data_id={e.itemsId}
              name='amount'
              onChange={props.handleEquipmentItems.bind(this)}
              />
              <input type='text' className='validate' placeholder='Карта' 
              data_id={e.itemsId}
              name='item'
              onChange={props.handleEquipmentItems.bind(this)}
              />
              <input type='text' className='validate' placeholder='10' 
              data_id={e.itemsId}
              name='weight'
              onChange={props.handleEquipmentItems.bind(this)}
              />
            </div>
          );
        })}
         <span className='card_wraper_title equipment_card_title'>Снаряжение</span>
      </div>

     
    </div>
  );
};

export default Equipment;
