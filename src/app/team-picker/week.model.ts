import {Match} from "./match.model";

export class Week {
  days!: Day[];
  weekNumber!: number;
}

export class Day {
  matches!: Match[];
  dayNumber!: number;
}


export let week2: Week = {
  weekNumber: 2,
  days: [
    {
      matches: [
        {
          id: 211,
          winner: 0,
          pick: 0,
          firstTeam: {
            id: 'MSF',
            name: 'Misfits',
            src: 'assets/img/MFS.png'
          },
          time: '18:00',
          secondTeam: {
            id: 'XL',
            name: 'Excel Esports',
            src: 'assets/img/XLL.png'
          }
        },
        {
          id: 212,
          winner: 0,
          pick: 0,
          firstTeam: {
            id: 'FNC',
            name: 'Fnatic',
            src: 'assets/img/FNC.png'
          },
          time: '19:00',
          secondTeam: {
            id: 'AST',
            name: 'Astralis',
            src: 'assets/img/AST.png'
          }
        },
        {
          id: 213,
          winner: 0,
          pick: 0,
          firstTeam: {
            id: 'SK',
            name: 'SK Gaming',
            src: 'assets/img/SK.png'
          },
          time: '20:00',
          secondTeam: {
            id: 'G2',
            name: 'G2 Esports',
            src: 'assets/img/G2.png'
          }
        },
        {
          id: 214,
          winner: 0,
          pick: 0,
          firstTeam: {
            id: 'VIT',
            name: 'Vitality',
            src: 'assets/img/VIT.png'
          },
          time: '21:00',
          secondTeam: {
            id: 'BDS',
            name: 'BDS Gaming',
            src: 'assets/img/BDS.png'
          }
        },
        {
          id: 215,
          winner: 0,
          pick: 0,
          firstTeam: {
            id: 'RGE',
            name: 'Rogue',
            src: 'assets/img/RGE.png'
          },
          time: '22:00',
          secondTeam: {
            id: 'MAD',
            name: 'Mad Lions',
            src: 'assets/img/MAD.png'
          }
        }
      ],
      dayNumber: 1
    },
    {
      matches: [
        {
          id: 221,
          winner: 0,
          pick: 0,
          firstTeam: {
            id: 'SK',
            name: 'SK Gaming',
            src: 'assets/img/SK.png'
          },
          time: '17:00',
          secondTeam: {
            id: 'XL',
            name: 'Excel Esports',
            src: 'assets/img/XLL.png'
          }
        },

        {
          id: 222,
          winner: 0,
          pick: 0,
          firstTeam: {
            id: 'MAD',
            name: 'Mad Lions',
            src: 'assets/img/MAD.png'
          },
          time: '18:00',
          secondTeam: {
            id: 'AST',
            name: 'Astralis',
            src: 'assets/img/AST.png'
          }
        },

        {
          id: 223,
          winner: 0,
          pick: 0,
          firstTeam: {
            id: 'BDS',
            name: 'BDS Gaming',
            src: 'assets/img/BDS.png'
          },
          time: '19:00',
          secondTeam: {
            id: 'RGE',
            name: 'Rogue',
            src: 'assets/img/RGE.png'
          }
        },

        {
          id: 224,
          winner: 0,
          pick: 0,
          firstTeam: {
            id: 'MSF',
            name: 'Misfits',
            src: 'assets/img/MFS.png'
          },
          time: '20:00',
          secondTeam: {
            id: 'FNC',
            name: 'Fnatic',
            src: 'assets/img/FNC.png'
          }
        },

        {
          id: 225,
          winner: 0,
          pick: 0,
          firstTeam: {
            id: 'VIT',
            name: 'Vitality',
            src: 'assets/img/VIT.png'
          },
          time: '21:00',
          secondTeam: {
            id: 'G2',
            name: 'G2 Esports',
            src: 'assets/img/G2.png'
          }
        }
      ],
      dayNumber: 2
    }
  ],
}
