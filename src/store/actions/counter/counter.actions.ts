import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../app.state.model';

@Injectable()
export class CounterActions {
    static INCREASE = '[Counter] INCREASE';
    static DECREASE = '[Counter] DECREASE';

    constructor(private ngRedux: NgRedux<IAppState>) {}

    public static increaseAction(value = 0) {
        return {
            type: CounterActions.INCREASE,
            payload: value,
        };
    }

    public static decreaseAction(value = 0) {
        return {
            type: CounterActions.DECREASE,
            payload: value,
        };
    }

    public increase(value: number) {
        this.ngRedux.dispatch(CounterActions.increaseAction(value));
    }

    public decrease(value: number) {
        this.ngRedux.dispatch(CounterActions.decreaseAction(value));
    }
}
