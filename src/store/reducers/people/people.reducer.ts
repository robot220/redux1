import { IAction } from '../../../shared/types/action.type';
import { PeopleActions } from '../../actions/action-providers';
import { IPerson, PersonType } from '../../../modules/people/models';

const INITIAL_STATE: IPerson[] = [];

export function peopleReducer(state: IPerson[] = INITIAL_STATE, action: IAction) {
    switch (action.type) {
        case PeopleActions.CREATE:
            return [...state, action.payload];
        default:
            return state;
    }
}
