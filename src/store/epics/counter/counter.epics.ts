import { Injectable } from '@angular/core';
import { Store } from 'redux';
import { ActionsObservable, combineEpics, Epic } from 'redux-observable';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/catch';

import { CounterActions } from '../../actions/action-providers';
import { IEpicsService } from '../../../shared/types/epics.type';
import { IAction } from '../../../shared/types/action.type';
import { IAppState } from '../../app.state.model';

@Injectable()
export class CounterEpics implements IEpicsService {
    constructor() {}

    public getEpic<T, S>(): Epic<T, S> {
        return combineEpics(
            // this.increase.bind(this),
            // this.decrease.bind(this),
        );
    }

    // private increase(action$: ActionsObservable<IAction>, store: Store<IAppState>) {
    //     return action$.ofType(
    //         CounterActions.INCREASE
    //     ).map(() => {
    //         const state: IAppState = store.getState();
    //     }).catch(error => Observable.of({
    //         type: CounterActions.INCREASE
    //     }));
    // }
    //
    // private decrease(action$: ActionsObservable<IAction>, store: Store<IAppState>) {
    //     return action$.ofType(
    //         CounterActions.DECREASE
    //     ).map(() => {
    //         const state: IAppState = store.getState();
    //     }).catch(error => Observable.of({
    //         type: CounterActions.DECREASE
    //     }));
    // }

}
