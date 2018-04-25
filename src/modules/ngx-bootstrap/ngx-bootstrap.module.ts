import { NgModule } from '@angular/core';

import {
    BsDropdownModule,
    TooltipModule,
    AlertModule,
    ModalModule
} from 'ngx-bootstrap';

@NgModule({
    exports: [BsDropdownModule, TooltipModule, ModalModule, AlertModule]
})
export class NgxBootstrapModule {}
