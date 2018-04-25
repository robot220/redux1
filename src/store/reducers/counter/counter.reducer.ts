import { IAction } from '../../../shared/types/action.type';
import { CounterActions } from '../../actions/action-providers';

const INITIAL_STATE = 0;

export function counterReducer(state: number = INITIAL_STATE,
                               action: IAction) {
    switch (action.type) {
        case CounterActions.INCREASE:
            return state + action.payload;
        case CounterActions.DECREASE:
            return state - action.payload;
        default:
            return state;
    }
}
