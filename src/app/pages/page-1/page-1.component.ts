import { Component } from '@angular/core';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-page-1',
  templateUrl: './page-1.component.html'
})
export class PageOneComponent {

  name!:string;

  constructor(private _state: StateService) { }

  emit(val: string) {
    this._state.addData({name: val});
  }
}
