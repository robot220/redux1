import { Injectable } from '@angular/core';
import { createLogger } from 'redux-logger';
import { DevToolsExtension } from '@angular-redux/store';
import { Middleware, StoreEnhancer } from 'redux';
// import { autoRehydrate } from 'redux-persist';

import { IAppState } from '../app.state.model';
import { RootEpics } from '../epics/root.epic';
import { environment } from '../../environments/environment';

@Injectable()
export class MiddlewaresProvider {
    private middlewares: Middleware[] = [];
    // private enhancers: StoreEnhancer<IAppState>[] = [];
    private enhancers: any[] = [];

    constructor(
        private devTools: DevToolsExtension,
        private rootEpics: RootEpics) {

        // this.enhancers.push(autoRehydrate({ log: !environment.production }));

        if (!environment.production) {
            this.middlewares.push(
                createLogger({
                    level: 'info',
                    collapsed: true,
                })
            );

            if (devTools.isEnabled()) {
                this.enhancers.push(devTools.enhancer());
            }
        }
        this.middlewares.push(this.rootEpics.createEpicsMiddleware());
    }

    public getMiddlewares(): Middleware[] {
        return this.middlewares;
    }

    public getEnhancers(): StoreEnhancer<IAppState>[] {
        return this.enhancers;
    }
}
