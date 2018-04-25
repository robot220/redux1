import { Injectable } from '@angular/core';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import { IEpicsService } from '../../shared/types/epics.type';
import { CounterEpics } from './counter/counter.epics';

@Injectable()
export class RootEpics {
    private epicsServices: Array<IEpicsService> = [];
    constructor(
        private counterEpics: CounterEpics
    ) {
        this.epicsServices = [
            counterEpics
        ];
    }

    public getEpic() {
        return combineEpics(...this.epicsServices.map(service => service.getEpic()));
    }
    public createEpicsMiddleware() {
        return createEpicMiddleware(this.getEpic());
    }
}
