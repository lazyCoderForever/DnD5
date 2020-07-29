import React from "react";
import { v4 as uuidv4 } from "uuid";
import staticX from "../config/Data";
import axios from "axios";
import { saveAs } from "file-saver";
import { withRouter } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import M from "materialize-css";

import BaseAttr from "../components/BaseAttr";
import SkillAndTrials from "../components/SkillAndTrials";
import InstrSkillsLang from "../components/InstrSkillsLang";
import DataFirstSector from "../components/DataFirstSector";
import Attack from "../components/Attack";
import Equipment from "../components/Equipment";
import CharacterTrait from "../components/CharacterTrait";
import SaveButton from "../components/SaveButton";

import Header from "../components/Header";

class CreateHero extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      code: uuidv4(),
      baseAttr: {
        strength: 0,
        agility: 0,
        stamina: 0,
        intellig: 0,
        wise: 0,
        charisma: 0,
        bonusSkill: 0,
      },
      baseData: {
        name: "",
        class: "",
        subClass: "",
        lvl: "",
        race: "",
        subRace: "",
      },
      value: {
        strength: 0,
        agility: 0,
        stamina: 0,
        intellig: 0,
        wise: 0,
        charisma: 0,
      },
      baseValue: {
        name: "",
        class: "",
        subClass: "",
        lvl: "",
        race: "",
        subRace: "",
      },
      trialsValue: {
        trStrength: false,
        trAg: false,
        trStamina: false,
        trIntellig: false,
        trWise: false,
        trCharisma: false,
      },
      skillsValue: {
        acrobatics: false,
        investigation: false,
        atletico: false,
        attention: false,
        survival: false,
        execution: false,
        intimidation: false,
        history: false,
        sleight_of_hand: false,
        magic: false,
        medicine: false,
        deception: false,
        nature: false,
        insight: false,
        religion: false,
        secrecy: false,
        persuasion: false,
        training: false,
      },
      firstSekrot: {
        armorClass: 0,
        initiative: 0,
        speed: 0,
        maxHelth: 0,
        currentHealth: 0,
        tempHealth: 0,
        hitHealth: 0,
        maxHitHealt: 0,
        succes_0: false,
        succes_1: false,
        succes_2: false,
        faile_0: false,
        faile_1: false,
        faile_2: false,
      },
      gold: {
        mm: 0,
        cm: 0,
        im: 0,
        zm: 0,
        pm: 0,
        weight_summarily: 0,
      },
      trait: {
        personality_traits: "",
        ideals: "",
        bonds: "",
        flaws: "",
      },
      instruments: [
        {
          instrId: uuidv4(),
          name: "",
          skill: "",
          setting: "",
        },
      ],
      otherSkills: [
        {
          skillId: uuidv4(),
          type: "",
          skill: "",
        },
      ],
      attack: [
        {
          attackId: uuidv4(),
          name: "",
          type: "",
          value: "",
        },
      ],
      equipmentItems: [
        {
          itemsId: uuidv4(),
          amount: "",
          item: "",
          weight: "",
        },
      ],
      features: [
        {
          featuresId: uuidv4(),
          name: "",
          source: "",
          typeSource: "",
        },
      ],
    };
  }

  componentDidMount() {
    const { token } = this.context;
    const url = this.props.location.pathname.split("/");

    const fetched = async () => {
      const req = await fetch(`/api/hero/${url[2]}`, {
        method: "GET",
        body: null,
        headers: {
          Autorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      const response = await req.json();
      if (!req.ok) {
        throw new Error("Ошибка при отправке запроса");
      }
      const tempData = response.dataHero;
      this.setState((state) => ({
        code: tempData.code,
        baseAttr: tempData.baseAttr,
        baseData: tempData.baseData,
        value: tempData.value,
        baseValue: tempData.baseValue,
        trialsValue: tempData.trialsValue,
        skillsValue: tempData.skillsValue,
        firstSekrot: tempData.firstSekrot,
        gold: tempData.gold,
        trait: tempData.trait,
        instruments: tempData.instruments,
        otherSkills: tempData.otherSkills,
        attack: tempData.attack,
        equipmentItems: tempData.equipmentItems,
        features: tempData.features,
      }));
    };
    if (url.includes(url[2])) {
      try {
        fetched();
      } catch (er) {}
    }
  }

  handleAttr = (e) => {
    const eventValue = e.target.value;
    const eventName = e.target.name;
    if (eventName === "bonusSkill") {
      this.setState((state) => ({
        baseAttr: { ...state.baseAttr, ...{ [eventName]: eventValue } },
      }));
    } else {
      if (Number(eventValue) > 30) {
        this.setState((state) => ({
          baseAttr: { ...state.baseAttr, ...{ [eventName]: staticX[30] } },
          value: { ...state.value, ...{ [eventName]: eventValue } },
        }));
      } else {
        if (eventValue === "") {
          this.setState((state) => ({
            baseAttr: {
              ...state.baseAttr,
              ...{ [eventName]: Number(eventValue) },
            },
            value: { ...state.value, ...{ [eventName]: eventValue } },
          }));
        } else {
          this.setState((state) => ({
            baseAttr: {
              ...state.baseAttr,
              ...{ [eventName]: staticX[eventValue] },
            },
            value: { ...state.value, ...{ [eventName]: eventValue } },
          }));
        }
      }
    }
  };

  FuncManagerBaseData = (type, e) => {
    const eventName = e.target.name;
    if (type === "baseData") {
      const eventValue = e.target.value;
      this.setState((state) => ({
        baseValue: {
          ...state.baseValue,
          ...{ [eventName]: eventValue },
        },
        baseData: {
          ...state.baseData,
          ...{ [eventName]: eventValue },
        },
      }));
    }
    if (type === "savingThrows") {
      const eventCheked = !!e.target.checked;
      this.setState((state) => ({
        trialsValue: {
          ...state.trialsValue,
          ...{ [eventName]: eventCheked },
        },
      }));

      e.target.checked = !!e.target.checked;
    }
    if (type === "skills") {
      const eventCheked = !!e.target.checked;
      this.setState((state) => ({
        skillsValue: {
          ...state.skillsValue,
          ...{ [eventName]: eventCheked },
        },
      }));

      e.target.checked = !!e.target.checked;
    }
  };

  FuncManagerComplexData = (arrName, objId, e) => {
    const eventName = e.target.name;
    const eventValue = e.target.value;
    const localState = this.state[arrName];
    const eventId = e.target.attributes.getNamedItem("data_id").value;

    //Копия данных из  state в локальную переменнуб и изменение состояний
    const testing = () => {
      const temp = localState.map((el, index) => {
        let tempData = { ...el, ...{ [eventName]: eventValue } };
        if (eventId === el[objId]) {
          return { ...localState[index], ...tempData };
        } else {
          return { ...localState[index] };
        }
      });
      return temp;
    };
    this.setState({
      [arrName]: testing(),
    });
  };

  FuncManagerAddField = (nameField, e) => {
    const eventName = e.target.name;

    const GetObj = (name) => {
      switch (name) {
        case "instruments":
          return { instrId: uuidv4(), name: "", skill: "", setting: "" }
        case "otherSkills":
          return { skillId: uuidv4(), type: "", skill: "" };
        case "attack":
          return { attackId: uuidv4(), name: "", type: "", value: "" };
        case "features":
          return { featuresId: uuidv4(), name: "", source: "", typeSource: "" };
        case "equipmentItems":
          return { itemsId: uuidv4(), amount: "", item: "", weight: "" };
        //no default
      }
    };

    if (eventName === "add") {
      this.setState((state) => ({
        [nameField]: [...state[nameField], GetObj(nameField)],
      }));
    } else {
      const tem = this.state[nameField].splice(
        1,
        this.state[nameField].length - 1
      );
      this.setState((state) => ({
        [nameField]: tem,
      }));
    }
  };

  FuncmanagerSimpleData = (nameData, e) => {
    const eventName = e.target.name;
    const eventValue = e.target.value;

    this.setState((state) => ({
      [nameData]: {
        ...state[nameData],
        ...{ [eventName]: eventValue },
      },
    }));
  }

  handleDataFirstRadio = (e) => {
    const eventCheked = !!e.target.checked;
    const eventName = e.target.name;
    this.setState((state) => ({
      firstSekrot: {
        ...state.firstSekrot,
        ...{ [eventName]: eventCheked },
      },
    }));

    e.target.checked = !!e.target.checked;
  };

  downloadHero = (e) => {
    e.preventDefault();
    axios
      .post("/api/create/create-hero", this.state)
      .then(() => axios.get("/api/create/get-hero", { responseType: "blob" }))
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: "application/pdf" });

        saveAs(pdfBlob, "newPdf.pdf");
      });
  };

  render() {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll("select");
      var instances = M.FormSelect.init(elems, "class_option");
    });
    setTimeout(() => {
       M.AutoInit();
       M.updateTextFields();
    }, 1000);

    return (
      <div>
        <Header />
        <div className='row'>
          <div className='col s12 base_data_wrapper'>
            <div className='input-field col s3 offset-s1 hero_name'>
              <input
                id='hero_name'
                type='text'
                className='validate'
                name='name'
                value={this.state.baseData.name}
                onChange={(e) => this.FuncManagerBaseData("baseData", e)}
              />
              <label htmlFor='hero_name'>Имя персонажа:</label>
            </div>
            <div className='col s8 hero_base_data'>
              <div className=' col s5 hero_base_data_сlass'>
                <label>Класс:</label>
                {}
                <select
                  value={this.state.baseData.class}
                  name='class'
                  onChange={(e) => this.FuncManagerBaseData("baseData", e)}
                >
                  <option className='class_option' value='0'>
                    Выбрать
                  </option>
                  <option className='class_option' value='Варвар'>
                    Варвар
                  </option>
                  <option className='class_option' value=' Бард'>
                    Бард
                  </option>
                  <option className='class_option' value='Жрец'>
                    Жрец
                  </option>
                  <option className='class_option' value='Друид'>
                    Друид
                  </option>
                  <option className='class_option' value='Воин'>
                    Воин
                  </option>
                  <option className='class_option' value='Монах'>
                    Монах
                  </option>
                  <option className='class_option' value='Паладин'>
                    Паладин
                  </option>
                  <option className='class_option' value='Следопыт'>
                    Следопыт
                  </option>
                  <option className='class_option' value='Плут'>
                    Плут
                  </option>
                  <option className='class_option' value='Чародей'>
                    Чародей
                  </option>
                  <option className='class_option' value=' Колдун'>
                    Колдун
                  </option>
                  <option className='class_option' value='Волшебник'>
                    Волшебник
                  </option>
                </select>
              </div>
              <div className='input-field col s5 hero_base_data_subClass'>
                <input
                  id='hero_subClass'
                  type='text'
                  name='subClass'
                  value={this.state.baseData.subClass}
                  onChange={(e) => this.FuncManagerBaseData("baseData", e)}
                />
                <label htmlFor='hero_subClass'>Подкласс:</label>
              </div>
              <div className='input-field col s2 hero_base_data_lvl'>
                <input
                  id='hero_lvl'
                  type='text'
                  className='validate'
                  name='lvl'
                  value={this.state.baseData.lvl}
                  onChange={(e) => this.FuncManagerBaseData("baseData", e)}
                />
                <label htmlFor='hero_lvl'>Уровень:</label>
              </div>
              <div className='input-field col s6 hero_base_data_race'>
                <input
                  id='hero_race'
                  type='text'
                  className='validate'
                  name='race'
                  value={this.state.baseData.race}
                  onChange={(e) => this.FuncManagerBaseData("baseData", e)}
                />
                <label htmlFor='hero_race'>Расса:</label>
              </div>
              <div className='input-field col s6 hero_base_data_subRace'>
                <input
                  id='hero_subRace'
                  type='text'
                  className='validate'
                  name='subRace'
                  value={this.state.baseData.subRace}
                  onChange={(e) => this.FuncManagerBaseData("baseData", e)}
                />
                <label htmlFor='hero_subRace'>Подрасса:</label>
              </div>
            </div>
          </div>
        </div>
        <div className='row secondRow'>
          <div className='col s4 first_column_data'>
            <BaseAttr
              baseAttr={this.state.baseAttr}
              value={this.state.value}
              handleAttr={this.handleAttr}
            />
            <SkillAndTrials
              trialsValue={this.state.trialsValue}
              skillsValue={this.state.skillsValue}
              baseAttr={this.state.baseAttr}
              handleAttr={this.handleAttr}
              handleRadioDataSkills={(e) =>
                this.FuncManagerBaseData("skills", e)
              }
              handleRadioData={(e) =>
                this.FuncManagerBaseData("savingThrows", e)
              }
            />
            <InstrSkillsLang
              instruments={this.state.instruments}
              otherSkills={this.state.otherSkills}
              handleInstrSkill={(e) =>
                this.FuncManagerComplexData("instruments", "instrId", e)
              }
              handleAddField={(e) => this.FuncManagerAddField("instruments", e)}
              handleOtherSkill={(e) =>
                this.FuncManagerComplexData("otherSkills", "skillId", e)
              }
              handleAddOtherSkill={(e) =>
                this.FuncManagerAddField("otherSkills", e)
              }
            />
          </div>
          <div className='col s4 second_column_data'>
            <DataFirstSector
              firstSekrot={this.state.firstSekrot}
              handleFirstSektor={(e) => this.FuncmanagerSimpleData("firstSekrot", e)}
              handleDataFirstRadio={this.handleDataFirstRadio}
            />
            <Attack
              attack={this.state.attack}
              handleAddAttack={(e) => this.FuncManagerAddField("attack", e)}
              handleAttack={(e) =>
                this.FuncManagerComplexData("attack", "attackId", e)
              }
            />
            <Equipment
              gold={this.state.gold}
              equipmentItems={this.state.equipmentItems}
              handleEquipment={(e) => this.FuncmanagerSimpleData("gold", e)}
              handleEquipmentItems={(e) =>
                this.FuncManagerComplexData("equipmentItems", "itemsId", e)
              }
              handleAddEquipItem={(e) =>
                this.FuncManagerAddField("equipmentItems", e)
              }
            />
          </div>
          <div className='col s4 third_column_data'>
            <CharacterTrait
              trait={this.state.trait}
              features={this.state.features}
              handleTrait={(e) => this.FuncmanagerSimpleData("trait", e)}
              handleFeatures={(e) =>
                this.FuncManagerComplexData("features", "featuresId", e)
              }
              handleAddFeatures={(e) => this.FuncManagerAddField("features", e)}
            />
          </div>
        </div>
        <div className='row'>
          <div className='row'>
            <div className='result_btn col s6 offset-s3'>
              <button
                className=' col s3 btn pink lighten-1 btn'
                onClick={this.downloadHero}
              >
                Скачать
              </button>
              <SaveButton dataHero={this.state} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CreateHero.contextType = AuthContext;
export default withRouter(CreateHero);
