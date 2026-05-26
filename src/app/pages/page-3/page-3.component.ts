import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-page-3',
  templateUrl: './page-3.component.html'
})
export class PageThreeComponent implements OnInit {

  nameState!:string;

  constructor(private _state: StateService) { }

  ngOnInit(): void {
    this.getState();
  }

  getState() {
    this._state.getData().subscribe(res => this.nameState = res.name);
  }

  emit(val:string) {
    this._state.addData({name: val});
  }

}
