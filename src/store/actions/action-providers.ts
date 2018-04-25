import { RouterActions } from './router/router.actions';
import { CounterActions } from './counter/counter.actions';
import { PeopleActions } from './people/people.actions';

export * from './router/router.actions';
export * from './counter/counter.actions';
export * from './people/people.actions';

export const ACTION_PROVIDERS = [
    RouterActions,
    CounterActions,
    PeopleActions,
];
