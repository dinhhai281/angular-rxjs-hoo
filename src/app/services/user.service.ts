import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

const elementUrl = (strings: TemplateStringsArray) =>
  `https://rerollcdn.com/GENSHIN/Elements/Element_${strings[0]}.png`;

const charUrl = (strings: TemplateStringsArray) => `https://rerollcdn.com/GENSHIN/Characters/${strings[0]}.png`;
export interface User {
  name: string;
  element: string;
  elementImgUrl: string;
  avatarUrl: string;
}

const ALL_USER: User[] = [
  { name: 'Diona', element: 'Cryo', elementImgUrl: elementUrl`Cryo`, avatarUrl: charUrl`Diona` },
  { name: 'Tartaglia', element: 'Hydro', elementImgUrl: elementUrl`Hydro`, avatarUrl: charUrl`Tartaglia` },
  { name: 'Xinyan', element: 'Pyro', elementImgUrl: elementUrl`Pyro`, avatarUrl: charUrl`Xinyan` },
  { name: 'Zhongli', element: 'Geo', elementImgUrl: elementUrl`Geo`, avatarUrl: charUrl`Zhongli` },
  { name: 'Amber', element: 'Pyro', elementImgUrl: elementUrl`Pyro`, avatarUrl: charUrl`Amber` },
  { name: 'Barbara', element: 'Hydro', elementImgUrl: elementUrl`Hydro`, avatarUrl: charUrl`Barbara` },
  { name: 'Beidou', element: 'Electro', elementImgUrl: elementUrl`Electro`, avatarUrl: charUrl`Beidou` },
  { name: 'Bennett', element: 'Pyro', elementImgUrl: elementUrl`Pyro`, avatarUrl: charUrl`Bennett` },
  { name: 'Chongyun', element: 'Cryo', elementImgUrl: elementUrl`Cryo`, avatarUrl: charUrl`Chongyun` },
  { name: 'Diluc', element: 'Pyro', elementImgUrl: elementUrl`Pyro`, avatarUrl: charUrl`Diluc` },
  { name: 'Fischl', element: 'Electro', elementImgUrl: elementUrl`Electro`, avatarUrl: charUrl`Fischl` },
  { name: 'Jean', element: 'Anemo', elementImgUrl: elementUrl`Anemo`, avatarUrl: charUrl`Jean` },
  { name: 'Kaeya', element: 'Cryo', elementImgUrl: elementUrl`Cryo`, avatarUrl: charUrl`Kaeya` },
  { name: 'Keqing', element: 'Electro', elementImgUrl: elementUrl`Electro`, avatarUrl: charUrl`Keqing` },
  { name: 'Klee', element: 'Pyro', elementImgUrl: elementUrl`Pyro`, avatarUrl: charUrl`Klee` },
  { name: 'Lisa', element: 'Electro', elementImgUrl: elementUrl`Electro`, avatarUrl: charUrl`Lisa` },
  { name: 'Mona', element: 'Hydro', elementImgUrl: elementUrl`Hydro`, avatarUrl: charUrl`Mona` },
  { name: 'Ningguang', element: 'Geo', elementImgUrl: elementUrl`Geo`, avatarUrl: charUrl`Ningguang` },
  { name: 'Noelle', element: 'Geo', elementImgUrl: elementUrl`Geo`, avatarUrl: charUrl`Noelle` },
  { name: 'Qiqi', element: 'Cryo', elementImgUrl: elementUrl`Cryo`, avatarUrl: charUrl`Qiqi` },
  { name: 'Razor', element: 'Electro', elementImgUrl: elementUrl`Electro`, avatarUrl: charUrl`Razor` },
  { name: 'Sucrose', element: 'Anemo', elementImgUrl: elementUrl`Anemo`, avatarUrl: charUrl`Sucrose` },
  { name: 'Venti', element: 'Anemo', elementImgUrl: elementUrl`Anemo`, avatarUrl: charUrl`Venti` },
  { name: 'Xiangling', element: 'Cryo', elementImgUrl: elementUrl`Cryo`, avatarUrl: charUrl`Xiangling` },
];

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  getUsers(query: string) {
    return of(ALL_USER).pipe(
      map(users =>
        users.filter(user => [user.element.toLowerCase(), user.name.toLowerCase()].join('').includes(query)),
      ),
      delay(1000),
    );
  }
}
