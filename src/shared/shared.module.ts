import { NgModule } from '@angular/core';
import { CounterModule } from '../modules/counter/counter.module';
import { PeopleModule } from '../modules/people/people.module';
import { AppNavbarModule } from '../modules/navbar';

@NgModule({
    exports: [
        CounterModule,
        PeopleModule,
        AppNavbarModule,
    ],
})
export class SharedModule {}
