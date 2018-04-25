import { IPerson } from '../modules/people/models';

export interface IAppState {
    counter?: number;
    people: IPerson[];
}

export const appStateDefault: IAppState = {
    counter: 0,
    people: [],
};
