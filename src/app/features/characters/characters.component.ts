import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
import { debounceTime, map, startWith, switchMap, tap } from 'rxjs/operators';

import { User, UserService } from '../../services';

@Component({
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharactersComponent {
  queryControl = new FormControl('');
  selectedElement$ = new BehaviorSubject<string>(null);
  elements$ = combineLatest([of(['Anemo', 'Cryo', 'Electro', 'Geo', 'Hydro', 'Pyro']), this.selectedElement$]).pipe(
    map(([elements, selectedElement]) =>
      elements.map(element => ({ name: element, selected: element === selectedElement })),
    ),
  );
  vm$ = combineLatest([
    (this.queryControl.valueChanges as Observable<string>).pipe(startWith(''), debounceTime(500)),
    this.selectedElement$.pipe(
      tap(value => {
        if (!!value) {
          return this.queryControl.disable({ emitEvent: false });
        }
        return this.queryControl.enable({ emitEvent: false });
      }),
    ),
  ]).pipe(
    switchMap(([searchTerm, selectedElement]) =>
      this.userService.getUsers((selectedElement ?? searchTerm).toLowerCase()).pipe(
        map(response => ({ data: response, loading: false })),
        startWith({ data: [] as User[], loading: true }),
      ),
    ),
  );

  constructor(private readonly userService: UserService) {}
}
