import { NgModule } from '@angular/core';

import { CounterComponent } from './counter.component';

@NgModule({
    exports: [
        CounterComponent,
    ],
    declarations: [
        CounterComponent,
    ],
})
export class CounterModule {}
