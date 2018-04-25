import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../app.state.model';
import { IAction } from '../../../shared/types/action.type';

@Injectable()
export class RouterActions {
    public static UPDATE_LOCATION = '[Router] UPDATE_LOCATION';

    public static updateLocationAction(path: string): IAction {
        return {
            type: RouterActions.UPDATE_LOCATION,
            payload: path,
        };
    }

    constructor(private ngRedux: NgRedux<IAppState>) {}

    public updateLocation(path: string) {
        this.ngRedux.dispatch(RouterActions.updateLocationAction(path));
    }
}
