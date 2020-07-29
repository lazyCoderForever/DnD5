import React from "react";
// import M from "materialize-css";

const SkillAndTrials = (props) => {


  return (
    <div className='col s8  skills_trials'>
      <div className='col s12 insparation_wraper'>
        <label>
          <input type='checkbox' className='insparation' checked={props.trialsValue.insparation}/>
          <span>Вдохновение</span>
        </label>
      </div>
      <div className='input-field col s12 skill_bonus_wraper'>
        <input
          id='skill_bonus'
          type='text'
          className='validate'
          name='bonusSkill'
          value={props.baseAttr.bonusSkill}
          onChange={props.handleAttr.bind(this)}
        />
        <label className='active' htmlFor='skill_bonus'>
          Бонус умения
        </label>
      </div>
      <div className='col s12 trials_wraper'>
        <label>
          <input
            type='checkbox'
            className='trial'
            name='trStrength'
            value={props.trialsValue.trStrength}
            onChange={props.handleRadioData.bind(this)}
          />
          <span>
            {props.trialsValue.trStrength
              ? Number(props.baseAttr.strength) +
                Number(props.baseAttr.bonusSkill)
              : Number(props.baseAttr.strength)}
          </span>
          <span className='trial_name'>Сила</span>
        </label>
        <label>
          <input
            type='checkbox'
            className='trial'
            name='trAg'
            value={props.trialsValue.trAg}
            onChange={props.handleRadioData.bind(this)}
          />
          <span>
            {props.trialsValue.trAg
              ? Number(props.baseAttr.agility) +
                Number(props.baseAttr.bonusSkill)
              : Number(props.baseAttr.agility)}
          </span>
          <span className='trial_name'>Ловкость</span>
        </label>
        <label>
          <input
            type='checkbox'
            className='trial'
            name='trStamina'
            value={props.trialsValue.trStamina}
            onChange={props.handleRadioData.bind(this)}
          />
          <span>
            {props.trialsValue.trStamina
              ? Number(props.baseAttr.strength) +
                Number(props.baseAttr.bonusSkill)
              : Number(props.baseAttr.stamina)}
          </span>
          <span className='trial_name'>Выносливость</span>
        </label>
        <label>
          <input
            type='checkbox'
            className='trial'
            name='trIntellig'
            value={props.trialsValue.trIntellig}
            onChange={props.handleRadioData.bind(this)}
          />
          <span>
            {props.trialsValue.trIntellig
              ? Number(props.baseAttr.intellig) +
                Number(props.baseAttr.bonusSkill)
              : Number(props.baseAttr.intellig)}
          </span>
          <span className='trial_name'>Интеллект</span>
        </label>
        <label>
          <input
            type='checkbox'
            className='trial'
            name='trWise'
            value={props.trialsValue.trWise}
            onChange={props.handleRadioData.bind(this)}
          />
          <span>
            {props.trialsValue.trWise
              ? Number(props.baseAttr.wise) + Number(props.baseAttr.bonusSkill)
              : Number(props.baseAttr.wise)}
          </span>
          <span className='trial_name'>Мудрость</span>
        </label>
        <label>
          <input
            type='checkbox'
            className='trial'
            name='trCharisma'
            value={props.trialsValue.trCharisma}
            onChange={props.handleRadioData.bind(this)}
          />
          <span>
            {props.trialsValue.trCharisma
              ? Number(props.baseAttr.charisma) +
                Number(props.baseAttr.bonusSkill)
              : Number(props.baseAttr.charisma)}
          </span>
          <span className='trial_name'>Харизма</span>
        </label>
        <span className='card_wraper_title'>Спасброски</span>
      </div>
      <div className='col s12 skills_wraper'>
        <label>
          <input
            type='checkbox'
            className='skill'
            name='acrobatics'
            value={props.skillsValue.acrobatics}
            onChange={props.handleRadioDataSkills.bind(this)}
          />
          <span>
            {props.skillsValue.acrobatics
              ? Number(props.baseAttr.agility) +
                Number(props.baseAttr.bonusSkill)
              : Number(props.baseAttr.agility)}
          </span>
          <span className='skill_name'>
            Акробатика
            <span>(Лов)</span>
          </span>
        </label>

        <label>
          <input
            type='checkbox'
            className='skill'
            name='investigation'
            value={props.skillsValue.investigation}
            onChange={props.handleRadioDataSkills.bind(this)}
          />
          <span>
            {props.skillsValue.investigation
              ? Number(props.baseAttr.intellig) +
                Number(props.baseAttr.bonusSkill)
              : Number(props.baseAttr.intellig)}
          </span>
          <span className='skill_name'>
            Расследование
            <span>(Инт)</span>
          </span>
        </label>
        <label>
          <input type='checkbox' 
            className='skill' 
            name='atletico'
            value={props.skillsValue.atletico}
            onChange={props.handleRadioDataSkills.bind(this)}
          />
          <span>
            {props.skillsValue.atletico
              ? Number(props.baseAttr.strength) +
                Number(props.baseAttr.bonusSkill)
              : Number(props.baseAttr.strength)}
          </span>
          <span className='skill_name'>
            Атлетика
            <span>(Сил)</span>
          </span>
        </label>
        <label>
          <input type='checkbox' 
            className='skill' 
            name='survival'
            value={props.skillsValue.survival}
            onChange={props.handleRadioDataSkills.bind(this)}
            />
          <span>
            {props.skillsValue.survival
              ? Number(props.baseAttr.wise) +
                Number(props.baseAttr.bonusSkill)
              : Number(props.baseAttr.wise)}
            </span>
          <span className='skill_name'>
            Выживание
            <span>(Мдр)</span>
          </span>
        </label>
        <label>
          <input type='checkbox' 
          className='skill' 
          name='execution'
            value={props.skillsValue.execution}
            onChange={props.handleRadioDataSkills.bind(this)}
          />
          <span>{props.skillsValue.execution
              ? Number(props.baseAttr.charisma) +
                Number(props.baseAttr.bonusSkill)
              : Number(props.baseAttr.charisma)}
              </span>
          <span className='skill_name'>
            Исполнение
            <span>(Хар)</span>
          </span>
        </label>
        <label>
          <input type='checkbox' 
          className='skill' 
          name='intimidation'
            value={props.skillsValue.intimidation}
            onChange={props.handleRadioDataSkills.bind(this)}
          />
          <span>{props.skillsValue.intimidation
              ? Number(props.baseAttr.charisma) +
                Number(props.baseAttr.bonusSkill)
              : Number(props.baseAttr.charisma)}
              </span>
          <span className='skill_name'>
            Запугивание
            <span>(Хар)</span>
          </span>
        </label>
        <label>
          <input type='checkbox' 
          className='skill' 
          name='history'
            value={props.skillsValue.history}
            onChange={props.handleRadioDataSkills.bind(this)}
          />
          <span>{props.skillsValue.history
              ? Number(props.baseAttr.intellig) +
                Number(props.baseAttr.bonusSkill)
              : Number(props.baseAttr.intellig)}
              </span>
          <span className='skill_name'>
            История
            <span>(Инт)</span>
          </span>
        </label>
        <label>
          <input type='checkbox' 
          className='skill' 
          name='sleight_of_hand'
          value={props.skillsValue.sleight_of_hand}
          onChange={props.handleRadioDataSkills.bind(this)}
          />
          <span>{props.skillsValue.sleight_of_hand
              ? Number(props.baseAttr.agility) +
                Number(props.baseAttr.bonusSkill)
              : Number(props.baseAttr.agility)}
              </span>
          <span className='skill_name'>
            Ловкость рук
            <span>(Лов)</span>
          </span>
        </label>
        <label>
          <input type='checkbox' 
          className='skill' 
          name='magic'
          value={props.skillsValue.magic}
          onChange={props.handleRadioDataSkills.bind(this)}/>
          <span>
          {props.skillsValue.magic
              ? Number(props.baseAttr.intellig) +
                Number(props.baseAttr.bonusSkill)
              : Number(props.baseAttr.intellig)}
          </span>
          <span className='skill_name'>
            Магия
            <span>(Инт)</span>
          </span>
        </label>
        <label>
          <input type='checkbox' 
          className='skill' 
          name='medicine'
          value={props.skillsValue.medicine}
          onChange={props.handleRadioDataSkills.bind(this)}
          />
          <span>{props.skillsValue.medicine
              ? Number(props.baseAttr.wise) +
                Number(props.baseAttr.bonusSkill)
              : Number(props.baseAttr.wise)}
              </span>
          <span className='skill_name'>
            Медицина
            <span>(Мдр)</span>
          </span>
        </label>
        <label>
          <input type='checkbox' 
          className='skill' 
          name='deception'
          value={props.skillsValue.deception}
          onChange={props.handleRadioDataSkills.bind(this)}
          />
          <span>{props.skillsValue.deception
              ? Number(props.baseAttr.charisma) +
                Number(props.baseAttr.bonusSkill)
              : Number(props.baseAttr.charisma)}</span>
          <span className='skill_name'>
            Обман
            <span>(Хар)</span>
          </span>
        </label>
        <label>
          <input type='checkbox' 
          className='skill' 
          name='nature'
          value={props.skillsValue.nature}
          onChange={props.handleRadioDataSkills.bind(this)}
          />
          <span>{props.skillsValue.nature
              ? Number(props.baseAttr.intellig) +
                Number(props.baseAttr.bonusSkill)
              : Number(props.baseAttr.intellig)}
              </span>
          <span className='skill_name'>
            Природа
            <span>(Инт)</span>
          </span>
        </label>
        <label>
          <input type='checkbox' 
          className='skill' 
          name='insight'
          value={props.skillsValue.insight}
          onChange={props.handleRadioDataSkills.bind(this)}
          />
          <span>{props.skillsValue.insight
              ? Number(props.baseAttr.wise) +
                Number(props.baseAttr.bonusSkill)
              : Number(props.baseAttr.wise)}</span>
          <span className='skill_name'>
            Проницательность
            <span>(Мдр)</span>
          </span>
        </label>
        <label>
          <input type='checkbox' 
          className='skill' 
          name='religion'
          value={props.skillsValue.religion}
          onChange={props.handleRadioDataSkills.bind(this)}
          />
          <span>{props.skillsValue.religion
              ? Number(props.baseAttr.intellig) +
                Number(props.baseAttr.bonusSkill)
              : Number(props.baseAttr.intellig)}</span>
          <span className='skill_name'>
            Религия
            <span>(Инт)</span>
          </span>
        </label>
        <label>
          <input type='checkbox' 
          className='skill' 
          name='secrecy'
          value={props.skillsValue.secrecy}
          onChange={props.handleRadioDataSkills.bind(this)}
          />
          <span>{props.skillsValue.secrecy
              ? Number(props.baseAttr.agility) +
                Number(props.baseAttr.bonusSkill)
              : Number(props.baseAttr.agility)}
              </span>
          <span className='skill_name'>
            Скрытность
            <span>(Лов)</span>
          </span>
        </label>
        <label>
          <input type='checkbox'
           className='skill'
           name='persuasion'
           value={props.skillsValue.persuasion}
           onChange={props.handleRadioDataSkills.bind(this)}
           />
          <span>{props.skillsValue.persuasion
              ? Number(props.baseAttr.charisma) +
                Number(props.baseAttr.bonusSkill)
              : Number(props.baseAttr.charisma)}</span>
          <span className='skill_name'>
            Убеждение
            <span>(Хар)</span>
          </span>
        </label>
        <label>
          <input type='checkbox' 
          className='skill' 
          name='training'
          value={props.skillsValue.training}
          onChange={props.handleRadioDataSkills.bind(this)}
          />
          <span>{props.skillsValue.training
              ? Number(props.baseAttr.wise) +
                Number(props.baseAttr.bonusSkill)
              : Number(props.baseAttr.wise)}</span>
          <span className='skill_name'>
            Дрессировка
            <span>(Мдр)</span>
          </span>
        </label>
        <span className='card_wraper_title'>Навыки</span>
      </div>
    </div>
  );
};

export default SkillAndTrials;
