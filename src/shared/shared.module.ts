import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { NgxBootstrapModule } from '../modules/ngx-bootstrap';
import { CounterModule } from '../modules/counter/counter.module';
import { PeopleModule } from '../modules/people/people.module';
import { AppNavbarModule } from '../modules/navbar';

@NgModule({
    exports: [
        NgxBootstrapModule,
        CounterModule,
        PeopleModule,
        AppNavbarModule,
    ],
})
export class SharedModule {}
