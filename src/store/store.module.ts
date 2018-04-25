import { NgModule } from '@angular/core';

import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { NgReduxRouter } from '@angular-redux/router';

import { IAppState, appStateDefault } from './app.state.model';
import { rootReducer } from './reducers/root-reducer';
import { RootEpics } from './epics/root.epic';
import { STORE_PROVIDERS } from './store-providers';
import { MiddlewaresProvider } from './middlewares/middlewares';

@NgModule({
    imports: [NgReduxModule],
    providers: [STORE_PROVIDERS, RootEpics],
})
export class StoreModule {
    constructor(
        private ngRedux: NgRedux<IAppState>,
        private middlewaresProvider: MiddlewaresProvider,
        private ngReduxRouter: NgReduxRouter,
    ) {
        ngRedux.configureStore(
            rootReducer,
            appStateDefault,
            middlewaresProvider.getMiddlewares(),
            middlewaresProvider.getEnhancers()
        );

        if (this.ngReduxRouter) {
            this.ngReduxRouter.initialize();
        }
    }
}
