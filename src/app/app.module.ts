import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgReduxModule } from '@angular-redux/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '../store/store.module';

import { SERVICE_PROVIDERS } from '../shared/services/service-providers';

import { AppComponent } from './app.component';
import { SharedModule } from '../shared';

@NgModule({
    imports:      [
        NgReduxModule,
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MDBBootstrapModule.forRoot(),
        AppRoutingModule,
        StoreModule,
        SharedModule,
    ],
    declarations: [
        AppComponent,
    ],
    providers:    [ SERVICE_PROVIDERS ],
    schemas:      [ CUSTOM_ELEMENTS_SCHEMA ],
    bootstrap:    [ AppComponent ]
})

export class AppModule {}
