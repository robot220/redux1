import { Epic } from 'redux-observable';

export type EpicFunction = () => Epic<any, any>;

export interface IEpicsService {
    getEpic: EpicFunction;
}
