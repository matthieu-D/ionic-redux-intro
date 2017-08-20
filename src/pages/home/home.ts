import { Component } from '@angular/core';
import { NgRedux, select, DevToolsExtension } from '@angular-redux/store';

import { ColorListState } from '../../app/color/color.model';
import { INITIAL_STATE, colorReducer } from '../../app/color/color.reducer';
import { ColorActions } from '../../app/color/color.action';

import { Observable } from 'rxjs/Observable';

declare var require;

var reduxLogger = require('redux-logger');

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @select() readonly colorList$: Observable<ColorListState>;

  constructor( public store: NgRedux<ColorListState>, public colorActions: ColorActions, public devTools: DevToolsExtension) {

    store.configureStore(
      colorReducer,
      INITIAL_STATE,
      [ reduxLogger.createLogger()],
      devTools.isEnabled() ? [ devTools.enhancer() ] : []);

    colorActions.loadColors();
  }

  addColors() {
    this.colorActions.addColors(['purple', 'yellow']);
    console.log(this.store);
  }

  removeLastColor() {
    this.colorActions.removeLastColor();
  }
}
