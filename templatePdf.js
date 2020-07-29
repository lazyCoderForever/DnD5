module.exports = (data) => {
  function trials() {
    const tempData = [
      "strength",
      "agility",
      "stamina",
      "intellig",
      "wise",
      "charisma",
    ];
    const tempData0 = [
      "сила",
      "ловкость",
      "выносливость",
      "интеллект",
      "мудрость",
      "харизма",
    ];
    const tempData1 = [
      "trStrength",
      "trAg",
      "trStamina",
      "trIntellig",
      "trWise",
      "trCharisma",
    ];
    const resData = tempData.map((el, index) => {
      if (data.trialsValue[tempData1[index]]) {
        return `<li class="base-data-item trials">

                <div class="true"></div>
                <div >${data.baseAttr[el] + data.baseAttr.bonusSkill}</div>
                <div>${tempData0[index]}</div>
                </li>
                `
      } else {
        return `<li class="base-data-item trials">
                <div class="false"></div>
                <div>${data.baseAttr[el]}</div>
                <div>${tempData0[index]}</div></li>
                `
      }
    });
    return resData;
  }

  function instruments() {
    const tempData = data.instruments.map((el) => {
      return `<tr class="Th">
           <td colspan="2">${el.name}</td>
           <td colspan="2">${el.skill}</td>
           <td colspan="2">${el.setting}</td>
           </tr> `;
    });
    return tempData;
  }

  function lang() {
    const tempData = data.otherSkills.map((el) => {
      return `<tr class="Th">
           <td colspan="4">${el.type}</td>
           <td colspan="4">${el.skill}</td>
           </tr> `;
    });

    return tempData;
  }
  function attack() {
    const tempData = data.attack.map((el) => {
      return `<tr class="Th">
      <td colspan="1">${el.name}</td>
      <td colspan="1">${el.type}</td>
      <td colspan="1">${el.value}</td>
           </tr> `;
    });

    return tempData;
  }
  function features() {
    const tempData = data.features.map((el) => {
      return `<tr class="Th">
      <td colspan="1">${el.name}</td>
      <td colspan="1">${el.source}</td>
      <td colspan="1">${el.typeSource}</td>
           </tr> `;
    });

    return tempData;
  }
  function equipment() {
    const tempData = data.equipmentItems.map((el) => {
      return `<tr class="Th">
           <td colspan="1">${el.amount}</td>
           <td colspan="1">${el.item}</td>
           <td colspan="1">${el.weight}</td>
           </tr> `;
    });

    return tempData;
  }
  return `
    <!doctype html>
    <html>
       <head>
          <meta charset="utf-8">
          <title>Hero ${data}</title>
          <style>
            h2{
                fons-size:14px;
                font-weight: bold;
            }
            li{
                list-style: none;
            }
            .Th{
                text-align: center;    в
                margin: 5px 15px;
            }
            .tableTH {
                padding: 15px;
                text-align: center;    
              }
            .tableTB {
                padding: 5px;
                text-align: center;    
              }

            .instr-wrapper .instr-title{
                display: inline-block;
            }
            .trials div{
                display:inline-block;
            }
            .information{
                text-align: center;
            }
            .fasleRand{
                display: inline-block;
                width: 10px;
                height: 10px;
                background-color: white;
                border: 1px solid black
            }
            .trueRand{
                display: inline-block;
                width: 10px;
                height: 10px;
                background-color: black;
                border: 1px solid black
            }
            .true{
                width:4px;
                height:4px;
                background-color:black;
                border:1px solid black;
            }
            .false{
                width:4px;
                height:4px;
                background-color:white;
                border:1px solid black;
            }
            .base-data-wrap .base-data-item{
                margin: 10px 20px;
            }
            .base-data-wrap .trials div{
                display: inline-block;
            }
          </style>
       </head>
       <body>
       <table cols="4">
            <tr>
                <td colspan="1">
                    <ul class="base-data-wrap">
                    <li class="base-data-item">Имя: ${data.baseData.name}</li>
                    <li class="base-data-item">Класс: ${data.baseData.class}</li>
                    <li class="base-data-item">Подкласс: ${
                    data.baseData.subClass
                    }</li>
                    <li class="base-data-item">Уровень: ${data.baseData.lvl}</li>
                    <li class="base-data-item">Расса: ${data.baseData.race}</li>
                    <li class="base-data-item">Подрасса: ${
                    data.baseData.subRace
                    }</li>

                    </ul>
                </td>
                <td colspan="1">
                    <h2>Основные аттрибуты</h2>
                    <ul class="main-attr-wrap">
                        
                        <li class="base-data-item">Сила: ${data.baseAttr.strength}</li>
                        <li class="base-data-item">Ловкость: ${
                        data.baseAttr.agility
                        }</li>
                        <li class="base-data-item">Выносливость: ${
                        data.baseAttr.stamina
                        }</li>
                        <li class="base-data-item">Интеллект: ${
                        data.baseAttr.intellig
                        }</li>
                        <li class="base-data-item">Мудрость: ${data.baseAttr.wise}</li>
                        <li class="base-data-item">Харизма: ${
                        data.baseAttr.charisma
                        }</li>
                    </ul>
                </td>
                <td colspan="1"> 
                    <h2>Испытания:</h2>
                        <div class="bonus">Пассивная мудрость: 10 </div>  
                        <div class="bonus">Бонус умения:
                        ${data.baseAttr.bonusSkill}
                        </div>
                        <ul class="">
                        ${trials()}
                        
                    </ul>
                </td>
            </tr>


            <tr >
                <td cols="1">
                    <table cellpadding="0" cellspacing="0" cols="6"        >
                        <tr  bgcolor="grey"  >
                            <td ccolspan="2">
                                Интсрумент
                            </td>
                            <td class="tableTH"colspan="2">
                                Умение
                            </td>
                            <td class="tableTH"colspan="2">
                                Характеристика
                            </td>
                        </tr>
                    
                            ${instruments()} 
                    </table>
                 </td>
                <td cols="2">
                    <table cellpadding="0" cellspacing="0" cols="8"        >
                        <tr class="Th" bgcolor="grey"  >
                            <td class="tableTH"colspan="4">
                                Тип
                            </td>
                            <td class="tableTH"colspan="4">
                                Умение
                            </td>
        
                        </tr>
                    
                            ${lang()} 
                    </table>
    
 
                 </td>
                <td cols="1">
                   
                    <table  cellpadding="0" cellspacing="0" cols="6"        >
                        <tr class="Th" bgcolor="grey"  >
                            <td class="tableTH" colspan="2">
                                Класс брони:
                            </td>
                            <td  class="tableTH"colspan="2">
                                Инициатива:
                            </td>
                            <td class="tableTH" colspan="2">
                                Скорость:
                            </td>
                        </tr>
                        <tr class="Th"   >
                            <td colspan="2">
                                ${data.firstSekrot.armorClass}
                            </td>
                            <td colspan="2">
                                ${data.firstSekrot.initiative}
                            </td>
                            <td colspan="2">
                                ${data.firstSekrot.speed}
                            </td>
                        </tr>
                    </table>

                 </td>
            </tr>


            <tr>
                <td cols="1">
                <table cellpadding="0" cellspacing="0" cols="6"        >
                <tr class="Th" bgcolor="grey"  >
                    <td class="tableTH" colspan="2">
                        Максимум ПЗ:
                    </td>
                    <td class="tableTH" colspan="2">
                    Текущие  ПЗ:
                    </td>
                    <td class="tableTH" colspan="2">
                        Временные  ПЗ:
                    </td>
                </tr>
                <tr class="Th"   >
                    <td colspan="2">
                        ${data.firstSekrot.maxHelth}
                    </td>
                    <td colspan="2">
                        ${data.firstSekrot.currentHealth}
                    </td>
                    <td colspan="2">
                    ${data.firstSekrot.tempHealth}
                    </td>
                </tr>
     
            
             </table>
                </td>
                <td cols="2">
                    <table cellpadding="0" cellspacing="0" cols="4"        >
                    <tr class="Th" bgcolor="grey"  >
                        <td class="tableTH" colspan="2">
                        Всего:
                        </td>
                        <td class="tableTH" colspan="2">
                        Кости здоровья:
                        </td>
    
                    </tr>
                    <tr class="Th"   >
                        <td colspan="2">
                            ${data.firstSekrot.hitHealth}
                        </td>
                        <td colspan="2">
                        ${data.firstSekrot.maxHitHealt}
                        </td>
    
                    </tr>
                
                    
                </table>
                </td>
                <td cols="1">
                    <table cellpadding="0" cellspacing="0" cols="4"        >
                    <tr class="Th" bgcolor="grey"  >
                        <td class="tableTH" colspan="2">
                        Успех
                        </td>
                        <td class="tableTH"colspan="2">
                        Провал:
                        </td>
    
                    </tr>
                    <tr class="Th"   >
                        <td colspan="2">
                            <span>${data.firstSekrot.succes_0 ? '<div class="trueRand"></div>' : '<div class="fasleRand"></div>'}
                            </span>
                            <span>${data.firstSekrot.succes_1 ? '<div class="trueRand"></div>' : '<div class="fasleRand"></div>'}
                            </span>
                            <span>${data.firstSekrot.succes_2 ? '<div class="trueRand"></div>' : '<div class="fasleRand"></div>'}
                            </span>
                        </td>
                        <td colspan="2">
                            <span>${data.firstSekrot.faile_0 ? '<div class="trueRand"></div>' : '<div class="fasleRand"></div>'}
                            </span>
                            <span>${data.firstSekrot.faile_1 ? '<div class="trueRand"></div>' : '<div class="fasleRand"></div>'}
                            </span>
                            <span>${data.firstSekrot.faile_2 ? '<div class="trueRand"></div>' : '<div class="fasleRand"></div>'}
                            </span>
                        </td>
    
                    </tr>
                
                    
                </table>
                </td>
            </tr>
            <tr class="Th">
                <td colspan="1">
                <table cellpadding="0" cellspacing="0" cols=3"        >
                <tr class="Th" bgcolor="grey"  >
                    <td class="tableTH" colspan="1">
                    Количество
                    </td>
                    <td class="tableTH" colspan="1">
                    Предмет
                    </td>
                    <td class="tableTH" colspan="1">
                    Вес
                    </td>

                </tr>
                ${equipment()}
            
                
            </table>
                </td>
                <td colspan="1">
                <table cellpadding="0" cellspacing="0" cols=5"        >
                <tr class="Th" bgcolor="grey"  >
                    <td class="tableTB" colspan="1">
                    ММ
                    </td>
                    <td class="tableTB"colspan="1">
                    СМ
                    </td>
                    <td  class="tableTB"colspan="1">
                    ЭМ
                    </td>
                    <td class="tableTB" colspan="1">
                    ЗМ
                    </td>
                    <td class="tableTB"colspan="1">
                    ПМ
                    </td>
            
                </tr>
                <tr>
                    <td colspan="1">
                      ${data.gold.mm}
                    </td>
                    <td colspan="1">
                      ${data.gold.cm}
                    </td>
                    <td colspan="1">
                      ${data.gold.im}
                    </td>
                    <td colspan="1">
                      ${data.gold.zm}
                    </td>
                    <td colspan="1">
                      ${data.gold.pm}
                    </td>
            
                </tr>
            
                
            </table>
                </td>
                <td colspan="2">
                <table cellpadding="0" cellspacing="0" cols=1"        >
                <tr class="Th" bgcolor="grey"  >
                    <td class="tableTH" colspan="1">
                    Общий вес предметов
                    </td>

                </tr>
                <tr class="Th"   >
                    <td class="tableTH" colspan="1">
                    ${data.gold.weight_summarily}
                    </td>

                </tr>
                
            
                
            </table>
                </td>
            </tr>

            <tr>

                <td colspan="1">
                <table cellpadding="0" cellspacing="0" cols="3"        >
                    <tr class="Th" bgcolor="grey"  >
                        <td class="tableTH" colspan="1">
                            Название
                        </td>
                        <td class="tableTH" colspan="1">
                            Бонус
                        </td>
                        <td class="tableTH" colspan="1">
                            Урон/Тип
                        </td>

                    </tr>

                    ${attack()}
                
                    
                </table>
                </td>
                <td colspan="2">
                <table cellpadding="0" cellspacing="0" cols=3"        >
                <tr class="Th" bgcolor="grey"  >
                        <td class="tableTH" colspan="3">
                        ОСОБЕННОСТИ И ЧЕРТЫ
                        </td>
                    </tr>
                    <tr class="Th" bgcolor="grey"  >
                        <td class="tableTH" colspan="1">
                            Название
                        </td>
                        <td class="tableTH" colspan="1">
                            Источник
                        </td>
                        <td class="tableTH" colspan="1">
                            Тип источника
                        </td>

                    </tr>

                    ${features()}
                
                    
                </table>
                </td>
            </tr>
            <tr>
                <td colspan="4">
                <table cellpadding="0" cellspacing="0" cols=4"        >
   
                    <tr class="Th" bgcolor="grey"  >
                        <td class="tableTH" colspan="1">
                        СВОЙСТВА ЛИЧНОСТИ
                        </td>
                        <td class="tableTH" colspan="1">
                        ИДЕАЛЫ
                        </td>
                        <td class="tableTH" colspan="1">
                        УЗЫ
                        </td>
                        <td class="tableTH" colspan="1">
                        ИЗЪЯНЫ
                        </td>
                        
                    </tr>
                    <tr class="Th"  >
                        <td class="tableTH" colspan="1">
                        ${data.trait.personality_traits}
                        </td>
                        <td class="tableTH" colspan="1">
                        ${data.trait.ideals}
                        </td>
                        <td class="tableTH" colspan="1">
                        ${data.trait.bonds}
                        </td>
                        <td class="tableTH" colspan="1">
                        ${data.trait.flaws}
                        </td>
                       
                    </tr>

                
                    
                </table>
                </td>
            </tr>


       </table>
          <div class="main-container">
             
             
             
               
             
             

             

                </br>

               

                 </br>

                
                
          
          </div>
       </body>
    </html>
    `;
};
