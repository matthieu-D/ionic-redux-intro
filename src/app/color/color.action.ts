import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';
import { FluxStandardAction } from 'flux-standard-action';
import { ColorAddPayload, ColorAddMetaData } from '../../app/color/color.model';

export type ColorLoadAction = FluxStandardAction<null, null>;
export type ColorAddAction = FluxStandardAction<ColorAddPayload, ColorAddMetaData>;
export type ColorRemoveAction = FluxStandardAction<null, null>;

@Injectable()
export class ColorActions {
  static readonly LOAD_COLORS = 'LOAD_COLORS';
  static readonly ADD_COLORS = 'ADD_COLORS';
  static readonly REMOVE_LAST_COLOR = 'REMOVE_LAST_COLOR';

  @dispatch()
  loadColors = (): ColorLoadAction => ({
    type: ColorActions.LOAD_COLORS,
    meta: null,
    payload: null
  });

  @dispatch()
  addColors = (colors: string[]): ColorAddAction => ({
    type: ColorActions.ADD_COLORS,
    meta: { colors },
    payload: colors
  });

  @dispatch()
  removeLastColor = (): ColorRemoveAction => ({
    type: ColorActions.REMOVE_LAST_COLOR,
    meta: null,
    payload: null
  });
}
