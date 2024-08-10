export interface ISelectTravelCompanionList {
   id: number;
   title: string,
   desc: string,
   icon: string,
   people: string,
}

export const SelectTravelCompanionList: ISelectTravelCompanionList[] = [
   {
      id: 1,
      title: 'Just Me',
      desc: 'A sole traveles in exploration',
      icon: '🛩️',
      people: '1 Person',
   },
   {
      id: 2,
      title: 'A Couple',
      desc: 'Two travelers in tandem', // 🍻🥂🌋🛩️🏰
      icon: '🥂',
      people: '2 People'
   },
   {
      id: 3,
      title: 'Family',
      desc: 'A group of fun loving adv',
      icon: '🏰',
      people: '3 to 5 People'
   },
   {
      id: 4,
      title: 'Friends',
      desc: 'A bunch of thrill-seekers',
      icon: '🌋',
      people: '5 to 10 People'
   },
]