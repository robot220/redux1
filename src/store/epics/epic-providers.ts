import { CounterEpics } from './counter/counter.epics';

export {
    CounterEpics
};

export const EPIC_PROVIDERS: any[] = [
    CounterEpics
];
