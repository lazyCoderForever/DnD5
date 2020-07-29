const heroesData = {
    'Варвар':{
        baseData: {
            name: "",
            class: "",
            subClass: "",
            lvl: "",
            race: "",
            subRace: ""
        },
        baseAttr: {
            strength: 15,
            agility: 13,
            stamina: 14,
            intellig: 8,
            wise: 10,
            charisma: 12,
            bonusSkill: 2,
        },
        firstSekrot: {
            armorClass: 0,
            initiative: 0,
            speed: 0,
            maxHelth: 0,
            currentHealth: 0,
            tempHealth: 0,
            hitHealth: 12,
            maxHitHealt: 14,
            succes_0: false,
            succes_1: false,
            succes_2: false,
            faile_0: false,
            faile_1: false,
            faile_2: false,
          },
          attack: [
            {
              attackId: uuidv4(),
              name: "",
              type: "",
              value: "",
            },
          ],
    }
}