import { NgModule } from '@angular/core';

import { PeopleComponent } from './components/people.component';

@NgModule({
    exports: [
        PeopleComponent,
    ],
    declarations: [
        PeopleComponent,
    ],
})
export class PeopleModule {}
