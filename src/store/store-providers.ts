import { DevToolsExtension } from '@angular-redux/store';
import { NgReduxRouter } from '@angular-redux/router';
import { ACTION_PROVIDERS } from './actions/action-providers';
import { MiddlewaresProvider } from './middlewares/middlewares';
import { EPIC_PROVIDERS } from './epics/epic-providers';
import { rootReducer } from './reducers/root-reducer';
import { IAppState } from './app.state.model';

export { MiddlewaresProvider };
export { IAppState, rootReducer };

export const STORE_PROVIDERS: any[] = [
    { provide: NgReduxRouter, useClass: NgReduxRouter },
    { provide: DevToolsExtension, useClass: DevToolsExtension },
    [
        MiddlewaresProvider,
    ],
    ...ACTION_PROVIDERS,
    ...EPIC_PROVIDERS,
];
