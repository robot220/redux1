import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../app.state.model';
import { IPerson } from '../../../modules/people/models';

@Injectable()
export class PeopleActions {
    static CREATE = '[People] CREATE';

    constructor(private ngRedux: NgRedux<IAppState>) {}

    public static crateAction(person: IPerson) {
        return {
            type: PeopleActions.CREATE,
            payload: person,
        };
    }

    public create(person: IPerson) {
        this.ngRedux.dispatch(PeopleActions.crateAction(person));
    }
}
