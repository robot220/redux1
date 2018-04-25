import { combineReducers } from 'redux';
import { routerReducer } from '@angular-redux/router';

import { IAppState } from '../app.state.model';
import { counterReducer } from './counter/counter.reducer';
import { peopleReducer } from './people/people.reducer';

const appReducer = combineReducers<IAppState>({
    counter: counterReducer,
    people: counterReducer,
    router: routerReducer,
});

export const rootReducer = (state, action) => {
    return appReducer(state, action);
};
